import { Button } from "@/components/ui/button";
import Image from "next/image";

const sampleList = [
  { title: "kakao" },
  { title: "google" },
  { title: "apple" },
  { title: "x" },
];

const OAuth = () => {
  return (
    <>
      <div className="flex-1 w-full h-full z-50 flex flex-col p-5 gap-2 mt-2">
        {sampleList.map((args, i) => (
          <Button
            key={i}
            className="rounded-2xl justify-start bg-[#F5F5F5]"
            variant={"secondary"}
          >
            <Image
              src={`/images/${args.title}.png`}
              width={24}
              height={24}
              alt="icon"
              className="mr-4"
            />
            {args.title.replace(/^[a-z]/, (char) => char.toUpperCase())}로
            로그인
          </Button>
        ))}
      </div>
    </>
  );
};

export default OAuth;
