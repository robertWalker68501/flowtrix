import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

import prisma from './prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: [
          'CLIENT',
          'OPMANAGER',
          'WHMANAGER',
          'SCMANAGER',
          'SALMANAGER',
          'ADMIN',
          'SUPPORT',
        ],
        required: false,
        defaultValue: 'CLIENT',
        input: false,
      },
    },
  },
});
