import { Drug, Time_Drug } from "../../generated/prisma";

export interface ITimeDrugRepository {
  readTimeDrugPutUserId(userId:number): Promise<any>;
  findIdTimeDrug(id: number): Promise<any>;
  createTimeDrug(TimeDrugData: Array<Time_Drug>,id?:number):Promise<any>;
  updateTimeDrug(id: number, TimeDrugData: Time_Drug): Promise<void>;
  deleteTimeDrug(id: number): Promise<void>;
}
