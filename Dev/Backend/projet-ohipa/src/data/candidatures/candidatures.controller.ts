import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Candidature } from './candidatures.entity';
import { CandidaturesService } from './candidatures.service';
import { CreateCandidatureDto } from './dto/create-candidature.dto';

@Controller('candidatures')
export class CandidaturesController {
  constructor(private readonly candidaturesService: CandidaturesService) {}

  @Get()
  async getAll(): Promise<Candidature[]> {
    return this.candidaturesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Candidature> {
    return this.candidaturesService.findOne(id);
  }

  @Get()
  async getByAnnonce(
    @Query('id_annonce', ParseIntPipe) id_annonce: number,
  ): Promise<Candidature[]> {
    return this.candidaturesService.findByAnnonce(id_annonce);
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cv', maxCount: 1 },
      { name: 'lm', maxCount: 1 },
    ]),
  )
  async create(
    @UploadedFiles()
    files: { cv?: Express.Multer.File; lm?: Express.Multer.File },
    @Body() body: CreateCandidatureDto,
    @Query() q: any,
  ) {
    return this.candidaturesService.create(
      files.cv,
      files.lm,
      body,
      q.id_annonce,
    );
  }
}
