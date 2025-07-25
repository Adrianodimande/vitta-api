import { Clinic, PrismaClient } from "../generated/prisma";

export class ClinicRepository {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient({
            // log: ["query", "info", "warn", "error"],
        })
            ;
    }

    protected async readClinic() {
        const clinicData = await this.prisma.clinic.findMany();
        return clinicData
    }
    protected async findClinic(email: string) {
        const clinicData = await this.prisma.clinic.findFirst({
            where: {
                email: email
            }
        });
        return clinicData
    }
    protected async findIdClinic(id: number) {
        const clinicData = await this.prisma.clinic.findFirst({
            where: {
                id: id
            }
        });
        return clinicData
    }
    protected async createClinic(clientData: any) {


        await this.prisma.clinic.create({
            data: {
                name: clientData.name,
                address: clientData.address,
                phone: clientData.phone,
                email: clientData.email,
            }
        }
        )
    }

    protected async updateClinic(id: number, clientData: Clinic) {

        await this.prisma.clinic.update({
            where: {
                id: id
            },
            data: {
                name: clientData.name,
                address: clientData.address,
                phone: clientData.phone,
                email: clientData.email,
            }
        }
        )
    }


    protected async deleteClinic(id: number) {


        await this.prisma.clinic.delete({
            where: {
                id: id
            }

        }
        )
    }



}