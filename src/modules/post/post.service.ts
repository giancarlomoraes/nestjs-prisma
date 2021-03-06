import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { PostDto } from './post.dto';

@Injectable()
export class PostService {

    constructor (private prisma: PrismaService) {

    }

    async create (data: PostDto){
        const post = await this.prisma.post.create({
            data
        });

        return post
    }

    async findOne(id: number){
        try {
            const post = await this.prisma.post.findFirst({
                where: {
                    id
                },
                include: {
                    author: true
                },
            })

            return post;
        } catch (error) {
            console.log(error)
        }

    }

}
