import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SectionDetailWithPic from "../components/SectionDetailWithPic";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto my-2 px-20 py-2">
      <NavBar />
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
    </div>
  );
}
