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
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CheckGroup from "./checkGroup";

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

                <CheckGroup />
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
