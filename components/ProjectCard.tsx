type ProjectCardProps = {
  title: string;
  course: string;
  description: string;
  href?: string;
  linkText?: string;
};

export default function ProjectCard({
  title,
  course,
  description,
  href,
  linkText = "📎 Download Report",
}: ProjectCardProps) {
  return (
    <div className="p-4 bg-white rounded-xl border border-yellow-200 shadow-sm">
      <h2 className="text-xl font-semibold text-yellow-900">{title}</h2>

      <p className="text-yellow-800 mb-2">
        In <strong>{course}</strong>, {description}
      </p>

      {href && (
        <a
          href={href}
          download
          className="text-amber-700 underline hover:text-amber-900"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}