"use client";

import { logoutUser } from "@/utils/auth";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <Button
      onClick={async () => {
        await logoutUser();
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;
