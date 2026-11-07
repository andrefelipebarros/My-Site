/**
 * Decorative dotted "pills" in the empty space on both sides of the column.
 * Only on wide screens, behind the content, never interactive.
 */
const LEFT = [
  { top: "14%", left: "58%", h: 150, flip: false, delay: 0 },
  { top: "34%", left: "24%", h: 120, flip: true, delay: -3 },
  { top: "54%", left: "52%", h: 190, flip: false, delay: -6 },
  { top: "78%", left: "20%", h: 130, flip: true, delay: -2 },
];
const RIGHT = [
  { top: "20%", left: "22%", h: 130, flip: true, delay: -4 },
  { top: "42%", left: "56%", h: 180, flip: false, delay: -1 },
  { top: "64%", left: "26%", h: 120, flip: true, delay: -7 },
  { top: "84%", left: "54%", h: 150, flip: false, delay: -5 },
];

function Side({
  items,
  side,
}: {
  items: typeof LEFT;
  side: "left" | "right";
}) {
  return (
    <div
      className={`absolute inset-y-0 ${side}-0`}
      style={{ width: "calc((100vw - 48rem) / 2)" }}
    >
      {items.map((p, i) => (
        <span
          key={i}
          className={`dot-pill absolute w-12 ${p.flip ? "flip" : ""}`}
          style={{
            top: p.top,
            left: p.left,
            height: p.h,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SideDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden xl:block"
    >
      <Side items={LEFT} side="left" />
      <Side items={RIGHT} side="right" />
    </div>
  );
}
