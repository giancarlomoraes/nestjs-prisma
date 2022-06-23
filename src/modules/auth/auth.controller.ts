import { Body, Controller, Post } from '@nestjs/common';
import { PostDto } from 'src/modules/post/post.dto';
import { UserDto } from 'src/modules/user/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/local/signup')
  async signupLocal(@Body() data: UserDto) {
    this.authService.signupLocal(data)
  }

  @Post('/local/signin')
  async signinLocal() {
    this.authService.signinLocal()
  }

  @Post('/logout')
  async logout() {
    this.authService.logout()
  }

  @Post('/refresh')
  async refreshTokens() {
    this.authService.refreshTokens()
  }

}
