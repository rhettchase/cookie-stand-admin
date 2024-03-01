import Link from "next/link";
import { useContext } from 'react';
import { useAuth } from '../contexts/auth';

export default function Header() {
  const { user, login, logout } = useAuth();
    return (
      <header className='flex items-center justify-between text-2xl text-black bg-green-400 itemsp-4'>
        <h1>Cookie Stand Admin</h1>
        <nav>
        <Link href="/overview" className="px-2 py-1 text-xs bg-white rounded">Overview</Link>
        {user && (
          // Assuming `user` would be null or undefined when not logged in
          <button onClick={logout} className="px-2 py-1 ml-4 text-xs bg-white rounded">
            Logout
          </button>
        )}
        </nav>
      </header>
    );
  }
  