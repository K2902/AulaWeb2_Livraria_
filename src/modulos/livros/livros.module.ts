import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { LivrosRepository } from './livros.repository';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  exports: [],
})
export class LivrosModule {}
