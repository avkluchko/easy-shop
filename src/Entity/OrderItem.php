<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OrderItemRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    itemOperations: ['get'],
    normalizationContext: ['groups' => 'order_item:read'],
)]
#[ORM\Entity(repositoryClass: OrderItemRepository::class)]
class OrderItem
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['orders:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['orders:read', 'order_item:read'])]
    private string $name;

    #[ORM\Column]
    #[Groups(['orders:read', 'order_item:read'])]
    private float $quantity;

    #[ORM\Column]
    #[Groups(['orders:read', 'order_item:read'])]
    private float $price;

    #[ORM\ManyToOne(inversedBy: 'items')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['order_item:read'])]
    private ?Order $parent = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['orders:read', 'order_item:read'])]
    private ?Goods $goods = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getQuantity(): float
    {
        return $this->quantity;
    }

    public function setQuantity(float $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getParent(): ?Order
    {
        return $this->parent;
    }

    public function setParent(?Order $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    public function getGoods(): ?Goods
    {
        return $this->goods;
    }

    public function setGoods(?Goods $goods): self
    {
        $this->goods = $goods;

        return $this;
    }
}
