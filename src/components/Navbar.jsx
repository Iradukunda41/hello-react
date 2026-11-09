export default function Navbar({ brand, links }) {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-lg font-bold text-slate-900">{brand}</span>
        <ul className="flex gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}