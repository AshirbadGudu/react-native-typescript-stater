import create from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const useAuth = create<AuthState>(set => ({
  isAuthenticated: true,
  setIsAuthenticated: (isAuthenticated: boolean) =>
    set(state => ({
      ...state,
      isAuthenticated,
    })),
}));

export default useAuth;
