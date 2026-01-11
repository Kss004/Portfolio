import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-sm uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white/60 py-2"
    >
      {title}
    </Link>
  );
};

export default NavLink;