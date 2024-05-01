import React, { createContext, useContext, useState } from "react";
import { IDataProps } from "../types/dataTypes";

const UserEditContext = createContext<IDataProps | undefined>(undefined);

export const UserEditProvider: React.FC = ({ children }) => {
  const [editData, setEditData] = useState<IDataProps | undefined>(undefined);

  return (
    <UserEditContext.Provider value={{ editData, setEditData }}>
      {children}
    </UserEditContext.Provider>
  );
};

export const useUserEdit = () => {
  const context = useContext(UserEditContext);
  if (!context) {
    throw new Error("useUserEdit must be used within a UserEditProvider");
  }
  return context;
};
