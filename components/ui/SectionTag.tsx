interface SectionTagProps {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}

export default function SectionTag({ children, center = false, light = false }: SectionTagProps) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}>
      {/* Box icon in teal */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 flex-shrink-0"
      >
        <path
          d="M3 7l7-3.5L17 7v8l-7 3.5L3 15V7z"
          stroke={light ? "rgba(255,255,255,0.6)" : "#009CB4"}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M3 7l7 3.5L17 7"
          stroke={light ? "rgba(255,255,255,0.6)" : "#009CB4"}
          strokeWidth="1.5"
        />
        <path
          d="M10 10.5V18.5"
          stroke={light ? "rgba(255,255,255,0.6)" : "#009CB4"}
          strokeWidth="1.5"
        />
      </svg>
      <span
        className={`text-xs font-bold uppercase tracking-[0.15em] ${
          light ? "text-white/60" : "text-[#009CB4]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
