import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function IcelandShowcase(){
  return (
    <main>
      <Hero />
      <Container id="story" className="py-20">
        <div className="mx-auto prose prose-neutral lg:prose-lg dark:prose-invert">
          <p>It starts with wind. The kind that erases small talk and leaves only the bones of a sentence. In Iceland, edges feel closer, light feels cleaner, and silence has its own weather.</p>
          <p>Water speaks first. It falls like glass, then drifts as mist, then returns as a soft chill on the skin. On black sand, the Atlantic writes and rewrites its short poems, white ink on obsidian.</p>
        </div>
      </Container>

      <section id="frames" className="my-6">
        <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-elevate">
            <Image src="/images/portrait-green.jpg" alt="Portrait in green sweater" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-elevate">
            <Image src="/images/portrait-dress.jpg" alt="Mirror portrait in white dress" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Container className="py-16">
        <div className="mx-auto prose prose-neutral lg:prose-lg dark:prose-invert">
          <blockquote>Where the fire and the ice meet.</blockquote>
          <p>Between geyser breath and quiet roads, the mind slows. You start noticing small things: a single red roof in a valley, steam threading through rain, the way lava keeps its memory even after it cools.</p>
          <p>I’ll return with warmer gloves. Until then, these frames will have to hold the weather.</p>
        </div>
      </Container>
    </main>
  );
}
