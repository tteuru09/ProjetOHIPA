import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnnoncesService } from '../annonces/annonces.service';
import { DocumentsService } from '../documents/documents.service';
import { Candidature } from './candidatures.entity';
import { CreateCandidatureDto } from './dto/create-candidature.dto';

@Injectable()
export class CandidaturesService {
  constructor(
    @InjectRepository(Candidature)
    private candidatureRepository: Repository<Candidature>,
    private documentsService: DocumentsService,
    private annoncesService: AnnoncesService,
  ) {}

  async create(
    cv: Express.Multer.File,
    lm: Express.Multer.File,
    candidature: CreateCandidatureDto,
    id_annonce: number,
  ): Promise<Candidature> {
    const newCandidature = new Candidature();
    newCandidature.nom = candidature.nom;
    newCandidature.prenom = candidature.prenom;
    newCandidature.email = candidature.email;
    newCandidature.annonce = await this.annoncesService.findOne(id_annonce);
    if (typeof cv == 'undefined' && typeof lm == 'undefined')
      return this.candidatureRepository.save(newCandidature);
    else {
      const docs = [];
      if (typeof cv != 'undefined') {
        docs.push(await this.documentsService.createDoc(cv[0], 'CV'));
      }
      if (typeof lm != 'undefined') {
        docs.push(await this.documentsService.createDoc(lm[0], 'LM'));
      }
      newCandidature.documents = docs;
      return this.candidatureRepository.save(newCandidature);
    }
  }

  async findAll(): Promise<Candidature[]> {
    return this.candidatureRepository.find();
  }

  async findOne(id_candidature: number): Promise<Candidature> {
    return this.candidatureRepository.findOne({
      where: { id: id_candidature },
    });
  }

  async findByAnnonce(id_annonce: number): Promise<Candidature[]> {
    const annonce = await this.annoncesService.findOne(id_annonce);
    return this.candidatureRepository.find({
      where: { annonce: annonce },
    });
  }
}
