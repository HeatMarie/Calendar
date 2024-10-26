import { ModeToggle } from "@/components/Color-Toggle";
import Calendar from "./components/Calendar";
import { CalendarProvider } from "./components/Calendar/context/calendarContext";
import { Suspense } from "react";



export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
      <CalendarProvider>
        <div className="w-[24%]">
          <div className="fixed h-full w-[20%] bg-primary text-primary-foreground ">
            <div className="flex justify-end m-4 text-primary">
              <ModeToggle />
            </div>
            Sidebar goes here
          </div>

        </div>
        <div className="w-[80%] m-4" style={{ maxHeight: "calc(100vh - 40rem)"}}>
        <Suspense>
        <Calendar/>
        </Suspense>

        </div>
      </CalendarProvider>


      </div>
    </div>
  );
}
