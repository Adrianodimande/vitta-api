import { Drug, PrismaClient } from "../generated/prisma";

export class DrugRepository {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient({
            // log: ["query", "info", "warn", "error"],
        })
            ;
    }

    protected async readDrug() {
        const drugData = await this.prisma.drug.findMany();
        return drugData
    }
    protected async findDrug(name: string) {
        const drugData = await this.prisma.drug.findFirst({
            where: {
                name: name
            }
        });
        return drugData
    }
    protected async findIdDrug(id: number) {
        const drugData = await this.prisma.drug.findFirst({
            where: {
                id: id
            }
        });
        return drugData
    }
    protected async createDrug(drugData: Drug) {
        console.log(drugData);

        await this.prisma.drug.create({
            data: {
                user_id: drugData.user_id,
                name: drugData.name,
                date_start: new Date(drugData.date_start),
                date_end: new Date(drugData.date_end),
                observation: drugData.observation
            }
        }
        )
    }

    protected async updateDrug(id: number, drugData: Drug) {
        await this.prisma.drug.update({
            where: {
                id: id
            },
            // ta dar erro na atualizacao  data
            data: {
                user_id: drugData.user_id,
                name: drugData.name,
                // date_start: drugData.date_start ? new Date(drugData.date_start) : undefined,
                // date_end: drugData.date_end ? new Date(drugData.date_end) : undefined,

                observation: drugData.observation

            }
        }
        )
    }


    protected async deleteDrug(id: number) {

        await this.prisma.drug.delete({
            where: {
                id: id
            }

        }
        )
    }



}