export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  isActive: boolean
  createdAt: string
}

export interface UserSession {
  user: User
  accessToken: string
  refreshToken: string
  expiresAt: number
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface PasswordResetRequest {
  email: string
}

export interface PasswordUpdateData {
  currentPassword: string
  newPassword: string
  newPasswordConfirmation: string
}

export interface UserProfile extends Omit<User, 'id' | 'role' | 'isActive' | 'createdAt'> {
  phone?: string
  address?: string
  bio?: string
}
