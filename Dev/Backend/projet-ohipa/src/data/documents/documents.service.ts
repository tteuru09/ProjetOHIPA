import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document, TypeDoc } from './entities/document.entity';
@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private readonly documentsRepository: Repository<Document>,
  ) {}

  async createDoc(
    file: Express.Multer.File,
    type_doc: string,
    id_candidature: any = null,
  ): Promise<Document> {
    const document = new Document();
    document.name = file.originalname;
    document.type_data = file.mimetype;
    document.data = file.buffer;
    document.type_doc = TypeDoc[type_doc];
    document.candidature = id_candidature;
    return this.documentsRepository.save(document);
  }

  async findOne(id: number): Promise<Document> {
    return this.documentsRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
  }
}
