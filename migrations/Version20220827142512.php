<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20220827142512 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Initial';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE SEQUENCE catalog_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE goods_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE measure_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE catalog (id INT NOT NULL, name VARCHAR(100) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE goods (id BIGINT NOT NULL, id_catalog INT NOT NULL, id_measure INT NOT NULL, hidden SMALLINT NOT NULL, name VARCHAR(255) NOT NULL, quantity NUMERIC(10, 3) NOT NULL, regprice NUMERIC(10, 2) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_563B92DC5B19B37 ON goods (id_catalog)');
        $this->addSql('CREATE INDEX IDX_563B92D5E9AB055 ON goods (id_measure)');
        $this->addSql('CREATE TABLE measure (id INT NOT NULL, name VARCHAR(5) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DC5B19B37 FOREIGN KEY (id_catalog) REFERENCES catalog (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92D5E9AB055 FOREIGN KEY (id_measure) REFERENCES measure (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP SEQUENCE catalog_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE goods_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE measure_id_seq CASCADE');
        $this->addSql('ALTER TABLE goods DROP CONSTRAINT FK_563B92DC5B19B37');
        $this->addSql('ALTER TABLE goods DROP CONSTRAINT FK_563B92D5E9AB055');
        $this->addSql('DROP TABLE catalog');
        $this->addSql('DROP TABLE goods');
        $this->addSql('DROP TABLE measure');
    }
}
