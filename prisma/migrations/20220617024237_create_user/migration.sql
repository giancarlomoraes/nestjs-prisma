/*
  Warnings:

  - Added the required column `authorId` to the `tb_post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_post" ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "tb_user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tb_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_email_key" ON "tb_user"("email");

-- AddForeignKey
ALTER TABLE "tb_post" ADD CONSTRAINT "tb_post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
