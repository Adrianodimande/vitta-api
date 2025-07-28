import { Dose, PrismaClient, Time_Drug } from "../generated/prisma";

export class TimeDrugRepository {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient({
            log: ["query", "info", "warn", "error"],
        })
            ;
    }

    protected async readTimeDrug() {
        const timeDrugData = await this.prisma.time_Drug.findMany();
        return timeDrugData
    }
    // protected async findTimeDrug(name: string) {
    //     const timeDrugData = await this.prisma.time_Drug.findFirst({
    //         where: {
    //             name: name
    //         }
    //     });
    //     return timeDrugData
    // }
    protected async findIdTimeDrug(id: number) {
        const timeDrugData = await this.prisma.time_Drug.findFirst({
            where: {
                id: id
            }
        });
        return timeDrugData
    }
    protected async createTimeDrug(timeDrugData: Time_Drug) {
        await this.prisma.time_Drug.create({
            data: {
                drug_id: timeDrugData.drug_id,
                time: new Date(timeDrugData.time),

            }
        }
        )
    }

    protected async updateTimeDrug(id: number, timeDrugData: Time_Drug) {
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


    protected async deleteTimeDrug(id: number) {

        await this.prisma.time_Drug.delete({
            where: {
                id: id
            }

        }
        )
    }



}