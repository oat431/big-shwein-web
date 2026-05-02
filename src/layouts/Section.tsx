import type { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      {children}
    </section>
  );
}
