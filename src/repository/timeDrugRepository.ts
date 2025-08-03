import { Dose, PrismaClient, Time_Drug } from "../generated/prisma";
import { ITimeDrugRepository } from "./interfaces/iTimeDrugRepository";

export class TimeDrugRepository implements ITimeDrugRepository {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient({
            // log: ["query", "info", "warn", "error"],
        })
            ;
    }

    public async readTimeDrug() {
        const timeDrugData = await this.prisma.time_Drug.findMany();
        return timeDrugData
    }

    public async findIdTimeDrug(id: number) {
        const timeDrugData = await this.prisma.time_Drug.findFirst({
            where: {
                id: id
            }
        });
        return timeDrugData
    }
    public async createTimeDrug(timeDrugData: Array<Time_Drug>, id: number) {
        //  timeDrugData.map((element) => {
        //     element.drug_id = id;
        // });
        console.log(timeDrugData);
        await this.prisma.time_Drug.createMany({
            data: timeDrugData
        },

        );

    }

    public async updateTimeDrug(id: number, timeDrugData: Time_Drug) {
        await this.prisma.time_Drug.update({
            where: {
                id: id
            },
            // ta dar erro na atualizacao  data
            data: {
                drug_id: timeDrugData.drug_id,
                time: timeDrugData.time ? new Date(timeDrugData.time) : undefined,

            }
        }
        )
    }


    public async deleteTimeDrug(id: number) {

        await this.prisma.time_Drug.delete({
            where: {
                id: id
            }

        }
        )
    }



}