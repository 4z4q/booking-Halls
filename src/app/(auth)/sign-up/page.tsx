"use client";

import AuthForm from "@/components/AuthForm";
import {  signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validation";

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default page;
