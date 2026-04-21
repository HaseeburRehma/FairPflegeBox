interface LogoProps {
  className?: string;
  variant?: "color" | "dark" | "white";
}

export function FairPflegeBoxLogo({
  className = "h-10 w-auto",
  variant = "color",
}: LogoProps) {
  const wordColor =
    variant === "white" ? "#ffffff" : "#43358B";
  const taglineColor =
    variant === "white" ? "rgba(255,255,255,0.7)" : "#009CB4";
  const boxStroke =
    variant === "white" ? "#ffffff" : "#009CB4";
  const boxFill =
    variant === "white" ? "rgba(255,255,255,0.15)" : "rgba(0,156,180,0.12)";
  const crossColor =
    variant === "white" ? "#ffffff" : "#43358B";

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Box Icon */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "100%", width: "auto", maxHeight: "40px" }}
      >
        {/* Box body */}
        <path
          d="M5 16L22 8L39 16V34L22 42L5 34V16Z"
          fill={boxFill}
          stroke={boxStroke}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Box fold line */}
        <path d="M5 16L22 24L39 16" stroke={boxStroke} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 24V42" stroke={boxStroke} strokeWidth="1.8" />
        {/* Lid top */}
        <path
          d="M14 12L22 8L30 12V18L22 22L14 18V12Z"
          fill={variant === "white" ? "rgba(255,255,255,0.2)" : "rgba(67,53,139,0.15)"}
          stroke={crossColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        {/* Cross symbol */}
        <rect x="20" y="13.5" width="4" height="1.6" rx="0.8" fill={crossColor} />
        <rect x="21.2" y="12" width="1.6" height="4.6" rx="0.8" fill={crossColor} />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            color: wordColor,
            fontFamily: "Onest, sans-serif",
            fontWeight: 800,
            fontSize: "17px",
            letterSpacing: "-0.3px",
            lineHeight: 1.15,
          }}
        >
          FairPflegeBox
        </span>
        <span
          style={{
            color: taglineColor,
            fontFamily: "Onest, sans-serif",
            fontWeight: 500,
            fontSize: "9px",
            letterSpacing: "0.05em",
            lineHeight: 1.3,
            marginTop: "2px",
          }}
        >
          Pflegehilfsmittel einfach &amp; fair
        </span>
      </div>
    </div>
  );
}

export default FairPflegeBoxLogo;
