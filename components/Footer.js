export default function Footer() {
    return (
      <footer className='p-4 mt-8 text-xs text-gray-700 bg-green-400'>
        <p>&copy;{new Date().getFullYear()}</p>
      </footer>
    );
  }