import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Candidature } from '../candidatures/candidatures.entity';
import { Document } from '../documents/entities/document.entity';

export enum TypeContrat {
  CDI = 'CDI',
  CDD = 'CDD',
  Interim = 'Interim',
  Stage = 'Stage',
}

@Entity()
export class Annonce {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Candidature, (candidature) => candidature.annonce)
  candidatures: Candidature[];

  @OneToOne(() => Document, { eager: true })
  @JoinColumn()
  image: Document;

  @Column()
  titre: string;

  @Column()
  entreprise: string;

  @Column()
  ville: string;

  @Column({
    type: 'enum',
    enum: TypeContrat,
  })
  type_contrat: TypeContrat;

  @Column({ type: 'text' })
  descriptif: string;

  @Column({ default: 0 })
  nb_vues: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
