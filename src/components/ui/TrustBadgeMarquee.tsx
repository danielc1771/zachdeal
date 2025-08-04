'use client';

export default function TrustBadgeMarquee() {
  const badges = [
    {
      icon: (
        <svg className="w-4 h-4 text-bbd-orange" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      text: "4.9/5 Rating"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      text: "10K+ Clients"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "100% Secure"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: "Fast Shipping"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      text: "Money Back Guarantee"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-bbd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "24/7 Support"
    }
  ];

  return (
    <div className="relative w-full bg-bbd-black border-b border-bbd-charcoal/50 py-2 overflow-hidden">
      <div className="flex">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-8 pr-8">
          {[...badges, ...badges].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-bbd-ivory text-xs sm:text-sm whitespace-nowrap">
              {badge.icon}
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
        <div className="flex animate-[scroll_30s_linear_infinite] gap-8 pr-8" aria-hidden="true">
          {[...badges, ...badges].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-bbd-ivory text-xs sm:text-sm whitespace-nowrap">
              {badge.icon}
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}