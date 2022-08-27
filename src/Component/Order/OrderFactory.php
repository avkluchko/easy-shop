<?php

namespace App\Component\Order;

use App\Component\Order\Dto\CreateOrderDto;
use App\Entity\Order;
use App\Entity\OrderItem;

class OrderFactory
{
    public function createFromDto(CreateOrderDto $dto): Order
    {
        $order = new Order();

        foreach ($dto->items as $item) {
            $order->addItem(
                (new OrderItem())
                    ->setGoods($item->goods)
                    ->setName($item->name)
                    ->setQuantity($item->quantity)
                    ->setPrice($item->price)
            );
        }

        return $order;
    }
}
