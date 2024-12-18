import Friends from "@/components/Friends/Friends";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-screen flex justify-between ">
      <div className="md:flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[2] w-full">{children}</div>

      <div className="md:block flex-[1] hidden ">
        <Friends />
      </div>
    </section>
  );
};

export default Mainlayout;
