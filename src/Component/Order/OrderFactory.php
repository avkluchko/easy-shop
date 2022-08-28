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

        $sum = 0;
        foreach ($dto->items as $item) {
            $regprice = $item->goods->getRegprice();
            $itemSum = $regprice * $item->quantity;
            $sum += $itemSum;

            $order->addItem(
                (new OrderItem())
                    ->setGoods($item->goods)
                    ->setName($item->goods->getName())
                    ->setQuantity($item->quantity)
                    ->setPrice($regprice)
                    ->setSum($itemSum)
            );
        }

        return $order->setSum($sum);
    }
}
