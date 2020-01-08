DROP SCHEMA public CASCADE;

CREATE SCHEMA public;

--If you are using PostgreSQL 9.3 or greater, you may also need to restore the default grants.
GRANT ALL ON SCHEMA public TO postgres;

GRANT ALL ON SCHEMA public TO public;

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "firstname" varchar(255) NOT NULL,
  "lastname" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "flat" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255),
  "userId" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "flat_room" (
  "id" SERIAL PRIMARY KEY,
  "flatId" int NOT NULL,
  "roomId" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "room" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "userId" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "room_controller" (
  "id" SERIAL PRIMARY KEY,
  "roomId" int NOT NULL,
  "controllerId" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "controller" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "value" varchar(255) NOT NULL,
  "userId" int NOT NULL,
  "typeId" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "type" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "values" varchar(255) NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "condition" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "value" varchar(255) NOT NULL,
  "userId" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

ALTER TABLE "flat"
  ADD FOREIGN KEY ("userId") REFERENCES "user" ("id");

ALTER TABLE "room"
  ADD FOREIGN KEY ("userId") REFERENCES "user" ("id");

ALTER TABLE "controller"
  ADD FOREIGN KEY ("userId") REFERENCES "user" ("id");

ALTER TABLE "condition"
  ADD FOREIGN KEY ("userId") REFERENCES "user" ("id");

ALTER TABLE "controller"
  ADD FOREIGN KEY ("typeId") REFERENCES "type" ("id");

ALTER TABLE "flat_room"
  ADD FOREIGN KEY ("flatId") REFERENCES "flat" ("id");

ALTER TABLE "flat_room"
  ADD FOREIGN KEY ("roomId") REFERENCES "room" ("id");

ALTER TABLE "room_controller"
  ADD FOREIGN KEY ("roomId") REFERENCES "room" ("id");

ALTER TABLE "room_controller"
  ADD FOREIGN KEY ("controllerId") REFERENCES "controller" ("id");

