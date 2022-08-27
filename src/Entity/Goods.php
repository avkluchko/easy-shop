<?php

namespace App\Entity;

use App\Repository\GoodsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GoodsRepository::class)]
class Goods
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: 'id_catalog', nullable: false)]
    private ?Catalog $catalog = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: 'id_measure', nullable: false)]
    private ?Measure $measure = null;

    #[ORM\Column(type: 'smallint')]
    private int $hidden = 0;

    #[ORM\Column(type: 'string', length: 255)]
    private string $name;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 3)]
    private float $quantity;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
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
