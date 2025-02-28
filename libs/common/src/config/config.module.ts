import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
    providers: [],
    exports: [],
    imports: [NestConfigModule.forRoot()],
})
export class ConfigModule {}
