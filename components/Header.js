import Link from "next/link";

export default function Header() {
    return (
      <header className='flex items-center justify-between text-2xl text-black bg-green-400 itemsp-4'>
        <h1>Cookie Stand Admin</h1>
        <nav>
        <Link href="/overview" className="px-2 py-1 text-xs bg-white rounded">Overview</Link>
        </nav>
      </header>
    );
  }
  