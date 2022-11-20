import AWS from 'aws-sdk';
import fs from 'fs';

export const s3Upload = async (name, file) => {
  try {
    AWS.config.update({
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
      region: `${process.env.AWS_REGION}`,
    });

    const upload = await new AWS.S3()
      .upload({
        Bucket: process.env.AWS_BUCKET,
        Key: name,
        Body: file,
        ACL: 'public-read',
      })
      .promise();

    return upload.Location;
  } catch (error) {
    throw new Error(error);
  }
};

export const s3Delete = async (filename) => {
  try {
    AWS.config.update({
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
      region: `${process.env.AWS_REGION}`,
    });

    const s3 = new AWS.S3();

    const s3Params = {
      Bucket: process.env.AWS_BUCKET,
      Key: filename,
    };

    s3.deleteObject(s3Params);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateFile = async (path, name) => {
  const file = fs.readFileSync(path);
  const fileExt = name.toLowerCase();
  const location = `${process.env.NODE_ENV}/files/${fileExt}`;
  const fileLink = await s3Upload(location, file);

  if (!fileLink) {
    throw new Error('FILE NOT UPDATED');
  }
  return fileLink;
};

export const deleteFile = async (name) => {
  const fileExt = name.toLowerCase();
  const location = `${process.env.NODE_ENV}/files/${fileExt}`;
  await s3Delete(location);
};
