import Image, { StaticImageData } from "next/image";

type BrowserMockupProps = {
  src: StaticImageData | string;
  alt: string;
  url?: string;
  priority?: boolean;
};

export default function BrowserMockup({
  src,
  alt,
  url = "adityakalgutkar.com",
  priority = false,
}: BrowserMockupProps) {
  return (
    <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                {url}
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
  <span className="animate-[code-1_12s_infinite] text-gray-200">
    Incoming Project...
  </span>

  <br />
  <br />

  <span className="animate-[code-2_12s_infinite]">
    Client: Overstitch store
  </span>

  <br />

  <span className="animate-[code-3_12s_infinite]">
    Platform: Shopify
  </span>

  <br />

  <span className="animate-[code-4_12s_infinite]">
    Timeline: 10 Days
  </span>

  <br />

  <span className="animate-[code-5_12s_infinite]">
    Status: In Progress...
  </span>

  <br />
  <br />

  <span className="animate-[code-6_12s_infinite]">
    ✓ Homepage
  </span>

  <br />

  <span className="animate-[code-6_12s_infinite]">
    ✓ Product Pages
  </span>

  <br />

  <span className="animate-[code-6_12s_infinite]">
    ✓ Checkout
  </span>

  <br />

  <span className="animate-[code-6_12s_infinite]">
    ✓ Mobile Optimization
  </span>

  <br />
  <br />

  <span className="animate-[code-6_12s_infinite] text-emerald-400">
    Ready for Launch
  </span>
</div>
            </div>
  );
}
