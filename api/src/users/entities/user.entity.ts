import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  @Expose()
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column({ default: true })
  @Expose()
  public isAuthenticated?: boolean;

  @Column({ default: false, nullable: true })
  @Expose()
  public isPremiumUser?: boolean;

  @Column({ default: false, nullable: true })
  @Expose()
  public isStudent?: boolean;

  @Column({ default: true, nullable: true })
  @Expose()
  public isActive?: boolean;

  @Column({ nullable: true })
  @Expose()
  public age?: number;

  @Column({ nullable: true })
  @Expose()
  public bio?: string;

//   @OneToMany(() => Song, (song: Song) => song.author)
//   public songs?: Song[];

  @Column({ nullable: true })
  @Exclude()
  public currentHashedRefreshToken?: string;

//   @JoinColumn()
//   @OneToOne(() => PublicFile, {
//     eager: true,
//     nullable: true,
//   })
//   public avatar?: PublicFile;
}

export default User;