<?php

namespace App\Component\Order\Dto;

use App\Entity\Goods;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class CreateOrderItemDto
{
    #[Assert\NotNull]
    #[Groups(['orders:write'])]
    public Goods $goods;

    #[Assert\NotNull]
    #[Assert\Positive]
    #[Groups(['orders:write'])]
    public float $quantity;

    /**
     * Цена за единицу - не для сохранения, а для того,
     * чтобы отловить покупку по изменившейся цене.
     */
    #[Assert\NotNull]
    #[Assert\PositiveOrZero]
    #[Groups(['orders:write'])]
    public float $price;
}
