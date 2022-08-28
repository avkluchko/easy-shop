<?php

namespace App\Component\Order;

use App\Component\Order\Dto\CreateOrderDto;
use App\Entity\Order;
use Doctrine\ORM\EntityManagerInterface;

class OrderPersister
{
    public function __construct(
        private readonly OrderFactory $factory,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function persist(CreateOrderDto $dto, bool $needFlush = true): Order
    {
        $order = $this->factory->createFromDto($dto);
        $this->entityManager->persist($order);

        if ($needFlush) {
            $this->entityManager->flush();
        }

        return $order;
    }
}
