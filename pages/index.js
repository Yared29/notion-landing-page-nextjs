import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SectionDetailWithPic from "../components/SectionDetailWithPic";
import SliderInfoSection from "../components/SliderInfoSection";
import Testimonies from "../components/Testimonies";
import TryNotionSectionWithButton from "../components/TryNotionSectionWithButton";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto my-2 px-20 py-2">
      <div className="sticky top-0 z-50 bg-white">
        <NavBar />
      </div>
      <Hero />
      <div className="pt-20">
        <SectionDetailWithPic
          imageUrl="/ss1.png"
          iconUrl="/spot-team-up.png"
          iconHeight="70"
          iconWidth="98"
          title="  Team up without the chaos"
          detail=" Connect your teams, projects, and docs in Notion — so you can bust silos and move as one."
        />

        <SectionDetailWithPic
          imageUrl="/ss2.png"
          iconUrl="/spot-context.png"
          iconHeight="52"
          iconWidth="73"
          title="Never ask “What’s the context?” again"
          detail="Stale wikis aren't helpful. Neither are floating docs. In Notion, your daily work and knowledge live side by side — so you never lose context."
        />

        <SectionDetailWithPic
          imageUrl="/ss3.png"
          iconHeight="48"
          iconWidth="160"
          iconUrl="/spot-workflow.png"
          title="Build the workflow you want"
          detail="Customize Notion to make it work the way you want it to. Just drag and drop to craft the dashboard, website, doc, or system you need."
        />

        <SectionDetailWithPic
          imageUrl="/ss4.png"
          iconHeight="62"
          iconWidth="56"
          iconUrl="/spot-ecosystem.png"
          title="Benefit from a global ecosystem of creators"
          detail="Get inspiration from thousands of community-made templates, integrations, and events."
          detail2="You'll never want for resources or support."
        />
      </div>
      <div className="h-px bg-gray-300 mt-20 mb-20" />
      <TryNotionSectionWithButton />
      <div className="hidden md:block">
        <SliderInfoSection />
      </div>
      <div className="h-px bg-gray-300 mt-20 mb-20" />
      <div className="flex justify-between mb-20">
        <div className="max-w-md  mx-auto sm:m-0 sm:text-start text-center">
          <div className="text-black font-bold text-3xl">
            Start with a template.
          </div>
          <div className="text-black font-bold text-3xl">
            Modify it however you need.
          </div>
          <div className="text-gray-500 text-sm font-semibold pt-2">
            Choose from thousands of free, pre-built setups — for work and life.
          </div>
          <div className=" mx-auto sm:m-0 max-w-fit mt-4 rounded font-semibold border border-gray-300 cursor-pointer bg-white text-black p-2 text-xs hover:bg-gray-300 ">
            See all templates →
          </div>
        </div>
        <div className="hidden sm:block">
          <Image
            src="/blocks-spot.png"
            height="91"
            width="250"
            alt="blocks-spot"
          />
        </div>
        {/* Slideshow here */}
      </div>
      <div className="h-px bg-gray-300 mt-20 mb-20" />
      <div className="flex justify-between mb-20 mx-auto sm:m-0 sm:text-start text-center">
        <div className="max-w-md mx-auto sm:m-0 sm:text-start text-center">
          <div className="text-black font-bold text-3xl">
            Used by the world`s most
          </div>
          <div className="text-black font-bold text-3xl">innovative teams</div>
          <div className="text-gray-500 text-sm font-semibold pt-2">
            innovative teams
          </div>
          <div className="  mx-auto sm:m-0 max-w-fit mt-4 rounded font-semibold border border-gray-300 cursor-pointer bg-white text-black p-2 text-xs hover:bg-gray-300 ">
            Read all customer stories →
          </div>
        </div>
        <div className="hidden sm:block">
          <Image src="/teamwork.png" height="230" width="360" alt="teamwork" />
        </div>
      </div>
      <div className="hidden sm:block">
        <Testimonies />
      </div>
      <div className="h-px bg-gray-300 mt-20 mb-20" />
      <div className="flex align-middle justify-center">
        <div className="align-middle text-center items-center">
          <Image
            src="/notion-app-icon-3d.png"
            height="80"
            width="80"
            alt="notion-app-icon-3d"
          />
          <div className="text-3xl font-bold p-1">Try Notion today</div>
          <div className="text-md text-gray-500 font-semibold p-1">
            Get started for free.
          </div>
          <div className="text-md text-gray-500 font-semibold p-1">
            Add your whole team as your needs grow.
          </div>
          <div className="flex justify-center p-2 md:pb-0 pb-10">
            <div className="max-w-fit rounded font-semibold border border-gray-600 px-8 border-gray300 cursor-pointer bg-red-500 text-gray-200 py-2 text-xs hover:bg-red-600 ">
              Get Notion free
            </div>
          </div>
          <div className="text-sm text-gray-500 font-semibold p-1">
            On a big team?
            <span className="text-sm text-gray-500 font-semibold p-1 underline hover:text-red-500 hover:no-underline hover:cursor-pointer">
              Contact sales
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-fit relative  bottom-20 pb-10 sm:pb-10">
          <div className="pl-20 hidden md:block">
            <Image
              src="/sitting-character.png"
              height="260"
              width="260"
              alt="sitting-character"
            />
          </div>
        </div>
        <div className="relative bottom-20 hidden xs:block">
          <div className="h-px bg-gray-300 " />
        </div>
      </div>
      <Footer />
    </div>
  );
}
