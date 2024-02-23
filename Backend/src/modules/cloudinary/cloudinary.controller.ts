import { Controller, FileTypeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseFilters, UseInterceptors} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { ApiTags } from '@nestjs/swagger';
import { VERSION } from 'src/common/constants';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ERole } from 'src/common/enum';
import { AllExceptionFilter } from 'src/common/filter/exception.filter';
import { FilesValidationPipe } from 'src/common/pipes/files.pipe';

@ApiTags('Upload')
@Auth(ERole.CUSTOMER, ERole.ADMIN)
@UseFilters(AllExceptionFilter)
@Controller(`api/${VERSION}/upload`)
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async uploadImage(@UploadedFiles(new FilesValidationPipe()) files: Array<Express.Multer.File>) {
    return await this.cloudinaryService.uploadFile(files);
  }
}
