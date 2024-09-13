const CircularProgressBar = ({
  percent,
  size = 3,
  stockeWidth = 0.25,
  strokeColor = "green",
}) => {
  const radius = size / 2 - stockeWidth;
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${stockeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          strokeWidth={`${stockeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`}
          strokeDashoffset={`${
            2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius
          }vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="25px"
          y="25px"
          fill="white"
          fontSize="1.2vw"
          alignmentBaseline="middle"
          textAnchor="middle"
          name=""
          id=""
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
