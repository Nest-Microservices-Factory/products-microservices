import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
});

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  throw new Error(`Invalid environment variables: ${error} `);
}

export const envs = {
  PORT: data.PORT,
  DATABASE_URL: data.DATABASE_URL,
};
