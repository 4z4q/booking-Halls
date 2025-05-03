"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import useDialogState from "@/hooks/use-dialog-state";
import { Payment } from "@/lib/validation";

/**
 * Types of dialogs available in the dashboard.
 */
export type DashBoardDialogType = "create" | "update" | "delete" | "import";

/**
 * Defines the structure of the dashboard dialog context.
 */
interface DashBoardDialogContextType {
  /** The currently open dialog type, or null if none is open. */
  open: DashBoardDialogType | null;
  /** Function to update the currently open dialog type. */
  setOpen: (dialog: DashBoardDialogType | null) => void;
  /** The currently selected task row for operations like update or delete. */
  currentRow: Payment | null;
  /** Setter for the currently selected task row. */
  setCurrentRow: Dispatch<SetStateAction<Payment | null>>;
}

// Create the context with a default value of null
const DashBoardDialogContext = createContext<DashBoardDialogContextType | null>(
  null
);

/**
 * Provides dashboard dialog context to its children.
 * Should be used to wrap components that need access to dialog state.
 *
 * @param children - React child components.
 */
export function DashBoardDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useDialogState<DashBoardDialogType>();
  const [currentRow, setCurrentRow] = useState<Payment | null>(null);

  return (
    <DashBoardDialogContext.Provider
      value={{ open, setOpen, currentRow, setCurrentRow }}
    >
      {children}
    </DashBoardDialogContext.Provider>
  );
}

/**
 * Custom hook to access dashboard dialog context.
 * Must be used inside a component wrapped with `DashBoardDialogProvider`.
 *
 * @throws Error if used outside of a `DashBoardDialogProvider`.
 * @returns The dashboard dialog context value.
 */
export function useDialogContext(): DashBoardDialogContextType {
  const context = useContext(DashBoardDialogContext);
  if (!context) {
    throw new Error(
      "useDialogContext must be used within a DashBoardDialogProvider."
    );
  }
  return context;
}
