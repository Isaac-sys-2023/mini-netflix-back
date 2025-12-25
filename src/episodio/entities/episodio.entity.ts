import { Serie } from './../../serie/entities/serie.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
// @Index es una clave única por serie, hace que no se repita el número de capítulo dentro de una misma serie sin qu e esto afecte a la creacion de un capitulo con el mismo numero en otra serie diferente
@Index(['serie', 'numeroCapitulo'], { unique: true })
export class Episodio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  duracion: number;

  @Column()
  numeroCapitulo: number;

  @ManyToOne(() => Serie, (serie) => serie.episodios, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'serie_id' })
  serie: Serie;
}
