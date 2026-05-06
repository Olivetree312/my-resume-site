import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function HardwareProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <Link href="/projects" className="text-amber-700 underline">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-yellow-900 mt-4 mb-4">
        🛠 Hardware Systems & Digital Design
      </h1>

      <p className="text-lg text-yellow-800 mb-6">
        Projects involving analog circuitry, PCB design, digital logic, Verilog,
        finite state machines, counters, and hardware behavior.
      </p>

      <div className="space-y-6">
        <ProjectCard
          title="PCB Op-Amp Circuit"
          course="CMPE 110 Op Amp Project"
          description="Completed my first PCB board design experience, from schematics and simulations to soldering."
          href="/labs/CMPE 110_ Final Op-Amp Project Report.pdf"
        />

        <ProjectCard
          title="Second-Order Passive Circuits"
          course="CMPE 110 Second-Order Passive Circuits Lab"
          description="Tested the frequency responses of RC, RL, and RLC circuits."
          href="/labs/CMPE 110_ LAB 2 Report.pdf"
        />

        <ProjectCard
          title="4-Bit Counter Digital Design"
          course="CMPE 124 4-Bit Counter"
          description="Implemented a 4-bit counter in Verilog using full adders, generated schematics on DigitalJS, and tested waveforms on GTKWave."
          href="/labs/CMPE 124 LAB 4_ 4-Bit Counter-2.pdf"
        />

        <ProjectCard
          title="Components of Sequential Circuits"
          course="CMPE 124 D Flip-Flop Lab"
          description="Implemented D-latches and flip-flops using structural Verilog and discussed their behavior differences."
          href="/labs/CMPE 124 LAB 3_ Flip Flop & Registers w D-Latch-2.pdf"
        />

        <ProjectCard
          title="Finite State Machines"
          course="CMPE 124 Finite State Machines Lab"
          description="Implemented and explained a Moore FSM and a Counter-Decoder Type Controller using behavioral Verilog."
          href="/labs/CMPE 124 LAB 5_ Moore State Machines.pdf"
        />

        <ProjectCard
          title="Counting Display Circuit"
          course="EE97 Lab 9"
          description="Explored LM555 oscillators and built a counting circuit with CD4026 to light LEDs and update a 7-segment display."
          href="/labs/EE97_LAB_9_Report.pdf"
        />
      </div>
    </section>
  );
}