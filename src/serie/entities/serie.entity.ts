import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column()
  sinopsis: string;

  @Column()
  urlPortada: string;
}
