/*
  Warnings:

  - Changed the type of `transaction_type` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT', 'TRANSFER', 'REFUND');

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "transaction_type",
ADD COLUMN     "transaction_type" "TransactionType" NOT NULL;
