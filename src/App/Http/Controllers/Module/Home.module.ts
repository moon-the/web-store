import { Module } from '@nestjs/common';
import { HomeController } from '../Home.controller';


@Module({
  controllers: [HomeController],
  //providers: [SearchService]
})
export class HomeModule {}
