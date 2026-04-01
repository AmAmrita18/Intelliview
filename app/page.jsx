import { GoldTitle, GrayTitle, SectionLabel } from "@/components/reusables";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden">
        {/* Hero  */}
        <SectionLabel>Welcome to Intelliview</SectionLabel>
      </section>
    </div>
  );
}
