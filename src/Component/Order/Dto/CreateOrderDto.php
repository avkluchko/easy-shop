<?php

namespace App\Component\Order\Dto;

use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class CreateOrderDto
{
    /**
     * @var CreateOrderItemDto[]
     */
    #[Assert\Valid]
    #[Assert\Count(min: 1)]
    #[Groups(['orders:write'])]
    public array $items;
}
