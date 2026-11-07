/** Round flags as SVG (emoji flags show up as letters on Windows). */
export function FlagBR({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <clipPath id="fbr"><circle cx="12" cy="12" r="12" /></clipPath>
      <g clipPath="url(#fbr)">
        <rect width="24" height="24" fill="#009C3B" />
        <path d="M12 3.5 21.5 12 12 20.5 2.5 12Z" fill="#FFDF00" />
        <circle cx="12" cy="12" r="4.6" fill="#002776" />
        <path d="M7.7 11q4.3-1.3 8.6 1.2" stroke="#fff" strokeWidth="0.9" fill="none" />
      </g>
    </svg>
  );
}

export function FlagUS({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <clipPath id="fus"><circle cx="12" cy="12" r="12" /></clipPath>
      <g clipPath="url(#fus)">
        <rect width="24" height="24" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={(i * 24) / 13} width="24" height={24 / 13} fill="#B22234" />
        ))}
        <rect width="11" height="13" fill="#3C3B6E" />
        {[2.5, 5.5, 8.5].flatMap((x) =>
          [2.5, 5.5, 8.5, 11].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y - 0.5} r="0.55" fill="#fff" />
          )),
        )}
      </g>
    </svg>
  );
}
