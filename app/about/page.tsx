export default function About() {
    return (
      <section>
        <h1 className="text-2xl font-semibold mb-2">About Me</h1>
        <p>I’m Olivia, a Computer Engineering student with experience in C, C++, and recent exposure to web technologies like HTML, CSS, and JavaScript. I love building both low-level systems and playful, meaningful digital spaces.</p>
        <a
        href="/resume.pdf"
        download
        className="inline-block mt-4 text-blue-600 underline hover:text-blue-800"
        >
        Tada! My Resume (PDF)
        </a>
      </section>
    );
  }
