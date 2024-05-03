import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsModule } from '../documents/documents.module';
import { AnnoncesController } from './annonces.controller';
import { Annonce } from './annonces.entity';
import { AnnoncesService } from './annonces.service';

@Module({
  imports: [TypeOrmModule.forFeature([Annonce]), DocumentsModule],
  controllers: [AnnoncesController],
  providers: [AnnoncesService],
  exports: [AnnoncesService],
})
export class AnnoncesModule {}
