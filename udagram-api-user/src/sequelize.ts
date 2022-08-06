import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': 'postgres',
  'password': 'Pr0t3ct3d!',
  'database': 'postgres',
  'host': 'postgres.c9hramhvqqqr.us-east-2.rds.amazonaws.com',

  'dialect': config.dialect,
  'storage': ':memory:',
});
