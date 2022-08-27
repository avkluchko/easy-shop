<?php

namespace App\Component\Order;

use ApiPlatform\Core\Validator\ValidatorInterface;
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

    public function persist(CreateOrderDto $dto): Order
    {
        $order = $this->factory->createFromDto($dto);

        $this->entityManager->persist($order);
        $this->entityManager->flush();

        return $order;
    }
}
