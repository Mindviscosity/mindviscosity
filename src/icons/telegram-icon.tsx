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
      fill="none"
      viewBox="0 0 512 512"
    >
      <g clipPath="url(#clip0_551_12)">
        <path
          fill="url(#paint0_linear_551_12)"
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M115.88 253.3c74.63-32.52 124.39-53.95 149.29-64.31 71.1-29.57 85.87-34.71 95.5-34.88 2.12-.03 6.85.49 9.92 2.98 2.59 2.1 3.3 4.94 3.64 6.93.34 2 .77 6.53.43 10.08-3.85 40.48-20.52 138.71-29 184.05-3.59 19.19-10.66 25.62-17.5 26.25-14.86 1.37-26.15-9.83-40.55-19.27-22.53-14.76-35.26-23.96-57.13-38.37-25.28-16.66-8.89-25.81 5.51-40.77 3.77-3.92 69.27-63.5 70.54-68.9.16-.68.31-3.2-1.19-4.53s-3.71-.87-5.3-.51c-2.26.51-38.25 24.3-107.98 71.37-10.22 7.02-19.48 10.43-27.77 10.26-9.14-.2-26.72-5.17-39.79-9.42-16.03-5.21-28.77-7.97-27.66-16.82.57-4.61 6.92-9.32 19.04-14.14z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_551_12"
          x1="256"
          x2="256"
          y1="3.84"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AABEE"></stop>
          <stop offset="1" stopColor="#229ED9"></stop>
        </linearGradient>
        <clipPath id="clip0_551_12">
          <path fill="#fff" d="M0 0H512V512H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
