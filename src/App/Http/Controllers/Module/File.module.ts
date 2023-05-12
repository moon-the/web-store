import { Module } from '@nestjs/common';

import { FileController } from '../File.controller';

@Module({
  controllers: [FileController],
  //providers: [SearchService]
})
export class FileModule {}
