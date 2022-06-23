-- CreateTable
CREATE TABLE "tb_post" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "tb_post_pkey" PRIMARY KEY ("id")
);
