import React from "react";
import { navi } from "@/data/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <ul className="gap-4 cursor-pointer text-sm flex">
          {navi.map((item) => (
            <li
              key={item.id}
              className={clsx("text-slate-900", {
                "text-red-400": pathname === item.link,
              })}
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* toggle mobile menu */}
      <div className="md:hidden focus:outline-none">
        {isOpen ? (
          <button onClick={toggleMenu}>
            <i className="bi bi-x text-2xl text-red-500 cursor-pointer"></i>
          </button>
        ) : (
          <button onClick={toggleMenu}>
            <i className="bi bi-text-right text-2xl cursor-pointer"></i>
          </button>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 bg-slate-800 mt-20 z-30"
          onClick={() => setIsOpen(false)}
        >
          <ul className="gap-4 cursor-pointer text-xl flex flex-col items-center justify-center mt-36">
            {navi.map((item) => (
              <li
                key={item.id}
                className={clsx("text-slate-400", {
                  "text-orange-400": pathname === item.link,
                })}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
