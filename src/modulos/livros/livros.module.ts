import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { LivrosRepository } from './livros.repository';
import { AutoresModule } from '../autores/autores.module';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  imports: [AutoresModule],
  exports: [],
})
export class LivrosModule {}
