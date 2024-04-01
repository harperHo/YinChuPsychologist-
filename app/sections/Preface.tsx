import React from "react";
import Image from "next/image";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Preface: React.FC = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0,
  });
  const fadeInCls = isIntersecting
    ? "opacity-1 animate-[fade-in-bt_600ms_ease-in-out]"
    : "opacity-0";

  return (
    <div
      ref={ref}
      className="p-10 flex justify-center bg-[#96988B] md:pt-14 md:pb-16 "
    >
      <div
        className={`flex flex-col items-center font-gen-wan-min text-white text-center md:w-1/2 md:text-xl ${fadeInCls}`}
      >
        <Image
          src="/quotes.png"
          width={50}
          height={38}
          alt="quotes"
          className="mb-4 w-[50px] h-auto"
        />
        當你願意花一點時間了解自己，就是你生命中最大的禮物。生命是一條漫長的路，有曲折也有順遂。而諮商的過程中，有時是你在前頭帶著我走、有時是我在前頭引領著你，但更多時候我們是並肩而行。
        若是你對於自己好奇、對自己想要有更多的認識，那麼我會跟你一起走。
        期待能夠陪伴你度過這些時刻，好好了解自己、善待自己。
      </div>
    </div>
  );
};

export default Preface;
