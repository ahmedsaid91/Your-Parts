// utils/state/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthorized: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // Define children as ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const login = () => {
    setIsAuthorized(true);

  };

  const logout = () => {
    setIsAuthorized(false);

  };

  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children} {/* Render children here */}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
