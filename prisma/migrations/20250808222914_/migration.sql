-- CreateEnum
CREATE TYPE "statusUser" AS ENUM ('Active', 'Inactive', 'Blocked', 'Deleted');

-- CreateEnum
CREATE TYPE "statusTimeDrug" AS ENUM ('Active', 'Inactive');

-- AlterTable
ALTER TABLE "Time_Drug" ADD COLUMN     "status" "statusTimeDrug" NOT NULL DEFAULT 'Active';
