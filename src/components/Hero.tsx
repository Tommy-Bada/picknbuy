import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Logo from "../shared/Logo";
import Search from "../shared/Search";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
          <div
            className="border-white bg-opacity-30 border-[1px] logobox lg:h-[15rem] lg:w-[27rem] lg:rounded-full lg:flex lg:justify-center  lg:items-center lg:bg-center lg:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white to-white  cursor-pointer"
            onClick={() => navigate("/")}
          >
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
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557271/picknbuy/Rectangle_45_qugl9k.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557266/picknbuy/Rectangle_46_gbrs82.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_47_qdzwe7.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557264/picknbuy/Rectangle_49_jfhqut.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557262/picknbuy/Rectangle_43_ijxddj.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557261/picknbuy/Rectangle_48_mr9soe.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_50_jsuyvk.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556234/picknbuy/Rectangle_39_kwistf.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556233/picknbuy/Rectangle_41_gir3ka.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720555384/picknbuy/2cad1f8f8e7d8882e6ccc82d0634d414_bnbfsl.jpg" />
        </Marquee>
        <Marquee
          className="flex overflow-x-auto mb-[2.4rem] lg:mb-[3rem]"
          gradient={false}
          speed={windowWidth > 1024 ? 50 : 30}
        >
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556232/picknbuy/Rectangle_40_uqrdhd.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556226/picknbuy/Rectangle_32_kaark7.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556226/picknbuy/Rectangle_31_k56vzw.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556224/picknbuy/Rectangle_29_veyqmr.png" />
          <Image src=" https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720555815/picknbuy/Rectangle_28_zkav4y.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557262/picknbuy/Rectangle_43_ijxddj.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557264/picknbuy/Rectangle_49_jfhqut.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556234/picknbuy/Rectangle_39_kwistf.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557262/picknbuy/Rectangle_43_ijxddj.png" />
          <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_47_qdzwe7.png" />
        </Marquee>
        <div className="hidden lg:block">
          <Marquee
            className="lg:flex overflow-x-auto mb-[2.4rem] lg:mb-[3rem]"
            gradient={false}
            direction="right"
            speed={windowWidth > 1024 ? 50 : 30}
          >
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557262/picknbuy/Rectangle_43_ijxddj.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_50_jsuyvk.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556226/picknbuy/Rectangle_31_k56vzw.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557264/picknbuy/Rectangle_49_jfhqut.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_50_jsuyvk.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720555384/picknbuy/2cad1f8f8e7d8882e6ccc82d0634d414_bnbfsl.jpg" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557265/picknbuy/Rectangle_47_qdzwe7.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556233/picknbuy/Rectangle_41_gir3ka.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720557264/picknbuy/Rectangle_49_jfhqut.png" />
            <Image src="https://res.cloudinary.com/dhuoa5mmo/image/upload/v1720556233/picknbuy/Rectangle_41_gir3ka.png" />
          </Marquee>
        </div>
      </section>
    </section>
  );
}
