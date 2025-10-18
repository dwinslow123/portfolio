import NextAuth from 'next-auth';
import { z } from 'zod';
import bcrypt  from 'bcrypt';
import { neon } from '@neondatabase/serverless';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@/app/lib/definitions';

const sql = neon(`${process.env.DATABASE_URL}`);

const getUser = async (email: string): Promise<User | null> => {
    const result = await sql<User[]>`
      SELECT id, email, first_name AS "firstName", last_name AS "lastName", is_admin AS "isAdmin", password_hash
      FROM users
      WHERE email = ${email}
    `;
    
  try {
    return result.length > 0 ? result[0] : null;
  } catch (err) {
    console.error('Database query error:', err);
    return null;
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
    providers: [Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);

            if (user) {
              const isPasswordValid = await bcrypt.compare(password, (user as any).password_hash);
              if (isPasswordValid) {
                const { password_hash, ...userWithoutPassword } = user;
                return userWithoutPassword;
              } else {
                throw new Error('Invalid credentials');
              }
            }
          }
      },
    })
],
});