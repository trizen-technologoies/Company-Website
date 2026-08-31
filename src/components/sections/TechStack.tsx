import { techStack } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function TechStack() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technology Stack"
          title={
            <>
              The tools behind{" "}
              <span className="text-gradient">intelligent products</span>
            </>
          }
          subtitle="A modern, battle-tested stack spanning AI, cloud, web and mobile   chosen for performance, scale and reliability."
        />

        <Reveal className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <span
                key={t}
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-fill px-5 py-2.5 text-sm font-medium text-mist transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-fill-2 hover:text-ink"
                style={{ transitionDelay: `${i * 10}ms` }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue to-violet transition-transform group-hover:scale-150" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
