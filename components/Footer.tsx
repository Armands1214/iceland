import Container from "./Container";
export default function Footer(){
  return (
    <footer className="mt-24 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <Container className="py-10 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Iceland — a quiet visual story.</p>
        <p>Next.js • Vercel</p>
      </Container>
    </footer>
  );
}
