export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-900 mb-4">🧪 Forest Findings</h1>
      <p className="text-lg text-yellow-800 mb-6">
        Below are a few enchanted logs from my studies, available to read or take home as scrolls:
      </p>

      <div className="space-y-6">

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">PCB Op-Amp Circuit</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE 110 Op Amp Project</strong>, My first experience with PCB board design, from schematics and simulations to soldering.
          </p>
          <a
            href="/labs/CMPE 110_ Final Op-Amp Project Report.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">Second-Order Passive Circuits</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE 110 Second-Order Passive Circuits Lab</strong>, Testing the frequency responses of RC, RL, and RLC circuits.
          </p>
          <a
            href="/labs/CMPE 110_ LAB 2 Report.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">Assembly Code Simulator</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE 102 Assembly Language Simulator</strong>, I made, using assembly language, an assembly language simulator that performs various logical instructions and arithmetic operations.
          </p>
          <a
            href="/labs/sjsusimulator.s"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Code
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">4-Bit Counter Digital Design</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE 124 4-Bit Counter</strong>, I implemented a 4-bit counter in Verilog comprised of full-adders, generated schematics on DigitalJS, and tested waveforms on GTKWave.
          </p>
          <a
            href="/labs/CMPE 124 LAB 4_ 4-Bit Counter-2.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">Components of Sequential Circuits</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE 124 D Flip-Flop Lab</strong>, I implemented D-latches and flip-flops using structural Verilog and discussed their differences and behaviors.
          </p>
          <a
            href="/labs/CMPE 124 LAB 3_ Flip Flop & Registers w D-Latch-2.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">Finite State Machines</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>CMPE 124 Finite State Machines Lab</strong>, I implemented and explained a basic Moore FSM and a Counter-Decoder Type Controller using behavioral Verilog.
          </p>
          <a
            href="/labs/CMPE 124 LAB 5_ Moore State Machines.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">Counting Display Circuit</h2>
          <p className="text-yellow-800 mb-2">
            In <strong>EE97 Lab 9</strong>, I explored LM555 oscillators and built a counting circuit with CD4026 to light LEDs and update a 7-segment display.
          </p>
          <a
            href="/labs/EE97_LAB_9_Report.pdf"
            download
            className="text-amber-700 underline hover:text-amber-900"
          >
            📎 Download Report
          </a>
        </div>

        <div className="p-4 bg-white rounded-xl border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-900">Sorting Logic</h2>
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
          <h2 className="text-xl font-semibold text-yellow-900">Queue Construction</h2>
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
