import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number(),
});

const { success, data, error } = envSchema.safeParse(process.env);

if (!success) {
  throw new Error(`Invalid environment variables: ${error} `);
}

export const envs = {
  PORT: data.PORT,
};
