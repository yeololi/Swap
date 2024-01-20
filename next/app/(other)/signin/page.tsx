import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Link from "next/link";
import OAuth from "../_components/OAuth";
import SignUp from "../_components/signup";

export default function SignIn() {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center bg-[#7D7D7D] ">
        <div className="rounded-xl h-[30rem] w-[310px] flex flex-col bg-white items-center">
          <form className="mt-10 rounded-xl w-72 h-48 shadow-xl p-4">
            <div className="flex mb-2">
              <Mail />
              <span className="ml-1">이메일 로그인</span>
            </div>

            <Input type="email" placeholder="이메일" />
            <Input type="password" placeholder="비밀번호" className="mt-1" />
            <div className="mt-2 w-full flex justify-end">
              <SignUp />
              <Button type="submit" className="bg-[#4B8500] ml-2">
                로그인
              </Button>
            </div>
          </form>
          <OAuth />
        </div>
      </div>
    </>
  );
}
