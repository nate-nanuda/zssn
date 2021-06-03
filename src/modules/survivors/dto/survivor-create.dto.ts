import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class SurvivorCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  gender: string;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  latitude: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  longitude: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  infected: boolean;
}
