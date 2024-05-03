import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Candidature } from '../../candidatures/candidatures.entity';

export enum TypeDoc {
  CV = 'CV',
  LM = 'LM',
  Image = 'Image',
}

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Candidature, (candidature) => candidature.documents)
  candidature: Candidature;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: TypeDoc })
  type_doc: TypeDoc;

  @Column()
  type_data: string;

  @Column({ type: 'mediumblob' })
  data: Buffer;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
