import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602684284969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //realizar alteraçoes - criar, deletar etc
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //sempre ser numero positivo
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2 //numeros antes e depois da virgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2 //numeros antes e depois da virgula
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfazer o que foi feito no up se criar, deletar - pq é comum voltar atrás
        await queryRunner.dropTable('orphanages')
    }

}
