import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
    providers: [ConfigService],
    exports: [ConfigService],
    imports: [NestConfigModule.forRoot()],
})
export class ConfigModule {}
