export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-4">🧪 Forest Findings & Tinkered Trinkets</h1>
      <p className="text-lg text-yellow-800 mb-6">
        Below are a few enchanted logs from my studies, available to read or take home as scrolls:
      </p>

      <div className="space-y-6">

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">🔌 Voltage Whisperer</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>EE97 Lab 6</strong>, I built and tested half-wave and full-wave rectifier circuits with filtering capacitors, analyzing ripple voltage under different load conditions.
          </p>
          <a
            href="/labs/EE97_Lab6_Report.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">⏲️ Treetop Timer</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>EE97 Lab 9</strong>, I explored LM555 oscillators and built a counting circuit with CD4026 to light LEDs and update a 7-segment display.
          </p>
          <a
            href="/labs/EE97_Lab9_Report.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">🔁 Lab Sorting Logic</h2>
          <p className="text-yellow-800 mb-2">
            For <strong>CMPE126 Lab 2</strong>, I implemented data structures like stacks using linked lists in C++, working on pointer logic and memory handling.
          </p>
          <a
            href="/labs/CMPE126_LAB2.zip"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Code (.zip)
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">🧹 Queue Construction</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE126 Lab 5</strong>, I developed a queue class and experimented with linked list manipulations to handle dynamic data flow.
          </p>
          <a
            href="/labs/CMPE126_LAB5.zip"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Code (.zip)
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">🌐 GitHub Hollow</h2>
          <p className="text-yellow-800">
            Explore more digital enchantments in my cozy code burrow:
            {" "}
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
