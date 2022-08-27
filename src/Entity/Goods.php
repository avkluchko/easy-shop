<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\GoodsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    collectionOperations: [
        'get'
    ],
    itemOperations: ['get'],
    normalizationContext: ['groups' => 'goods:read'],
)]
#[ApiFilter(SearchFilter::class,properties: [
    'id' => 'exact',
    'catalog.id' => 'exact'
])]
#[ORM\Entity(repositoryClass: GoodsRepository::class)]
class Goods
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    #[Groups(['goods:read'])]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: 'id_catalog', nullable: false)]
    #[Groups(['goods:read'])]
    private ?Catalog $catalog = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: 'id_measure', nullable: false)]
    #[Groups(['goods:read'])]
    private ?Measure $measure = null;

    #[ORM\Column(type: 'smallint')]
    private int $hidden = 0;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['goods:read'])]
    private string $name;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 3)]
    #[Groups(['goods:read'])]
    private float $quantity;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Groups(['goods:read'])]
    private float $regprice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCatalog(): ?Catalog
    {
        return $this->catalog;
    }

    public function setCatalog(?Catalog $catalog): self
    {
        $this->catalog = $catalog;

        return $this;
    }

    public function getMeasure(): ?Measure
    {
        return $this->measure;
    }

    public function setMeasure(?Measure $measure): self
    {
        $this->measure = $measure;

        return $this;
    }

    public function isHidden(): bool
    {
        return $this->hidden === 1;
    }

    public function setHidden(bool $hidden): self
    {
        $this->hidden = $hidden ? 1 : 0;

        return $this;
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

    public function getRegprice(): float
    {
        return $this->regprice;
    }

    public function setRegprice(float $regprice): self
    {
        $this->regprice = $regprice;

        return $this;
    }
}
