"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

const SignInForm = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");

  const onSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/form", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({ email: email, password: passward }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex mb-2">
        <Mail />
        <span className="ml-1">이메일 로그인</span>
      </div>

      <Input
        type="email"
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        className="mt-1"
        onChange={(e) => setPassward(e.target.value)}
        value={passward}
      />
      <div className="mt-2 w-full flex justify-end">
        {children}
        <Button type="submit" className="bg-[#4B8500] ml-2" onClick={onSubmit}>
          로그인
        </Button>
      </div>
    </>
  );
};

export default SignInForm;