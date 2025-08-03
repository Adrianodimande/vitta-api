import { Drug } from "../../generated/prisma";

export interface IDrugRepository {
  readDrug(): Promise<any>;
  readDrugByUserId(id: number): Promise<any>;
  findDrug(name: string): Promise<any>;
  findIdDrug(id: number): Promise<any>;
  createDrug(drugData: Drug): Promise<any>;
  updateDrug(id: number, drugData: Drug): Promise<void>;
  deleteDrug(id: number): Promise<void>;
}
