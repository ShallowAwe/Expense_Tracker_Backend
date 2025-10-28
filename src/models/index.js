// src/models/index.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['error', 'warn'], // Log errors and warnings
});

export default prisma;
