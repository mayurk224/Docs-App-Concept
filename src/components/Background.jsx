import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="w-full absolute py-10 top-[5%] flex justify-center text-2xl  text-zinc-600 font-semibold">
          Documents
        </div>
        <h1 className="text-[13vw] font-semibold text-zinc-900 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
