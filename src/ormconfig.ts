import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

export default {
  type: 'postgres',
  cache: false,
  url: 'postgres://rss:bRCeDkgdpI4RRnWBJMB0zzp0CySYpemf@dpg-ce2fo81a6gdsa650fnvg-a.frankfurt-postgres.render.com/rssdb_lvhd',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
