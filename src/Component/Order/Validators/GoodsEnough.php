<?php

declare(strict_types=1);

namespace App\Component\Order\Validators;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 * @Target({"CLASS"})
 */
class GoodsEnough extends Constraint
{
    public string $message = 'There are not enough goods.';

    public function getTargets(): array|string
    {
        return self::CLASS_CONSTRAINT;
    }
}
