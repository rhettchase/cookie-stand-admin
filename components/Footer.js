export default function Footer({ locationsCount }) {
    return (
      <footer className='p-4 mt-8 text-xs text-gray-700 bg-green-400'>
        <p className="text-xs">{locationsCount} Location(s) Worldwide</p>
      </footer>
    );
  }