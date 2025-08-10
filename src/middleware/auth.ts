import jwt from "jsonwebtoken";
import { user } from "../generated/prisma";
export class Auth {

    static async generateToken(data: user) {

        const token = jwt.sign({
            name: data.name, email: data.email
        }, 'secretomeu', { algorithm: 'HS256' },);
        return token;
    }

}