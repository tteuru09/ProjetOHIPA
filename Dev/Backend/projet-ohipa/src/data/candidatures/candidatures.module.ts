import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnoncesModule } from '../annonces/annonces.module';
import { DocumentsModule } from '../documents/documents.module';
import { CandidaturesController } from './candidatures.controller';
import { Candidature } from './candidatures.entity';
import { CandidaturesService } from './candidatures.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Candidature]),
    DocumentsModule,
    AnnoncesModule,
  ],
  controllers: [CandidaturesController],
  providers: [CandidaturesService],
  exports: [CandidaturesService],
})
export class CandidaturesModule {}
