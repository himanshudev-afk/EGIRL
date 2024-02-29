type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='36'
    height='36'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <mask
      id='a'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='36'
      height='36'
    >
      <circle cx='18' cy='18' r='18' fill='#D9D9D9' />
    </mask>
    <g mask='url(#a)'>
      <path fill='url(#pattern0asdfelllhryyre)' d='M-1 0h41v53H-1z' />
    </g>
    <defs>
      <pattern
        id='pattern0asdfelllhryyre'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image0_1288_19056'
          transform='matrix(.00113 0 0 .00087 0 0)'
        />
      </pattern>
      <image
        id='image0_1288_19056'
        width='888'
        height='1160'
      />
    </defs>
  </svg>
);

export default SvgComponent;