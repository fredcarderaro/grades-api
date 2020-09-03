import mongoose from 'mongoose';
import gradeModel from './gradeModel.js';
import dotenv from 'dotenv';

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.grade = gradeModel(mongoose);
db.url = process.env.MONGODB;

export { db };
