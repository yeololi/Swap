"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

const sampleList = [
  { id: "service", content: "서비스 이용 약관" },
  { id: "personal", content: "개인정보 취급 방침" },
];

const CheckGroup = () => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const [buttonColor, setButtonColor] = useState(false);
  const [allCheck, setAllCheck] = useState(false);

  const checkAll = (e: any) => {
    if (!allCheck || checkList.length === 1) {
      setCheckList(["service", "personal"]);
      setAllCheck(true);
    } else {
      setCheckList([]);
      setAllCheck(false);
    }
  };

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  useEffect(() => {
    if (checkList.includes("service") && checkList.includes("personal")) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [checkList]);

  return (
    <>
      <div
        className={cn(
          "flex items-center space-x-2 rounded-xl ml-2 mt-6 py-1",
          buttonColor && "text-[#8CC444]"
        )}
        onClick={checkAll}
      >
        <Check
          size={30}
          className={cn("text-[#ABABAB] ml-2", buttonColor && "text-[#8CC444]")}
        />
        <Label className="font-bold text-lg">전체 동의</Label>
      </div>
      {sampleList.map((args, i) => (
        <div className="flex items-center space-x-3 mt-4 ml-4" key={i}>
          <input
            type={"checkbox"}
            id={args.id}
            name={args.id}
            className="h-5 w-5"
            checked={checkList.includes(args.id) ? true : false}
            onChange={check}
          />
          <Label htmlFor={args.id} className="font-bold text-base">
            {args.content}
          </Label>
          <Link href={"/" + args.id} className="underline text-sm">
            자세히 보기
          </Link>
        </div>
      ))}
    </>
  );
};

export default CheckGroup;
