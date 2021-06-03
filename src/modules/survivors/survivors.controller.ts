import { Body, Controller, Post } from '@nestjs/common';
import { SurvivorCreateDto } from './dto/survivor-create.dto';
import { Survivor } from './survivor.entity';
import { SurvivorsService } from './survivors.service';

@Controller()
export class SurvivorsController {
  constructor(private readonly survivorsService: SurvivorsService) {}

  /**
   *
   * @param survivorCreateDto
   * @returns
   */
  @Post('/survivor')
  async createSurvivor(
    @Body() survivorCreateDto: SurvivorCreateDto,
  ): Promise<Survivor> {
    return await this.survivorsService.addSurvivor(survivorCreateDto);
  }
}
