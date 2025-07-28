import { Dose, PrismaClient } from "../generated/prisma";

export class DoseRepository {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient({
            log: ["query", "info", "warn", "error"],
        })
            ;
    }

    protected async readDose() {
        const doseData = await this.prisma.dose.findMany();
        return doseData
    }
    // protected async findDose(name: string) {
    //     const doseData = await this.prisma.dose.findFirst({
    //         where: {
    //             name: name
    //         }
    //     });
    //     return doseData
    // }
    protected async findIdDose(id: number) {
        const doseData = await this.prisma.dose.findFirst({
            where: {
                id: id
            }
        });
        return doseData
    }
    protected async createDose(doseData: Dose) {
        await this.prisma.dose.create({
            data: {
                drug_id: doseData.drug_id,
                date: new Date(doseData.date),
                time: new Date(doseData.time),
                status: doseData.status
            }
        }
        )
    }

    protected async updateDose(id: number, doseData: Dose) {
        await this.prisma.dose.update({
            where: {
                id: id
            },
            // ta dar erro na atualizacao  data
            data: {
                drug_id: doseData.drug_id,
                date: doseData.date ? new Date(doseData.date) : undefined,
                time: doseData.time ? new Date(doseData.time) : undefined,
                status: doseData.status

            }
        }
        )
    }


    protected async deleteDose(id: number) {

        await this.prisma.dose.delete({
            where: {
                id: id
            }

        }
        )
    }



}