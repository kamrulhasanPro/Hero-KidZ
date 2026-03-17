import { fontBangla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 py-10 ">
      {/* text Content */}
      <div className="flex-1 space-y-3">
        <h1
          className={`${fontBangla.className} text-6xl font-semibold leading-tight`}
        >
          আপনার শিশুকে একটি <span className="text-primary">সুন্দর ভবিষ্যৎ</span>
        </h1>
        <p>Buy every toy with up 15% Discount</p>

        {/* action */}
        <Link href={"/products"} className="btn btn-primary btn-outline">
          Explore Products
        </Link>
      </div>

      {/* image */}
      <figure className="flex-1">
        <Image
          src={"/assets/hero.png"}
          alt="Hero Image"
          width={500}
          height={600}
        />
      </figure>
    </section>
  );
};

export default Banner;
