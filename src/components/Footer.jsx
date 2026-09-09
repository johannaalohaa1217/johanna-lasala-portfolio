import { profile } from '../content.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 py-8 dark:border-ink-700">
      <div className="container-editorial flex flex-col items-center justify-between gap-3 text-xs text-ink-400 sm:flex-row">
        <p>
          © {year} {profile.name}
        </p>
        <p className="label-mono">All Rights Reserved.</p>
      </div>
    </footer>
  );
}
