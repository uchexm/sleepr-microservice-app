import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
    providers: [ConfigService],
    exports: [ConfigService],
    imports: [NestConfigModule.forRoot({
        validationSchema: Joi.object({
            MONGODB_URI: Joi.string().required(),
        })
    })],
})
export class ConfigModule {}
