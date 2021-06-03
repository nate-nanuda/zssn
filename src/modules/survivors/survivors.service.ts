import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Survivor } from './survivor.entity';
import { SurvivorCreateDto } from './dto/survivor-create.dto';

@Injectable()
export class SurvivorsService {
  constructor(
    @InjectRepository(Survivor)
    private readonly survivorRepository: Repository<Survivor>,
  ) {}

  async getAllUsers(): Promise<Survivor[]> {
    return await this.survivorRepository.find();
  }
  async addSurvivor(survivorCreateDto: SurvivorCreateDto): Promise<Survivor> {
    const survivor = await this.survivorRepository.save(survivorCreateDto);
    return survivor;
  }
}
