interface AuthCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // role: "client" | "vendor" | "admin";
  // createdAt: Date;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  role: "client" | "vendor" | "admin";
  createdAt: Date | null;
}