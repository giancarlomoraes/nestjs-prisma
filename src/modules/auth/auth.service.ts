import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UserDto } from 'src/modules/user/user.dto';

@Injectable()
export class AuthService {

    constructor (private prisma: PrismaService) {

    }

    async signupLocal(data: UserDto){
        const user = await this.prisma.user.create({
            data,
        });

        return user;
    }

    signinLocal(){

    }

    logout(){

    }

    refreshTokens(){

    }

}
