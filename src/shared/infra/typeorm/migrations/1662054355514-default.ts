import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662054355514 implements MigrationInterface {
    name = 'default1662054355514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "occupation" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_07cfcefef555693d96dce8805c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "nick_name" character varying NOT NULL, "birthday" character varying NOT NULL, "photo" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "disasters" ("id" character varying NOT NULL, "description" character varying NOT NULL, "log_image" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_1c8d79629e142ad7e562e81bc4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_has_disasters" ("users_id" character varying NOT NULL, "disasters_id" character varying NOT NULL, CONSTRAINT "PK_5e65e538ac02ba3ba5b22f9b3ef" PRIMARY KEY ("users_id", "disasters_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e2be5e069a094a67b0b0dc1737" ON "users_has_disasters" ("users_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ec3ab9ca4f22ff97059c5aa42b" ON "users_has_disasters" ("disasters_id") `);
        await queryRunner.query(`CREATE TABLE "users_has_occupation" ("users_id" character varying NOT NULL, "occupation_id" character varying NOT NULL, CONSTRAINT "PK_b0dcadfadbdc2fd73e034393ed6" PRIMARY KEY ("users_id", "occupation_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c61f72645b6e5f9bac1a8fe3ba" ON "users_has_occupation" ("users_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ded33b7765064ecdbbe32a472c" ON "users_has_occupation" ("occupation_id") `);
        await queryRunner.query(`ALTER TABLE "users_has_disasters" ADD CONSTRAINT "FK_e2be5e069a094a67b0b0dc17371" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_has_disasters" ADD CONSTRAINT "FK_ec3ab9ca4f22ff97059c5aa42be" FOREIGN KEY ("disasters_id") REFERENCES "disasters"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_has_occupation" ADD CONSTRAINT "FK_c61f72645b6e5f9bac1a8fe3ba8" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_has_occupation" ADD CONSTRAINT "FK_ded33b7765064ecdbbe32a472c9" FOREIGN KEY ("occupation_id") REFERENCES "occupation"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_has_occupation" DROP CONSTRAINT "FK_ded33b7765064ecdbbe32a472c9"`);
        await queryRunner.query(`ALTER TABLE "users_has_occupation" DROP CONSTRAINT "FK_c61f72645b6e5f9bac1a8fe3ba8"`);
        await queryRunner.query(`ALTER TABLE "users_has_disasters" DROP CONSTRAINT "FK_ec3ab9ca4f22ff97059c5aa42be"`);
        await queryRunner.query(`ALTER TABLE "users_has_disasters" DROP CONSTRAINT "FK_e2be5e069a094a67b0b0dc17371"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ded33b7765064ecdbbe32a472c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c61f72645b6e5f9bac1a8fe3ba"`);
        await queryRunner.query(`DROP TABLE "users_has_occupation"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ec3ab9ca4f22ff97059c5aa42b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e2be5e069a094a67b0b0dc1737"`);
        await queryRunner.query(`DROP TABLE "users_has_disasters"`);
        await queryRunner.query(`DROP TABLE "disasters"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "occupation"`);
    }

}
