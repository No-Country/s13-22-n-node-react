import { Controller, FileTypeValidator, ParseFilePipe, Post, UploadedFile, UseFilters, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { ApiTags } from '@nestjs/swagger';
import { VERSION } from 'src/common/constants';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ERole } from 'src/common/enum';
import { AllExceptionFilter } from 'src/common/filter/exception.filter';

@ApiTags('Upload')
@Auth(ERole.CUSTOMER, ERole.ADMIN)
@UseFilters(AllExceptionFilter)
@Controller(`api/${VERSION}/upload`)
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile(new ParseFilePipe()) file: Express.Multer.File) {
    return await this.cloudinaryService.uploadFile(file);
  }
}
