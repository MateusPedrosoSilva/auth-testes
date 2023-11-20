import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ unique: true })
  registrationNumber: number;

  @Column()
  userName: string;

  @Column()
  password: string;
}
