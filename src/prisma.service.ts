import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { envs } from './config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaBetterSqlite3({ url: envs.DATABASE_URL });
    super({ adapter });
  }
}
