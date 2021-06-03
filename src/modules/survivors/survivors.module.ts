import { SurvivorsController } from './survivors.controller';
import { SurvivorsService } from './survivors.service';
import { Module } from '@nestjs/common';
import { Survivor } from './survivor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Survivor])],
  controllers: [SurvivorsController],
  providers: [SurvivorsService],
})
export class SurvivorsModule {}
