import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  // Add setRole to match expected API
  const setRole = (role) => setIsAdmin(role === 'admin');
  return (
    <RoleContext.Provider value={{ isAdmin, setIsAdmin, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
} 