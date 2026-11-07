/** Pixel-art "A" with a blinking accent pixel, drawn on a 7x5 grid. */
export function PixelMark({ className = "h-5 w-8" }: { className?: string }) {
  const A = ["..###..", ".#...#.", ".#####.", ".#...#.", ".#...#."];
  return (
    <svg
      viewBox="0 0 8 5"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {A.flatMap((row, y) =>
        row.split("").map((c, x) =>
          c === "#" ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" className="text-foreground" />
          ) : null,
        ),
      )}
      <rect x="7" y="4" width="1" height="1" className="cursor-blink-pixel fill-accent" />
    </svg>
  );
}

