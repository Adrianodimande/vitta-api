import { PrismaClient } from "../generated/prisma";

export class ClinicRepository {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
            ;
    }
    protected async findClinic(email: string) {
        const useData = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        return useData
    }
    protected async registerClinic(clientData: any) {


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
}