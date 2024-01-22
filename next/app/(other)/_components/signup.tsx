import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const sampleList = [
  { id: "service", content: "서비스 이용 약관" },
  { id: "personal", content: "개인정보 취급 방침" },
];

const SignUp = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-[#8CC444]">회원가입</Button>
        </DrawerTrigger>
        <DrawerContent className="mb-8">
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerClose asChild>
                <Button variant="ghost" size={"icon"}>
                  <ChevronLeft />
                </Button>
              </DrawerClose>
              <DrawerTitle>회원가입</DrawerTitle>
              <DrawerDescription>본인 정보를 입력해주세요</DrawerDescription>
            </DrawerHeader>
            <div>
              <form action="" className="">
                <div className="px-3">
                  <Input
                    className="mt-5 border-x-0 border-t-0 border-b-[#BDE09E] border-b-2  rounded-none"
                    placeholder="이름"
                  />
                  <div className="flex items-center mt-10 ">
                    <Input
                      className="w-60 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2 placeholder:font-semibold"
                      placeholder="이메일"
                    />
                    <span className="mx-1 text-xl">@</span>
                    <Input className="flex-1 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2" />
                  </div>
                  <Input
                    className="mt-10 rounded-none border-x-0 border-t-0 border-b-[#BDE09E] border-b-2"
                    placeholder="비밀번호"
                  />
                </div>

                <div className="flex items-center border-[1.5px] space-x-2 border-[#ABABAB] rounded-xl mx-2 mt-6 py-1">
                  <Check size={30} className="text-[#ABABAB] ml-2" />
                  <Label className="font-bold text-lg">전체 동의</Label>
                </div>
                {sampleList.map((args, i) => (
                  <div
                    className="flex items-center space-x-3 mt-4 ml-4"
                    key={i}
                  >
                    <Checkbox id={args.id} className="h-5 w-5" />
                    <Label htmlFor={args.id} className="font-bold text-base">
                      {args.content}
                    </Label>
                    <Link href={"/" + args.id} className="underline text-sm">
                      자세히 보기
                    </Link>
                  </div>
                ))}
              </form>
            </div>

            <DrawerFooter>
              <div className="flex justify-end">
                <Button className="flex justify-between">
                  Submit <ChevronRight />
                </Button>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SignUp;
