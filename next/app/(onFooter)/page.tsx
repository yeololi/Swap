import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "./_components/navbar";

const sampleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-12">
        <div className="h-100%">
          {sampleList.map((args, i) => (
            <>
              <div className="w-full h-24 flex items-center" key={i}>
                <div className="mx-4 flex w-full">
                  <Skeleton className="h-[64px] w-[64px]" />
                  <div className="flex flex-col ml-3 flex-1">
                    <Skeleton className="h-5 w-11/12" />
                    <Skeleton className="h-9 w-full mt-2" />
                  </div>
                </div>
              </div>
              <Separator className="bg-[#BDE09E] h-[2px]" />
            </>
          ))}
        </div>
      </main>
    </>
  );
}
