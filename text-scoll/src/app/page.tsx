import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-start justify-center h-[200vh]">
        <h1 className="w-[80vw] text-9xl border-b-2 border-gray-400 tracking-wide flex flex-col item-start justify-center relative bg-clip-text bg-0 hover:[clip-path:polygon(0%_05%,_100%_0%,_100%_100%,_0_100%)]  ">TEXT EFFECT
        <span className="absolute bg-cyan-200 [clip-path:polygon(0%_50%,_100%_50%,_100%_50%,_0_50%)] hover:[clip-path:polygon(0%_05%,_100%_0%,_100%_100%,_0_100%)]">WOAH</span>
        </h1>
        <h1 className="text">HOVER<span>AND CLIPPING</span></h1>
        <h1 className="text">TO<span>CRAZYYY</span></h1>
        <h1 className="text">EXPLORE IT <span>SOURCE</span></h1>
        <h1 className="text">LIKE THIS?<span>LET'S CONNECT</span></h1>
    </div>
    </main>
  );
}
