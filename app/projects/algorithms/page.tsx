import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function AlgorithmsProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <Link href="/projects" className="text-amber-700 underline">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-yellow-900 mt-4 mb-4">
        📚 Algorithms & Data Structures
      </h1>

      <p className="text-lg text-yellow-800 mb-6">
        Projects focused on data organization, pointer logic, linked lists,
        queues, stacks, sorting, and algorithmic thinking.
      </p>

      <div className="space-y-6">
        <ProjectCard
          title="Sorting Logic"
          course="CMPE126 Lab 2"
          description="Implemented data structures like stacks using linked lists in C++, practicing pointer logic and memory handling."
          href="/labs/CMPE126_LAB2.zip"
          linkText="📎 Download Code (.zip)"
        />

        <ProjectCard
          title="Queue Construction"
          course="CMPE126 Lab 5"
          description="Developed a queue class and experimented with linked list manipulations to handle dynamic data flow."
          href="/labs/CMPE126_LAB5.zip"
          linkText="📎 Download Code (.zip)"
        />

        <ProjectCard
          title="Linked List Practice"
          course="CMPE126 Data Structures"
          description="Practiced dynamically allocating nodes, connecting pointers, and managing list-based data structures."
        />

        <ProjectCard
          title="Binary Search Tree Concepts"
          course="CMPE130 Algorithms"
          description="Studied predecessor, successor, leaf nodes, and traversal logic in binary search trees."
        />

        <ProjectCard
          title="Sorting Algorithm Analysis"
          course="CMPE130 Algorithms"
          description="Compared sorting algorithms by runtime behavior, stability, memory usage, and asymptotic complexity."
        />
      </div>
    </section>
  );
}