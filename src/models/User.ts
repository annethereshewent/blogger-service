import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { $log } from '@tsed/common'

enum Gender {
    Male = 'm',
    Female = 'f',
    Other = 'x'
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    description: string

    @Column()
    gender: Gender

    @Column({ name: 'profile_image_url' })
    profileImageUrl: string

    @Column({ name: 'push_enabled' })
    pushEnabled: boolean

    @Column({ name: 'banner_image_url' })
    bannerImageUrl: string

    @Column({ name: 'created_at' })
    createdAt: Date

    @Column({ name: 'updated_at' })
    updatedAt: Date

    async verifyPassword(password: string) : Promise<boolean> {
        let result = false
        try {
            result = await bcrypt.compare(password, this.password)
        } catch (err) {
            result = false
            $log.error(err)
        }

        return false
    }
}
