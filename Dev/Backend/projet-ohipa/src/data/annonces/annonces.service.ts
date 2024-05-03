import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentsService } from '../documents/documents.service';
import { Annonce, TypeContrat } from './annonces.entity';
import { CreateAnnonceDto } from './dto/create-annonce.dto';

@Injectable()
export class AnnoncesService {
  constructor(
    @InjectRepository(Annonce)
    private readonly annonceRepository: Repository<Annonce>,
    private readonly documentsService: DocumentsService,
  ) {}

  async create(
    file: Express.Multer.File,
    annonce: CreateAnnonceDto,
  ): Promise<Annonce> {
    if (typeof file == 'undefined') return this.annonceRepository.save(annonce);
    else {
      const newAnnonce = new Annonce();
      const img = await this.documentsService.createDoc(file, 'Image');
      newAnnonce.titre = annonce.titre;
      newAnnonce.entreprise = annonce.entreprise;
      newAnnonce.ville = annonce.ville;
      newAnnonce.type_contrat = annonce.type_contrat;
      newAnnonce.descriptif = annonce.descriptif;
      newAnnonce.image = img;
      return this.annonceRepository.save(newAnnonce);
    }
  }

  async findAll(): Promise<Annonce[]> {
    return this.annonceRepository.find();
  }

  async findOne(id: number): Promise<Annonce> {
    return this.annonceRepository.findOneBy({ id: id });
  }

  async findByEntreprise(entreprise: string): Promise<Annonce[]> {
    return this.annonceRepository.find({
      where: { entreprise: entreprise },
    });
  }

  async findByContrat(contrat: TypeContrat): Promise<Annonce[]> {
    return this.annonceRepository.find({
      where: { type_contrat: contrat },
    });
  }

  async update(id: number, annonce: Annonce): Promise<Annonce> {
    await this.annonceRepository.update(id, annonce);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.annonceRepository.delete(id);
  }
}
