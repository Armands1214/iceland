'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-neutral-900/60 shadow-sm" : "bg-transparent"}`}>
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl">Iceland</Link>
        <nav className="flex gap-6 text-sm">
          <a className="link-underline" href="#story">Story</a>
          <a className="link-underline" href="#frames">Frames</a>
        </nav>
      </Container>
    </div>
  );
}
