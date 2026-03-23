type SquareProps = {
  left?: number;
  right?: number;
  top?: number;
  rot?: number;
};

export default function Square({ left, right, top, rot }: SquareProps) {
  const positionStyles: React.CSSProperties = {
    ...(left !== undefined ? { left: `${left}%` } : {}),
    ...(right !== undefined ? { right: `${right}%` } : {}),
    ...(top !== undefined ? { top: `${top}%` } : {}),
    ...(rot !== undefined ? { transform: `rotate(${rot}deg)` } : {}),
  };

  return (
    <div
      className="absolute w-16 h-16 transition-all duration-[222ms]"
      style={{
        ...positionStyles,
        backgroundImage: `url("https://uploads-ssl.webflow.com/63c6b6a8e34f347803dc4c5a/63c842d3dae94067156e1f56_Rectangle%2011.svg"),url("https://uploads-ssl.webflow.com/63c6b6a8e34f347803dc4c5a/63c842d392cc1d3e6f715a62_Rectangle%2012.svg")`,
        backgroundPosition: '50% 50%, 50% 50%',
        backgroundSize: 'cover, cover',
        backgroundRepeat: 'no-repeat, no-repeat',
      }}
    />
  );
}
