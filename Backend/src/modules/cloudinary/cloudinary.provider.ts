import { v2 as cloudinary } from 'cloudinary';
import { CLOUD, CLOUD_API_KEY, CLOUD_API_SECRET } from 'src/common/constants';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
        cloud_name: CLOUD,
        api_key: CLOUD_API_KEY,
        api_secret: CLOUD_API_SECRET,
    });
  },
};