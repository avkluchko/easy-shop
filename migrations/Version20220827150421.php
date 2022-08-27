<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20220827150421 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Added orders';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE SEQUENCE order_item_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE orders_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE order_item (id INT NOT NULL, parent_id INT NOT NULL, goods_id BIGINT DEFAULT NULL, name VARCHAR(255) NOT NULL, quantity DOUBLE PRECISION NOT NULL, price DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_52EA1F09727ACA70 ON order_item (parent_id)');
        $this->addSql('CREATE INDEX IDX_52EA1F09B7683595 ON order_item (goods_id)');
        $this->addSql('CREATE TABLE orders (id INT NOT NULL, created TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE order_item ADD CONSTRAINT FK_52EA1F09727ACA70 FOREIGN KEY (parent_id) REFERENCES orders (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE order_item ADD CONSTRAINT FK_52EA1F09B7683595 FOREIGN KEY (goods_id) REFERENCES goods (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP SEQUENCE order_item_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE orders_id_seq CASCADE');
        $this->addSql('ALTER TABLE order_item DROP CONSTRAINT FK_52EA1F09727ACA70');
        $this->addSql('ALTER TABLE order_item DROP CONSTRAINT FK_52EA1F09B7683595');
        $this->addSql('DROP TABLE order_item');
        $this->addSql('DROP TABLE orders');
    }
}
