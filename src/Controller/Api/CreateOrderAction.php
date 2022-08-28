<?php

namespace App\Controller\Api;

use ApiPlatform\Core\Validator\ValidatorInterface;
use App\Component\Order\Dto\CreateOrderDto;
use App\Component\Order\OrderPersister;
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
        private readonly OrderPersister $persister
    ) {
    }

    public function __invoke(Request $request): Order
    {
        $dto = $this->getDtoFromRequest($request);
        $this->validator->validate($dto);

        return $this->persister->persist($dto);
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
