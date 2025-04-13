interface AuthCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "client" | "vendor" | "admin";
  createdAt: Date;
}
