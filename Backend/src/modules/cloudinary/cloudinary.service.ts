import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary-response';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  async uploadFile(files: Array<Express.Multer.File>) {
    
    let filesUploaded: Promise<CloudinaryResponse>[] = [];

    for (const file of files) {

      let response = new Promise<CloudinaryResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          },
        );
        
          streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });

      filesUploaded.push(response);
    }

    return await Promise.all(filesUploaded);
  }
}