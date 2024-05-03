import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Annonce, TypeContrat } from './annonces.entity';
import { AnnoncesService } from './annonces.service';
import { CreateAnnonceDto } from './dto/create-annonce.dto';

@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annoncesService: AnnoncesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile()
    file: Express.Multer.File,
    @Body() body: CreateAnnonceDto,
  ): Promise<Annonce> {
    return this.annoncesService.create(file, body);
  }

  @Get()
  async getAll(
    @Query('entreprise') entreprise: string,
    @Query('contrat') contrat: TypeContrat,
  ): Promise<Annonce[]> {
    if (typeof entreprise != 'undefined')
      return this.annoncesService.findByEntreprise(entreprise);
    if (typeof contrat != 'undefined')
      return this.annoncesService.findByContrat(contrat);
    return this.annoncesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Annonce> {
    return this.annoncesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() annonce: Annonce,
  ): Promise<Annonce> {
    return this.annoncesService.update(id, annonce);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.annoncesService.delete(id);
  }
}
