import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './config/file-config';
// import { MessagePattern } from '@nestjs/microservices';
@Controller('')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  getHello(): string {
    return this.fileService.getHello();
  }
  @Post()
  // @MessagePattern({ cmd: 'ecommerce-api-gateway' })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './apps/files/public/uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadFile(@Req() req, @UploadedFile() file: Express.Multer.File) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    if (!file) {
      throw new BadRequestException('invalid file');
    }
    return {
      message: 'file has been uploaded',
      filename: file.filename,
      filedestination: file.destination,
      filefieldname: file.fieldname,
      filetype: file.mimetype,
      fileoriginalname: file.originalname,
    };
  }
}
