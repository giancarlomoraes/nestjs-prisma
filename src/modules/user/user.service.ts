import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {

    constructor (private prisma: PrismaService) {

    }

    async create (data: Prisma.UserCreateInput){
        const user = await this.prisma.user.create({
            data
        });

        return user;
    }


}
