-- CreateTable
CREATE TABLE "Medichine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "production_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expired_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "company" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Medichine_pkey" PRIMARY KEY ("id")
);
