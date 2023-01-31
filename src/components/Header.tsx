import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsLockFill } from "react-icons/bs";

export const Header = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between py-3 px-4 h-14 font-Roboto text-sm text-dark-blue bg-white">
        <li className="hidden md:block">
          <Link
            href="#"
            className="border px-3 py-2 border-border shadow-sm rounded-md flex items-center"
          >
            <BsArrowLeft className="w-4 h-4 mr-4" />
            Terug naar homepage
          </Link>
        </li>
        <li>
          <Image src="/wozlogo.png" width="150" height="150" alt="woz-logo" />
        </li>
        <li className="md:hidden">
          <button className="text-xs font-bold border py-2 px-3 rounded-md border-border shadow-sm">
            Feedback
          </button>
        </li>
        <li className="hidden md:flex items-center">
          <BsLockFill className="w-4 h-4" />
          <p className="pl-1">Beveiligde verbinding</p>
        </li>
      </ul>
    </nav>
  );
};
