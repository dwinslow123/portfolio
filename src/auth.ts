import NextAuth from 'next-auth';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { neon } from '@neondatabase/serverless';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@/app/lib/definitions';

const sql = neon(`${process.env.DATABASE_URL}`);
const getUser = async (email: string): Promise<User | null> => {
  const result = await sql`
  SELECT id, emailAddress as email, firstName, lastName, isAdmin, password
  FROM users
  WHERE emailAddress = ${email}
  `;

  try {
    return result[ 0 ] ? result[ 0 ] as User : null;
  } catch (err) {
    console.error('Database query error:', err);
    return null;
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [ Credentials({
    async authorize(credentials): Promise<any> {
      const parsedCredentials = z
        .object({ email: z.email(), password: z.string().min(6) })
        .safeParse(credentials);
      if (parsedCredentials.success) {
        const { email, password } = parsedCredentials.data;
        const user: any = await getUser(email);
        if (user) {
          const isPasswordValid = await bcrypt.compare(password, (user).password);
          if (isPasswordValid) {
            const { password, ...userWithoutPassword } = user;
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