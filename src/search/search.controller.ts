import { Controller, Get, Post, Body, Patch, Param, Res } from '@nestjs/common';
import { SearchService } from './search.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { Response } from 'express';
import { Query } from '@nestjs/common/decorators';
// import { BaseRepository } from 'src/Repositories/BaseRepository';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  create(@Body() createSearchDto: CreateSearchDto) {
    return this.searchService.create(createSearchDto);
  }

  @Get('')
  findOne(@Query('k') key: string, @Res() res: Response) {
    if(key.length < 1) {
      res.status(HttpStatus.NOT_FOUND);
      res.json({"error": "không có"})
      return res.send;
    }
    // let b = new BaseRepository();
    // return b.save(a);
    return res.json(key);
    return this.searchService.findOne(+key);
  }
}
