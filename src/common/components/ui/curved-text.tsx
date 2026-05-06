export const CurvedText = () => {
  return (
    <svg
      viewBox="0 0 400 150"
      xmlns="http://w3.org"
      className="w-full max-w-md h-auto"
    >
      <path
        id="curvePath"
        fill="none"
        d="M 50,78 Q 200,180 350,80" 
      />
      <text className="fill-current text-secondary/80 font-heading font-black text-2xl">
        <textPath 
          href="#curvePath" 
          startOffset="50%" 
          textAnchor="middle"
        >
          Nuestro compromiso...
        </textPath>
      </text>
    </svg>
  );
};
