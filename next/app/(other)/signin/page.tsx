import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";
import OAuth from "../_components/OAuth";
import SignInForm from "../_components/signInForm";
import SignUp from "../_components/signup";

export default function SignIn() {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center bg-[#7D7D7D] ">
        <div className="rounded-xl h-[30rem] w-[310px] flex flex-col bg-white items-center">
          <SignInForm>
            <SignUp />
          </SignInForm>
          <OAuth />
        </div>
      </div>
    </>
  );
}
