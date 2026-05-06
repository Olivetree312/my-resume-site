import Link from "next/link";

const categories = [
  {
    title: "🛠 Hardware Systems & Digital Design",
    href: "/projects/hardware",
    description:
      "PCB design, op-amp circuits, passive filters, Verilog, FSMs, counters, and digital hardware labs.",
  },
  {
    title: "⚙️ Computer Architecture & Assembly",
    href: "/projects/assembly",
    description:
      "Assembly language, instruction simulation, CPU behavior, stack operations, registers, and low-level programming.",
  },
  {
    title: "📚 Algorithms & Data Structures",
    href: "/projects/algorithms",
    description:
      "Stacks, queues, linked lists, sorting logic, pointer-based structures, and algorithmic problem solving.",
  },
  {
    title: "🧠 Operating Systems & Concurrency",
    href: "/projects/os-architecture",
    description:
      "Threads, locks, condition variables, mmap, fork, execvp, pipes, synchronization, and systems programming.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-4">
        🧪 Forest Findings
      </h1>

      <p className="text-lg text-yellow-800 mb-6">
        A cozy archive of my engineering projects, sorted by the branches of
        computer engineering I have been exploring.
      </p>

      <div className="space-y-6">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="block p-5 bg-white rounded-xl border border-yellow-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <h2 className="text-2xl font-semibold text-yellow-900 mb-2">
              {category.title}
            </h2>
            <p className="text-yellow-800 mb-3">{category.description}</p>
            <p className="text-amber-700 underline">Explore projects →</p>
          </Link>
        ))}

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">
            🌐 GitHub Hollow
          </h2>
          <p className="text-yellow-800">
            Explore more digital enchantments in my cozy code burrow:{" "}
            <a
              href="https://github.com/olivetree312"
              className="underline text-amber-700 hover:text-amber-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/olivetree312
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}