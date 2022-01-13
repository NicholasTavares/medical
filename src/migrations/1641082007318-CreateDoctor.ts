import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDoctor1641082007318 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(120)',
          },
          {
            name: 'crm',
            type: 'int(7)',
          },
          {
            name: 'tel_fixo',
            type: 'int',
          },
          {
            name: 'phone',
            type: 'int',
          },
          {
            name: 'cep',
            type: 'int',
          },
          {
            name: 'specialty',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'null',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}
