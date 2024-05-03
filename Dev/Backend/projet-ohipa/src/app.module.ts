import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnoncesModule } from './data/annonces/annonces.module';
import { CandidaturesModule } from './data/candidatures/candidatures.module';
import { DocumentsModule } from './data/documents/documents.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ohipa',
      entities: ['./data' + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AnnoncesModule,
    CandidaturesModule,
    DocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
