type IconProps = {
  width: number;
  height: number;
};

function Icon({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 24 24"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <path d="M14.095 10.316L22.286 1h-1.94L13.23 9.088 7.551 1H1l8.59 12.231L1 23h1.94l7.51-8.543L16.45 23H23l-8.905-12.684zm-2.658 3.022l-.872-1.218L3.64 2.432h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.926-8.3z"></path>
    </svg>
  );
}

export default Icon;
