ARG PHP_VERSION=8.1.6
ARG ALPINE_VERSION=3.15
ARG NGINX_VERSION=1.15

FROM php:${PHP_VERSION}-fpm-alpine${ALPINE_VERSION} AS symfony_php

# persistent / runtime deps
RUN apk add --no-cache \
		acl \
		fcgi \
		file \
		gettext \
		git \
		gnu-libiconv \
	;

# install gnu-libiconv and set LD_PRELOAD env to make iconv work fully on Alpine image.
# see https://github.com/docker-library/php/issues/240#issuecomment-763112749
ENV LD_PRELOAD /usr/lib/preloadable_libiconv.so

ARG APCU_VERSION=5.1.21
RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		$PHPIZE_DEPS \
        icu-dev \
        libpng-dev \
        libpq-dev \
		libzip-dev \
		zlib-dev \
	; \
	\
	docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql; \
	docker-php-ext-configure zip; \
	docker-php-ext-install -j$(nproc) \
        gd \
		intl \
        pdo_pgsql \
		zip \
	; \
	pecl install \
		apcu-${APCU_VERSION} \
    ; \
	pecl clear-cache; \
	docker-php-ext-enable \
		apcu \
		opcache \
	; \
	\
	runDeps="$( \
		scanelf --needed --nobanner --format '%n#p' --recursive /usr/local/lib/php/extensions \
			| tr ',' '\n' \
			| sort -u \
			| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)"; \
	apk add --no-cache --virtual .phpexts-rundeps $runDeps; \
	\
	apk del .build-deps

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER=1

WORKDIR /app

FROM nginx:${NGINX_VERSION}-alpine AS nginx

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /app
