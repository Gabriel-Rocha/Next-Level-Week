import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602896174078 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar as alterações no BD
        // CRIAR TABELA, CRIAR um novo campo
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'vvarchar',

                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                }
            ],
        }))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
        //DESFAZER O QUE FOI FEITO NO METODO UP
        await queryRunner.dropTable('orphanages')
    }

}
