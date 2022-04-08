-- CreateTable
CREATE TABLE "startup" (
    "uuid" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "website" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,
    "positions" JSON[],
    "img" VARCHAR NOT NULL,

    CONSTRAINT "startup_pkey" PRIMARY KEY ("uuid")
);
