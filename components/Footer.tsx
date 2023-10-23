import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        
        <a
          href="https://www.linkedin.com/in/parsa-mazaheri/"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Parsa Mazaheri, Fall 2023
        </a>
      </div>
      
    </footer>
  );
}
