import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Olivia Chen',
  description: 'Resume & personal site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <nav className="p-4 shadow bg-white flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <main className="p-6 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}