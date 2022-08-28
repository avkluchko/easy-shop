<?php

namespace App\Controller\Api;

use ApiPlatform\Core\Validator\ValidatorInterface;
use App\Component\Order\Dto\CreateOrderDto;
use App\Component\Order\OrderPersister;
use App\Component\Order\OrderProcessor;
use App\Entity\Order;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Serializer\SerializerInterface;

#[AsController]
class CreateOrderAction extends AbstractController
{
    public function __construct(
        private readonly SerializerInterface $serializer,
        private readonly ValidatorInterface $validator,
        private readonly OrderPersister $persister,
        private readonly OrderProcessor $processor
    ) {
    }

    public function __invoke(Request $request): Order
    {
        $dto = $this->getDtoFromRequest($request);
        $this->validator->validate($dto);

        $order = $this->persister->persist($dto, false);
        $this->processor->process($order);

        return $order;
    }

    private function getDtoFromRequest(Request $request): CreateOrderDto
    {
        return $this->serializer->deserialize(
            $request->getContent(),
            CreateOrderDto::class,
            'jsonld'
        );
    }
}
