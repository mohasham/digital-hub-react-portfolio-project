
/**
 * Each project gets drawn cover art instead of a stock photo — a small
 * abstraction of what the app actually does. Everything is inline SVG,
 * so nothing is fetched and the art animates with the card.
 */

const Frame = ({ id, from, to, children }) => (
  <svg viewBox="0 0 480 300" className="project-cover" role="img" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={from} />
        <stop offset="100%" stopColor={to} />
      </linearGradient>
    </defs>
    <rect width="480" height="300" fill={`url(#${id}-bg)`} />
    {children}
  </svg>
);

/** Booking platform: a week of slots, one of them claimed. */
export const BookingCover = () => (
  <Frame id="booking" from="#0d3350" to="#071a2b">
    <g opacity="0.9">
      {[0, 1, 2, 3, 4, 5, 6].map((col) =>
        [0, 1, 2, 3].map((row) => {
          const taken = (col + row) % 5 === 0;
          const active = col === 3 && row === 2;
          return (
            <rect
              key={`${col}-${row}`}
              x={54 + col * 54}
              y={78 + row * 44}
              width="42"
              height="32"
              rx="7"
              fill={active ? '#f2b35b' : taken ? 'rgba(95,224,192,.28)' : 'rgba(215,236,255,.08)'}
              stroke={active ? '#f2b35b' : 'rgba(215,236,255,.14)'}
              strokeWidth="1"
              className={active ? 'project-cover__pulse' : undefined}
            />
          );
        })
      )}
    </g>
    <rect x="54" y="46" width="130" height="10" rx="5" fill="rgba(215,236,255,.3)" />
    <rect x="54" y="248" width="86" height="22" rx="11" fill="#5fe0c0" opacity="0.9" />
    <rect x="150" y="248" width="60" height="22" rx="11" fill="rgba(215,236,255,.12)" />
  </Frame>
);

/** Meal planner: calorie rings over a day's plan. */
export const MealCover = () => (
  <Frame id="meal" from="#123c3a" to="#071a2b">
    <g transform="translate(140 150)">
      {[
        { r: 76, stroke: '#5fe0c0', dash: 340, opacity: 0.95 },
        { r: 58, stroke: '#f2b35b', dash: 250, opacity: 0.9 },
        { r: 40, stroke: '#7fb4ff', dash: 150, opacity: 0.8 },
      ].map((ring) => (
        <circle
          key={ring.r}
          r={ring.r}
          fill="none"
          stroke={ring.stroke}
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={`${ring.dash} 999`}
          opacity={ring.opacity}
          transform="rotate(-90)"
        />
      ))}
    </g>
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="268" y={82 + i * 52} width="150" height="36" rx="10" fill="rgba(215,236,255,.07)" />
          <circle cx="288" cy={100 + i * 52} r="8" fill={['#5fe0c0', '#f2b35b', '#7fb4ff'][i]} />
          <rect x="306" y={94 + i * 52} width="84" height="7" rx="3.5" fill="rgba(215,236,255,.32)" />
          <rect x="306" y={106 + i * 52} width="48" height="6" rx="3" fill="rgba(215,236,255,.16)" />
        </g>
      ))}
    </g>
  </Frame>
);

/** Career navigator: a scored skill graph feeding a roadmap path. */
export const RoadmapCover = () => (
  <Frame id="roadmap" from="#2a2450" to="#071a2b">
    <path
      d="M46 238 C 130 238, 118 162, 196 162 S 286 96, 360 96 L 436 96"
      fill="none"
      stroke="rgba(242,179,91,.35)"
      strokeWidth="2"
      strokeDasharray="6 8"
    />
    <path
      d="M46 238 C 130 238, 118 162, 196 162 S 286 96, 360 96 L 436 96"
      fill="none"
      stroke="#f2b35b"
      strokeWidth="3"
      strokeLinecap="round"
      className="project-cover__path"
    />
    {[
      { x: 46, y: 238, r: 9, fill: '#f2b35b' },
      { x: 196, y: 162, r: 9, fill: '#f2b35b' },
      { x: 360, y: 96, r: 9, fill: '#5fe0c0' },
    ].map((node) => (
      <circle key={node.x} cx={node.x} cy={node.y} r={node.r} fill={node.fill} />
    ))}
    <g opacity="0.85">
      {[
        { x: 72, h: 44 },
        { x: 104, h: 68 },
        { x: 136, h: 32 },
        { x: 168, h: 82 },
      ].map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={72 - bar.h + 30}
          width="16"
          height={bar.h}
          rx="6"
          fill="rgba(95,224,192,.4)"
        />
      ))}
    </g>
    <rect x="252" y="42" width="164" height="9" rx="4.5" fill="rgba(215,236,255,.22)" />
    <rect x="252" y="60" width="104" height="9" rx="4.5" fill="rgba(215,236,255,.12)" />
  </Frame>
);

/** Storefront + inventory: a shelf feeding an order queue. */
export const CommerceCover = () => (
  <Frame id="commerce" from="#0f2f44" to="#071a2b">
    <g>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={50 + i * 52}
          y={70}
          width="40"
          height={56}
          rx="9"
          fill={i === 1 ? 'rgba(242,179,91,.55)' : 'rgba(215,236,255,.1)'}
          stroke="rgba(215,236,255,.16)"
        />
      ))}
      <rect x="50" y="136" width="196" height="3" rx="1.5" fill="rgba(215,236,255,.2)" />
    </g>
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="286" y={70 + i * 56} width="146" height="44" rx="11" fill="rgba(215,236,255,.07)" />
          <rect x="302" y={84 + i * 56} width="70" height="7" rx="3.5" fill="rgba(215,236,255,.3)" />
          <rect x="302" y={96 + i * 56} width="40" height="6" rx="3" fill="rgba(215,236,255,.15)" />
          <circle cx="410" cy={92 + i * 56} r="7" fill={i === 0 ? '#5fe0c0' : 'rgba(215,236,255,.2)'} />
        </g>
      ))}
    </g>
    <rect x="50" y="228" width="196" height="34" rx="12" fill="rgba(95,224,192,.18)" stroke="rgba(95,224,192,.4)" />
    <rect x="68" y="242" width="88" height="7" rx="3.5" fill="rgba(215,236,255,.4)" />
  </Frame>
);
