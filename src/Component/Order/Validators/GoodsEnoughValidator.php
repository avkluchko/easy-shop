<?php

declare(strict_types=1);

namespace App\Component\Order\Validators;

use App\Component\Order\Dto\CreateOrderItemDto;
use App\Repository\GoodsRepository;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class GoodsEnoughValidator extends ConstraintValidator
{
    public function __construct(
        private readonly GoodsRepository $repository
    ) {
    }

    /**
     * @param CreateOrderItemDto $value
     * @param GoodsEnough $constraint
     */
    public function validate(mixed $value, Constraint $constraint): void
    {

    }
}
