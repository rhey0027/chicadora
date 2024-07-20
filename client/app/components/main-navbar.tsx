"use client";
import React from "react";
import Image from "next/image";
import NavLinks from "./nav-links";
import Link from "next/link";

const MainNavbar = () => {
  return (
    <nav className="w-screen h-20 flex items-center container-fluid justify-between mb-20">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <Image src="/chika-logo.png" alt="Chika Logo" width={70} height={70} />
        <p className="text-2xl font-bold">Chikadora</p>
      </Link>
      <NavLinks />
    </nav>
  );
};

export default MainNavbar;
