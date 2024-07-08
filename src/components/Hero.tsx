import Marquee from "react-fast-marquee";
import { testImage } from "../assets/imagesAndIcons";
import { useEffect, useState } from "react";
import Logo from "../shared/Logo";
import Search from "../shared/Search";

interface ImageProps {
  src: string;
}
export function Image({ src }: ImageProps) {
  return (
    <div className="mx-[1.2rem]">
      <img
        src={src}
        alt="product image"
        width="100%"
        height="auto"
        className="rounded-[1.6rem] w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] object-cover object-right "
      />
    </div>
  );
}

export function Hero() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
    handleResize();
  }, []);
  return (
    <section>
      <div className="lg:flex lg:justify-center">
        <section className="flex flex-col items-center gap-y-[5rem] mt-[15rem] lg:absolute z-20 ">
          <div className=" border-white border-[1px] logobox lg:h-[15rem] lg:w-[27rem] lg:rounded-full lg:flex lg:justify-center  lg:items-center lg:bg-center lg:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white to-white">
            <Logo
              text="text-[3.2rem] lg:text-[4.8rem]"
              icon=" w-[2.9rem] lg:w-[3.9rem]"
            />
          </div>
          <div className="lg:w-[50rem] w-[80%]">
            <Search customStyle="bg-searchBackgroundGrey lg:bg-white border-[1px] lg:border-[8px] border-searchBorderGrey lg:border-searchBorderGlassGrey" />
          </div>
        </section>
      </div>
      <section className="my-[5rem] lg:my-[8rem]">
        <Marquee
          className="flex overflow-x-auto mb-[2.4rem] lg:mb-[3rem]"
          gradient={false}
          direction="right"
          speed={windowWidth > 1024 ? 50 : 30}
        >
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
        </Marquee>
        <Marquee
          className="flex overflow-x-auto mb-[2.4rem] lg:mb-[3rem]"
          gradient={false}
          speed={windowWidth > 1024 ? 50 : 30}
        >
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
          <Image src={testImage} />
        </Marquee>
        <div className="hidden lg:block">
          <Marquee
            className="lg:flex overflow-x-auto mb-[2.4rem] lg:mb-[3rem]"
            gradient={false}
            direction="right"
            speed={windowWidth > 1024 ? 50 : 30}
          >
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
            <Image src={testImage} />
          </Marquee>
        </div>
      </section>
    </section>
  );
}
