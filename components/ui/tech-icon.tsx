type TechIconProps = {
  name: string;
  className?: string;
};

export default function TechIcon({ name, className = "h-6 w-6" }: TechIconProps) {
  const icons: Record<string, React.ReactNode> = {
    WordPress: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path
          fill="#fff"
          d="M6 12a6 6 0 0 0 3.5 5.5L6.5 9.5A6 6 0 0 0 6 12Zm6 6a5.9 5.9 0 0 0 3-0.8l-2.6-7.5L11.2 18Zm1.4-8.6 1.4 4.1c.5-1.7.2-3.6-0.9-5l-0.5 0.9ZM12 5a7 7 0 0 0-5.2 2.3l2.8 8.1A6 6 0 0 0 12 5Z"
        />
      </svg>
    ),
    Shopify: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#95BF47"
          d="M16 3.5c0 0-0.2 0.1-0.5 0.2-0.1-0.7-0.6-1.2-1.3-1.2-0.8 0-1.3 0.5-1.5 1.2-0.3 0.1-0.7 0.2-1 0.3L11 2 4.5 4v16L15 21.5 20.5 20V4L16 3.5Z"
        />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#000" />
        <path fill="#fff" d="M7 7h3.5l4.5 7.5V7H18v10h-3.5L10 9.5V17H7V7Z" />
      </svg>
    ),
    Angular: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#DD0031" d="M12 2 2 5.5l1.5 13L12 22l8.5-3.5L22 5.5 12 2Z" />
        <path fill="#fff" d="M12 4.2 18.5 6.2 17.5 17 12 19.2 6.5 17 5.5 6.2 12 4.2Z" />
        <path fill="#DD0031" d="M12 7.5 9.5 13h1.8l0.5-1.2h2.4l0.5 1.2H17L14.5 7.5H12Z" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}
