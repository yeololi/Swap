"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import CheckGroup from "./checkGroup";

//   ID    string `json:"id" gorm:"type:char(36);"`
// Email       string `json:"email"`
// Pw          string `json:"pw"`
// Nickname    string `json:"nickname"`
// BankAccount int64  `json:"bank_account"`
// Bank        string `json:"bank"`
// Address     string `json:"address"`
// Height      int    `json:"height"`
// Weight      int    `json:"weight"`
// Gender      string `json:"gender"`
// Age         int    `json:"age"`

interface dataType {
  Email: string;
  Pw: string;
  name: string;
  Nickname: string;
  BankAccount: number;
  Bank: string;
  Address: string;
  Height: number;
  Weight: number;
  Gender: string;
  Age: number;
}

const SignUp = () => {
  const [page, setPage] = useState(1);
  const [inputs, setInputs] = useState({
    Email1: "",
    Email2: "",
    Pw: "",
    name: "",
    Nickname: "",
    BankAccount: "",
    Bank: "",
    Address: "",
    Height: "",
    Weight: "",
    Gender: "",
    Age: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    setInputs(nextInputs);
  };

  const onSubmit = () => {
    console.log(inputs);
  };

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-[#8CC444]">회원가입</Button>
        </DrawerTrigger>
        <DrawerContent className="mb-8">
          <div className="mx-auto w-full max-w-md">
            {page == 1 ? (
              <>
                <DrawerHeader>
                  <DrawerClose asChild>
                    <Button variant="ghost" size={"icon"}>
                      <ChevronLeft />
                    </Button>
                  </DrawerClose>
                  <DrawerTitle>회원가입</DrawerTitle>
                  <DrawerDescription>
                    본인 정보를 입력해주세요
                  </DrawerDescription>
                </DrawerHeader>
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setPage(2);
                    }}
                  >
                    <div className="px-3">
                      <Input
                        value={inputs.name}
                        name={"name"}
                        onChange={onChange}
                        className="mt-5 border-x-0 border-t-0 border-b-[#BDE09E] border-b-2  rounded-none"
                        placeholder="이름"
                        required
                      />
                      <div className="flex items-center mt-10 ">
                        <Input
                          value={inputs.Email1}
                          name={"Email1"}
                          onChange={onChange}
                          className="w-60 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2 placeholder:font-semibold"
                          placeholder="이메일"
                          required
                        />
                        <span className="mx-1 text-xl">@</span>
                        <Input
                          value={inputs.Email2}
                          name={"Email2"}
                          onChange={onChange}
                          className="flex-1 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2"
                          required
                        />
                      </div>
                      <Input
                        type={"password"}
                        value={inputs.Pw}
                        name={"Pw"}
                        onChange={onChange}
                        className="mt-10 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2"
                        placeholder="비밀번호"
                        required
                      />
                    </div>
                    <CheckGroup />
                    <div className="flex justify-end">
                      <Button
                        type={"submit"}
                        variant={"ghost"}
                        className="flex justify-between text-[#8CC444]"
                      >
                        다음으로 <ChevronRight />
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <>
                <DrawerHeader>
                  <div className="w-full flex justify-start">
                    <Button
                      variant="ghost"
                      size={"icon"}
                      onClick={() => {
                        setPage(1);
                      }}
                    >
                      <ChevronLeft />
                    </Button>
                  </div>
                  <DrawerTitle>회원가입</DrawerTitle>
                  <DrawerDescription>
                    부가 정보를 입력해주세요
                  </DrawerDescription>
                </DrawerHeader>
                <div>
                  <form onSubmit={onsubmit}>
                    <div className="px-3">
                      <Input
                        value={inputs.Nickname}
                        name={"Nickname"}
                        onChange={onChange}
                        className="mt-5 border-[1px] rounded-md"
                        placeholder="닉네임"
                        required
                      />
                      <div className="flex items-center mt-10 ">
                        <Input
                          value={inputs.BankAccount}
                          name={"BankAccount"}
                          onChange={onChange}
                          className="w-60 border-[1px] rounded-md placeholder:font-semibold mr-6"
                          placeholder="계좌번호"
                          required
                        />

                        <Input
                          value={inputs.Bank}
                          name={"Bank"}
                          onChange={onChange}
                          className="flex-1 border-[1px] rounded-md"
                          placeholder="은행"
                          required
                        />
                      </div>
                      <Input
                        value={inputs.Address}
                        name={"Address"}
                        onChange={onChange}
                        className="mt-10 border-[1px] rounded-md"
                        placeholder="주소"
                        required
                      />
                      <div className="flex space-x-6 mt-10">
                        <Input
                          value={inputs.Height}
                          name={"Height"}
                          onChange={onChange}
                          className="flex-1 border-[1px] rounded-md"
                          placeholder="키(cm)"
                          required
                        />
                        <Input
                          value={inputs.Weight}
                          name={"Weight"}
                          onChange={onChange}
                          className="flex-1 border-[1px] rounded-md"
                          placeholder="체중(kg)"
                          required
                        />
                      </div>
                      <Select
                        required
                        onValueChange={(value: string) => {
                          const nextInputs = {
                            ...inputs,
                            ["Gender"]: value,
                          };

                          setInputs(nextInputs);
                        }}
                      >
                        <SelectTrigger className="mt-10">
                          <SelectValue placeholder="성별" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">남</SelectItem>
                          <SelectItem value="femal">여</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        required
                        onValueChange={(value: string) => {
                          const nextInputs = {
                            ...inputs,
                            ["Age"]: value,
                          };

                          setInputs(nextInputs);
                        }}
                      >
                        <SelectTrigger className="mt-10">
                          <SelectValue placeholder="연령" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10대</SelectItem>
                          <SelectItem value="20">20대</SelectItem>
                          <SelectItem value="30">30대</SelectItem>
                          <SelectItem value="40">40대</SelectItem>
                          <SelectItem value="50">50대</SelectItem>
                          <SelectItem value="60">60대 이상</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end">
                      <Button className="flex justify-between text-[#8CC444] bg-white hover:bg-white">
                        회원가입 <ChevronRight />
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SignUp;
