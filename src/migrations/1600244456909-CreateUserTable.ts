import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateUserTable1600244456909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
        `create table users(
            id serial primary key,
            email varchar(255) unique not null,
            password varchar(255) unique not null,
            description varchar(255) default null,
            gender char(1),
            profile_image_url text default null,
            push_enabled boolean default null,
            banner_image_url text default null,
            created_at timestamp not null default (current_timestamp),
            updated_at timestamp not null default (current_timestamp)
        )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table users`)
    }
}
