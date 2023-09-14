import * as bcrypt from 'bcrypt';
import { extname } from 'path';
import internal from 'stream';
export const imageFileFilter = (req: any, file: any, callback: any) => {
  file.size = 1024 * 1024;
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|doc|docx|xls|xlsx)$/)) {
    req.fileValidationError = 'only image files allowed';
    return callback(null, false);
  }
  callback(null, true);
};

export const editFileName = (req: any, file: any, callback: any) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const saltOrRounds = 10;
  const randomName = bcrypt.hash(name, saltOrRounds);
  callback(null, `${name}-${randomName}${fileExtName}`);
  // callback(null, `${name}${fileExtName}`);
};
