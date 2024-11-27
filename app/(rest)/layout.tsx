import Friends from "@/components/Friends/Friends";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const Rest = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-screen flex justify-between ">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[4] w-full">{children}</div>
    </section>
  );
};

export default Rest;
