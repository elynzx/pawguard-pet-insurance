import { Hero } from "../../components/hero/hero";
import { Discounts } from "../../components/discounts/discounts";
import { Banner } from "../../components/banner/banner";
import { Faq } from "../../components/faq/faq";
import { Benefits } from "../../components/benefits/benefits";
import { PawPrintIcon, CatIcon, DogIcon } from "@phosphor-icons/react";
import { Plans } from "../../components/plans/plans";


export function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-[0.12]">
        <PawPrintIcon size={150} weight="fill" className="absolute text-secondary top-[2%] left-24 rotate-[-25deg]" />
        <PawPrintIcon size={150} weight="fill" className="absolute text-secondary top-[9%] right-26 rotate-18" />
        <DogIcon size={110} weight="bold" className="absolute text-secondary top-[32%] right-25 rotate-15" />
        <CatIcon size={120} weight="bold" className="absolute text-secondary top-[20%] left-25 rotate-[-15deg]" />
        <PawPrintIcon size={150} weight="fill" className="absolute text-secondary top-[45%] left-[5%] rotate-45" />
        <PawPrintIcon size={150} weight="fill" className="absolute text-secondary top-[65%] right-12 rotate-110" />
        <CatIcon size={160} weight="bold" className="absolute text-secondary top-[82%] left-[2%] rotate-[-10deg]" />
        <PawPrintIcon size={80} weight="fill" className="absolute text-secondary top-[92%] right-[10%] rotate-12" />
      </div>

      <Hero />

      <main className="w-full flex flex-col items-center gap-40 md:gap-45 relative z-10 mx-auto">
        <Discounts />
        <Banner />
        <Plans />
        <Benefits />
        <Faq />
      </main>
    </div>
  )
}
