"use client"

import { signup, signin } from "@/lib/api"
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import styles from "../styles/authForm.module.css"
import Link from "next/link";


type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
};

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Create a new Account",
  subheader: "Just a few things to get started",
  buttonText: "Register",
};

const signinContent = {
  linkUrl: "/signup",
  linkText: "Don't have an account?",
  header: "Welcome Back",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

const AuthForm = ({mode}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const [error, setError] = useState("");
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      if (mode === "signup") {
        await signup(data);
      } else {
        await signin(data);
      }
      router.replace("/home");
    } catch (e) {
      setError(`Could not ${mode}`);
    }

  }

  const content = mode === "signup" ? registerContent : signinContent;


  return (
    <div className={styles.container}>

        <h1>{content.header}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
        <h2>{content.subheader}</h2>
        {
          mode === "signup" &&
            <div className={styles.flexCol}>
              <input
                placeholder="First Name"
                {...register('firstName', {required: true})}/>
              <input
                placeholder="Last Name"
                {...register('lastName', {required: true})}/>
            </div>
        }
        <div className={styles.flexCol}>
          <input
            type="email"
            placeholder="Email"
            {...register('email', {required: true})}/>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {required: true})}/>
        </div>
        <button className={styles.authButton} type="submit">{content.buttonText}</button>
        <p><Link href={content.linkUrl}>{content.linkText}</Link></p>
      </form>
    </div>
  )
}

export default AuthForm