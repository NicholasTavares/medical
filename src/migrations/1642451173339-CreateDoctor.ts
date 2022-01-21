import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateDoctor1642451173339 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'INT',
            isNullable: false,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'name',
            type: 'varchar(120)',
          }),
          new TableColumn({
            name: 'crm',
            type: 'varchar(7)',
          }),
          new TableColumn({
            name: 'tel_fixo',
            type: 'varchar(10)',
          }),
          new TableColumn({
            name: 'phone',
            type: 'varchar(11)',
          }),
          new TableColumn({
            name: 'cep',
            type: 'varchar(8)',
          }),
          new TableColumn({
            name: 'specialties',
            type: 'varchar',
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          }),
          new TableColumn({
            name: 'deleted_at',
            isNullable: true,
            type: 'timestamp',
            default: 'NULL',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}
