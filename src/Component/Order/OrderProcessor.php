<?php

namespace App\Component\Order;

use App\Entity\Order;
use Doctrine\ORM\EntityManagerInterface;

class OrderProcessor
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function process(Order $order): Order
    {
        foreach ($order->getItems() as $orderItem) {
            $goods = $orderItem->getGoods();
            $quantity = $goods->getQuantity() - $orderItem->getQuantity();

            if ($quantity < 0) {
                throw new \Exception('Not enough goods quantity');
            }

            $goods->setQuantity($quantity);
        }

        $this->entityManager->flush();

        return $order;
    }
}
