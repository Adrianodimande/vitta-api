import { Console } from "console";
import { PrismaClient } from "../generated/prisma";


export class RepositorySignInAndSignUp {
    protected prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
            ;
    }


    protected async readUser() {
        const userData = await this.prisma.user.findMany();
        return userData;
    }

    protected async findUser(email: string) {
        const useData = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
        return useData
    }


    protected async registerUser(userData: any) {


        await this.prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: userData.role,
            }

        }


        )
    }
}