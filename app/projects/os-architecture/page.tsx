import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function OSArchitectureProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <Link href="/projects" className="text-amber-700 underline">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-yellow-900 mt-4 mb-4">
        Operating Systems & Concurrency
      </h1>

      <p className="text-lg text-yellow-800 mb-6">
        Systems programming projects involving processes, threads, locks,
        condition variables, memory mapping, synchronization, and file-backed
        data structures.
      </p>

      <div className="space-y-6">
        <ProjectCard
          title="Multithreaded Treasury Simulator"
          course="CMPE 142 Operating Systems"
          description="Used pthreads and mutex locks to process concurrent money transfers while avoiding race conditions and deadlocks."
          href="https://github.com/Olivetree312/CMPE_142/tree/926357bdd3809ac7cd5187972e0d4d3d34f5908b/genovian-treasury"
          linkText="🌐 genovian-treasury Github Repo"
        />

        <ProjectCard
          title="Linguist Word Classifier"
          course="CMPE 142 Operating Systems"
          description="Built a multithreaded word classification program using reader, cleaner, and counter threads with mutexes and condition variables."
          href="https://github.com/Olivetree312/CMPE_142/tree/926357bdd3809ac7cd5187972e0d4d3d34f5908b/linguist"
          linkText="🌐 lingust Github Repo"
        />

        <ProjectCard
          title="Persistent Memory-Mapped Table"
          course="CMPE 142 Operating Systems"
          description="Implemented a persistent key-value table using mmap, file-backed storage, free lists, and offset-based data structures."
          href="https://github.com/Olivetree312/CMPE_142/tree/926357bdd3809ac7cd5187972e0d4d3d34f5908b/ptable"
          linkText="🌐 ptable Github Repo"
        />

        <ProjectCard
          title="Process Conversation Program"
          course="CMPE 142 Operating Systems"
          description="Connected two programs together using fork, execvp, pipes, and dup2 so their input and output streams could communicate."
          href="https://github.com/Olivetree312/CMPE_142/tree/926357bdd3809ac7cd5187972e0d4d3d34f5908b/converse"
          linkText="🌐 converse Github Repo"
        />

        <ProjectCard
          title="XOR Encryption and Decryption"
          course="CMPE 142 Operating Systems"
          description="Implemented byte-level encryption and brute-force decryption logic using evolving keys and command-line I/O."
          href="https://github.com/Olivetree312/CMPE_142/tree/926357bdd3809ac7cd5187972e0d4d3d34f5908b/hacker-decrypt"
          linkText="🌐 hacker-decrypt Github Repo"
        />
      </div>
    </section>
  );
}