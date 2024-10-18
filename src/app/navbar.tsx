import { faAddressBook, faBook, faCodeBranch, faHome, faMoon, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavbarItem({ href, icon, text }: { href: string; icon: IconDefinition, text: string }) {
  return (
    <a
      href={href}
      className="text-lg no-underline text-gray-400 hover:text-gray-100 ml-5"
    >
        <FontAwesomeIcon icon={icon} />
        <span className="ml-2">{text}</span>
    </a>
  );
}

export function Navbar() {
  return (
    <div className="relative">
        {/* Adjusted gradient overlay */}
        <div className="h-8 absolute inset-x-0 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900/50 pointer-events-none"></div>
    
        <nav className="h-16 bg-gradient-to-r from-gray-900 to-sky-950 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full z-10">
            <div className="mb-2 sm:mb-0">
            <a
                href="#"
                className="text-2xl no-underline text-gray-400 hover:text-blue-dark"
            >
                <FontAwesomeIcon icon={faMoon} />
                <span className="ml-2">bigsleepjoe.com</span>
            </a>
            </div>
            <div>
            <NavbarItem href="#" text="About" icon={faBook} />
            <NavbarItem href="#" text="Contact" icon={faAddressBook} />
            <NavbarItem href="https://www.github.com/thebigsleepjoe" text="GitHub" icon={faCodeBranch} />
            </div>
        </nav>
    </div>
  );
}