import Link from "next/link";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Nodeblix home">
      <span className={invert ? "logo-mark invert" : "logo-mark"}>
        nodebli
        <span>x</span>
      </span>
    </Link>
  );
}
