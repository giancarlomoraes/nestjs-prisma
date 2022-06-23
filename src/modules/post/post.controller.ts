import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PostService } from './post.service';
import { PostDto } from './post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() data: PostDto) {
    return this.postService.create(data)
  }

  @Get("/:id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.postService.findOne(id)
  }
}
