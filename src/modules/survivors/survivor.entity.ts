import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Survivor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  infected: boolean;
}
