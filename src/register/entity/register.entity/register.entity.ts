import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Users')
export class RegisterEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'text' })
  bio: string;

  @Column({ type: 'text', nullable: true })
  emoji: string;

  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Column({ type: 'text', nullable: true })
  DOB: string;

  @Column({ type: 'text', nullable: true })
  gender: string;

  @Column({ type: 'float', nullable: true })
  height: number;

  @Column({ type: 'float', nullable: true })
  drinkHabit: number;

  @Column({ type: 'float', nullable: true })
  smokeHabit: number;

  @Column({ type: 'float', nullable: true })
  exerciseHabit: number;
}
