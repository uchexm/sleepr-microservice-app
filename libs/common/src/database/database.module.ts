// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
   
//     imports: [MongooseModule.forRootAsync({
//        imports: [ConfigModule],
//         useFactory: (configService: ConfigService) => ({
//             uri: configService.get('MONGODB_URI'),
//         }),
//         inject: [ConfigService],
//     })],
// })
// export class DatabaseModule {}


import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                const uri = configService.get<string>('MONGODB_URI');
                Logger.log(`Connecting to MongoDB at ${uri}`);
                return { uri };
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}