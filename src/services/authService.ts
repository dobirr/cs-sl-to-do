export interface User {
  username: string;
  password?: string;
  email?: string;
}
export type AuthResult = {
  user: User;
  success: boolean;
  message: string;
} | null;

class AuthService {
  async authenticate(username: string, password: string): Promise<AuthResult> {
    // kurze Verzögerung simulieren (optional)
    await new Promise((r) => setTimeout(r, 100));

    // Fake-Implementation für Tests
    if (username === 'dennis' && password === '12345') {
      const user: User = { username };
      return {
        user,
        success: true,
        message: 'Authentication successful',
      };
    }

    return null;
  }
}

export default new AuthService();
