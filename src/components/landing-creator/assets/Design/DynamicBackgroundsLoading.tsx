type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='620'
    height='555'
    viewBox='0 0 620 555'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='91' y='70' width='104' height='52' rx='26' fill='#F5F5F5' />
    <path
      d='M1 392.549l292.534-282.565c43.921-42.4243 117.359-13.2869 120.247 47.71l13.256 279.986c1.335 28.204 37.344 39.113 54.107 16.392L613 275.351'
      stroke='#C4C4C4'
      strokeDasharray='8 8'
    />
    <rect x='49' y='177.5' width='570' height='237' rx='24' fill='#C4C4C4' />
    <path
      transform='translate(77 125.5)'
      fill='url(#paint0_linear_1567_19096)'
      d='M0 0h516v369H0z'
    />
    <rect x='91' y='155' width='240' height='135' rx='8' fill='#E7E7E7' />
    <rect x='91' y='298' width='240' height='135' rx='8' fill='#E7E7E7' />
    <rect x='339' y='155' width='240' height='135' rx='8' fill='#E7E7E7' />
    <rect x='339' y='298' width='240' height='135' rx='8' fill='#E7E7E7' />
    <rect x='483' y='466' width='95' height='52' rx='26' fill='#F5F5F5' />
    <defs>
      <linearGradient
        id='paint0_linear_1567_19096'
        x1='258'
        y1='0'
        x2='258'
        y2='369'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity='0' />
        <stop offset='.089818' stopColor='#fff' stopOpacity='.829791' />
        <stop offset='.813172' stopColor='#fff' />
        <stop offset='1' stopColor='#fff' stopOpacity='0' />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
