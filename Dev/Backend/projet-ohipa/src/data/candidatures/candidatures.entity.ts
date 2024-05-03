import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Annonce } from '../annonces/annonces.entity';
import { Document } from '../documents/entities/document.entity';
@Entity()
export class Candidature {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Annonce, (annonce) => annonce.candidatures)
  annonce: Annonce;

  @OneToMany(() => Document, (document) => document.candidature, {
    eager: true,
  })
  documents: Document[];

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
