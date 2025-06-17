import mongoose from 'mongoose';
let gfs;

mongoose.connection.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'resumes' });
});

export const getGfs = () => gfs;
