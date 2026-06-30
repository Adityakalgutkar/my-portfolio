type ServiceIconProps = {
  name: string;
  className?: string;
};

export default function ServiceIcon({
  name,
  className = "h-10 w-10",
}: ServiceIconProps) {
  const icons: Record<string, React.ReactNode> = {
    "WordPress Development": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path
          fill="#fff"
          d="M4.5 12c0 3.5 2.2 6.5 5.3 7.7L5.1 9.8A7.5 7.5 0 0 0 4.5 12Zm7.5 7.2c1.4 0 2.7-.4 3.8-1.1l-3.3-9.6-3.4 9.3c.9.3 1.8.4 2.9.4Zm1.9-10.4 1.9 5.4c.7-2.3.3-4.9-1.1-6.8l-.8 1.4ZM12 4.8c1.6 0 3 .5 4.2 1.4l-3.8-11A7.5 7.5 0 0 0 12 4.8Zm5.8 2.1c1.2 1.6 1.9 3.6 1.9 5.7 0 1.1-.2 2.1-.5 3.1l-2.3-6.7c.5-.7.9-1.4 1-2.1ZM12 19.2a7.2 7.2 0 0 1-6.1-3.4l3.5 10.2A7.2 7.2 0 0 0 12 19.2Z"
        />
      </svg>
    ),
    "Shopify Development": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#95BF47"
          d="M15.3 3.2c-.1 0-.2.1-.3.1-.1-.8-.7-1.5-1.6-1.5-.9 0-1.5.6-1.7 1.4-.4.1-.8.2-1.1.3L10.4 2 3 4.1v15.8L14.6 22l6.4-1.6V3.4l-5.7-1.2Zm-2.1.8c.3-.1.6-.2.9-.3v-.1c.1-.4.4-.7.8-.7.4 0 .7.3.8.7v.1c.9-.2 1.8-.4 2.6-.6.2.5.3 1 .3 1.5 0 .2 0 .4-.1.6l-4.3 1.1v-2.3Zm-1.2 2.9 4.5-1.2c-.3.8-.7 1.5-1.2 2.1l-3.3.9V6.9Zm8.5 11.5-5.1 1.3V12.4l5.1-1.3v7.3Z"
        />
        <path fill="#5E8E3E" d="M10.2 6.9v10.8l5.1-1.3V5.6l-5.1 1.3Z" />
      </svg>
    ),
    "Custom Web Development": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#61DAFB" fillOpacity="0.15" />
        <path
          fill="#3B82F6"
          d="M8 6h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm1 3v1h6V9H9Zm0 2v1h4v-1H9Zm0 2v1h6v-1H9Z"
        />
        <path fill="#61DAFB" d="M17 8.5 19 7v10l-2-1.5V8.5Z" />
      </svg>
    ),
    "Landing Pages": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#8B5CF6" fillOpacity="0.15" />
        <rect x="5" y="5" width="14" height="3" rx="1" fill="#8B5CF6" />
        <rect x="5" y="10" width="8" height="2" rx="0.5" fill="#A78BFA" />
        <rect x="5" y="13.5" width="10" height="1.5" rx="0.5" fill="#C4B5FD" />
        <rect x="5" y="16.5" width="6" height="2.5" rx="1" fill="#8B5CF6" />
      </svg>
    ),
    "Website Optimization": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#10B981" fillOpacity="0.15" />
        <path
          fill="#10B981"
          d="M6 16l3-4 3 2 5-7 1 1.5-5.5 7.5-3-2-3 4H6Z"
        />
        <circle cx="18" cy="7" r="2" fill="#34D399" />
      </svg>
    ),
    "Maintenance & Support": (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#F59E0B" fillOpacity="0.15" />
        <path
          fill="#F59E0B"
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"
        />
      </svg>
    ),
  };

  return (
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
      {icons[name] ?? icons["Custom Web Development"]}
    </div>
  );
}
