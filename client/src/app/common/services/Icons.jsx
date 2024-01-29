export const ComplexShape1 = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="131"
      height="173"
      viewBox="0 0 131 173"
      fill="none"
    >
      <path
        d="M94.3653 145.58V0H34.7626V145.58H29L64.5575 172.083L100.128 145.58H94.3653Z"
        fill={color ? color : "#2A3072"}
      />
      <circle cx="65.5" cy="75.5" r="65.5" fill={color ? color : "#2A3072"} />
      <circle cx="65" cy="76" r="55.405" stroke="white" strokeWidth="1.19" />
    </svg>
  );
};
