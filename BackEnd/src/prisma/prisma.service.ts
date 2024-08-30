//src/prisma/prisma.service.ts',

import { PrismaClient } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaService {
    public prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    get user() {
        return this.prismaClient.user;
    }

    get childProfile() {
        return this.prismaClient.childProfile;
    }

}