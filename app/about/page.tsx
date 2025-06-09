export default function About() {
    return (
      <section className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-900 mb-4 tracking-wide">
          🌿 About Me — From the Heart of the Hollow Tree
        </h1>
  
        <p className="text-lg text-yellow-800 mb-4">
          Hello there, traveler! 🐾
        </p>
  
        <p className="text-lg text-yellow-800 mb-4">
          You’ve wandered far and wide—through tangled vines of code and mossy meadows of logic—to arrive here at my little nook in the forest. 
          My name is <strong>Olivia Chen</strong>, and I’m currently nesting under the canopy of San Jose State University, 
          where I study <strong>Computer Engineering</strong>.
        </p>
  
        <p className="text-lg text-yellow-800 mb-4">
          I spend my days wrangling logic gates, chasing circuits like fireflies, and debugging digital enchantments. Whether it’s low-level code or high-level whimsy, 
          I approach each task with thoughtful care, creative curiosity, and a pawful of persistence.
        </p>
  
        <p className="text-lg text-yellow-800 mb-4">
          Though I’m a homebody at heart, something in me stirs—a longing to bring my forest-forged skills into the wider world. 
          If you're in search of someone who finds poetry in problem-solving and joy in quiet collaboration, I may be the creature you seek.
        </p>
  
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 text-amber-700 underline hover:text-amber-900 text-lg"
        >
          🍁 Tada! View my Resume (PDF)
        </a>
      </section>
    );
  }
  