import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { DatabaseModule } from 'src/db/database/database.module';
import { UsuariosRepository } from './usuarios.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosRepository],
  exports: [UsuariosService],
})
export class UsuariosModule {}