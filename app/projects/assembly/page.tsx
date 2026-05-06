import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function AssemblyProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <Link href="/projects" className="text-amber-700 underline">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-yellow-900 mt-4 mb-4">
        ⚙️ Computer Architecture & Assembly
      </h1>

      <p className="text-lg text-yellow-800 mb-6">
        Low-level projects focused on assembly language, instruction behavior,
        registers, memory, stack operations, and processor architecture.
      </p>

      <div className="space-y-6">
        <ProjectCard
          title="Assembly Code Simulator"
          course="CMPE 102 Assembly Language Simulator"
          description="I created an assembly language simulator that performs logical instructions and arithmetic operations."
          href="/labs/sjsusimulator.s"
          linkText="📎 Download Code"
        />

        <ProjectCard
          title="Stack-Based String Reversal"
          course="CMPE 127 Assembly Lab"
          description="I practiced stack operations by pushing characters onto the stack and popping them into reverse order."
        />

        <ProjectCard
          title="Palindrome Checker in Assembly"
          course="CMPE 127 Assembly Lab"
          description="I extended a stack-based string reversal program to compare the original and reversed strings."
        />

        <ProjectCard
          title="Floating-Point Procedure Practice"
          course="CMPE 127 Microprocessor Architecture"
          description="I practiced 80x87 floating-point instructions for arithmetic procedures involving real-number calculations."
        />

        <ProjectCard
          title="Interrupts and Vector Table Practice"
          course="CMPE 127 Microprocessor Architecture"
          description="I studied real-mode interrupt vectors, interrupt type numbers, and how the CPU locates interrupt service routines."
        />
      </div>
    </section>
  );
}