import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { CriarAutorDto } from './autores.dto';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [],
})
export class AutoresModule {}
