"use client";

import { createContext, useContext, useState } from "react";

type UsersDialogType = "invite" | "create" | "edit" | "delete";

interface UsersContextType {
  redirectUrl: UsersDialogType | null;
  setRedirectUrl: (str: UsersDialogType | null) => void;
  currentRow: ServiceEditFormProps | null;
  setCurrentRow: React.Dispatch<
    React.SetStateAction<ServiceEditFormProps | null>
  >;
}

const UsersContext = createContext<UsersContextType | null>(null);

export default function UsersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [redirectUrl, setRedirectUrl] = useState<UsersDialogType | null>(null);
  const [currentRow, setCurrentRow] = useState<ServiceEditFormProps | null>(
    null
  );
  return (
    <UsersContext.Provider
      value={{ redirectUrl, setRedirectUrl, currentRow, setCurrentRow }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export const useUsers = () => {
  const usersContext = useContext(UsersContext);

  if (!usersContext) {
    throw new Error("useUsers has to be used within <UsersContext>");
  }

  return usersContext;
};
