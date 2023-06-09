import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsServe: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsServe.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsServe.findAll();
  }
}
