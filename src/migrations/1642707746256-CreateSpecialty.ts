import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateSpecialty1642707746256 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specialty',
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
            name: 'specialty',
            type: 'varchar(255)',
          }),
          new TableColumn({
            name: 'created_at',
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
    await queryRunner.dropTable('specialty');
  }
}
