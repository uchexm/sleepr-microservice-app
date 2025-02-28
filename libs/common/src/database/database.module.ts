import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    providers: [],
    exports: [],
    imports: [MongooseModule.forRootAsync({
        imports: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            uri: configService.get('DATABASE_URI'),
        }),
        inject: [ConfigService],
    })],
})
export class DatabaseModule {}
