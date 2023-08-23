import React from 'react';
import Svg, {Line, Path, Circle, SvgProps} from 'react-native-svg';

export type IconType = SvgProps & {
  size?: number;
  color?: string;
};
const defaultProps: IconType = {
  size: 24,
  color: '#000',
};

const ICONS = {
  Delete: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></Path>
    </Svg>
  ),
  CaretUp: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z" />
    </Svg>
  ),
  Filter: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </Svg>
  ),

  Minus: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M5 11H19V13H5z"></Path>
    </Svg>
  ),
  Plus: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path
        fill-rule="evenodd"
        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
        clip-rule="evenodd"></Path>
      <Path
        fill-rule="evenodd"
        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
        clip-rule="evenodd"></Path>
    </Svg>
  ),

  SettingsKnob: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M87 32v71h18V32H87zm160 0v345h18V32h-18zm160 0v167h18V32h-18zM50 121c-5.14 0-9 3.9-9 9v28c0 5.1 3.86 9 9 9h92c5.1 0 9-3.9 9-9v-28c0-5.1-3.9-9-9-9H50zm37 64v295h18V185H87zm283 32c-5.1 0-9 3.9-9 9v28c0 5.1 3.9 9 9 9h92c5.1 0 9-3.9 9-9v-28c0-5.1-3.9-9-9-9h-92zm37 64v199h18V281h-18zM210 395c-5.1 0-9 3.9-9 9v28c0 5.1 3.9 9 9 9h92c5.1 0 9-3.9 9-9v-28c0-5.1-3.9-9-9-9h-92zm37 64v21h18v-21h-18z"></Path>
    </Svg>
  ),
  HeartIcon: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></Path>
    </Svg>
  ),
  ShoppingBag: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></Path>
    </Svg>
  ),
  CartIcon: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></Path>
    </Svg>
  ),
  HomeIcon: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></Path>
    </Svg>
  ),
  Password: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"></Path>
    </Svg>
  ),
  Menu: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Line
        stroke={props.color || defaultProps.color}
        x1="3"
        y1="12"
        x2="21"
        y2="12"
      />
      <Line
        stroke={props.color || defaultProps.color}
        x1="3"
        y1="6"
        x2="21"
        y2="6"
      />
      <Line
        stroke={props.color || defaultProps.color}
        x1="3"
        y1="18"
        x2="21"
        y2="18"
      />
    </Svg>
  ),
  RightArrow: (props: IconType) => (
    <Svg
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  LeftArrow: (props: IconType) => (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
        stroke={props.color || defaultProps.color || defaultProps.color}
      />
    </Svg>
  ),
  CertificateDownload: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Help: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Circle cx="12" cy="12" r="10" />
      <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <Line x1="12" y1="17" x2="12" y2="17" />
    </Svg>
  ),
  People: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fill-rule="evenodd"
        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002.002zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z"
        clip-rule="evenodd"
      />
    </Svg>
  ),
  Notification: (props: IconType) => (
    <Svg
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      {...props}
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path d="M13.377 10.573a7.63 7.63 0 0 1-.383-2.38V6.195a5.115 5.115 0 0 0-1.268-3.446 5.138 5.138 0 0 0-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 0 0-1.208 1.675 5.067 5.067 0 0 0-.431 2.022v2.2a7.61 7.61 0 0 1-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 0 1-.705.299.997.997 0 0 1-.706-.3.997.997 0 0 1-.3-.705h1.999a.939.939 0 0 1-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 0 0 .443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 0 1 2.597 1.4 4.133 4.133 0 0 1 1.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z" />
    </Svg>
  ),
  Heart: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
    </Svg>
  ),
  NotificationDot: (props: IconType) => (
    <Svg
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 8.9c.1.6.2 1.1.4 1.7l.6 1.7-.5.7H10c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6-.5 0-1.1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4H2.5l-.5-.7.6-1.7c.2-.8.4-1.6.4-2.4V6c0-.7.1-1.4.4-2 .3-.7.7-1.2 1.2-1.7s1.1-.8 1.8-1C6.9 1.1 7.5 1 8 1c-.2.3-.4.7-.6 1.1-.2 0-.4 0-.7.2-.5.1-1 .4-1.4.8-.4.3-.8.8-1 1.3-.2.5-.3 1-.3 1.6v2.2c0 .9-.2 1.8-.4 2.7L3.2 12h9.6l-.4-1.1c-.175-.526-.274-1.13-.363-1.674L12 9c.4 0 .7 0 1-.1zM8 14c.2 0 .5-.1.7-.3.2-.2.3-.4.3-.7H7c0 .3.1.5.3.7.2.2.5.3.7.3zm7-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></Path>
    </Svg>
  ),

  ChevronLeft: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 320 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
      />
    </Svg>
  ),
  Payment: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
      />
    </Svg>
  ),
  Security: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
      />
    </Svg>
  ),
  Language: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 640 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"
      />
    </Svg>
  ),
  ChevronRight: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  DarkMode: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
      />
    </Svg>
  ),
  Privacy: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z" />
    </Svg>
  ),
  Info: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      />
      <Path
        stroke={props.color || defaultProps.color}
        d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      />
    </Svg>
  ),

  // --------------------------------

  Orders: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"
      />
    </Svg>
  ),
  Home: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
    </Svg>
  ),
  Dots: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        stroke={props.color || defaultProps.color}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  ),
  RightAngle: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
      />
    </Svg>
  ),

  Cart: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"
      />
    </Svg>
  ),
  Wallet: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        stroke={props.color || defaultProps.color}
        d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
      />
    </Svg>
  ),

  Profile: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
      />
    </Svg>
  ),

  // -------------------------------
  Rating: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
      />
    </Svg>
  ),
  Star: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path
        d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Refer: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Logout: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Sort: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M11 9H20V11H11zM11 13H18V15H11zM11 5H22V7H11zM11 17H16V19H11zM5 20L7 20 7 8 10 8 6 4 2 8 5 8z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Search: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Chat: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"
        stroke={props.color || defaultProps.color}
      />
      <Path
        d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Phone: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
    </Svg>
  ),
  Schedule: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"
      />
    </Svg>
  ),
  Stall: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M22,5c0-1.654-1.346-3-3-3H5C3.346,2,2,3.346,2,5v2.831c0,1.053,0.382,2.01,1,2.746V19c0,1.103,0.897,2,2,2h4h6h4	c1.103,0,2-0.897,2-2v-8.424c0.618-0.735,1-1.692,1-2.746V5z M20,5v2.831c0,1.14-0.849,2.112-1.891,2.167L18,10	c-1.103,0-2-0.897-2-2V4h3C19.552,4,20,4.449,20,5z M10,4h4v4c0,1.103-0.897,2-2,2s-2-0.897-2-2V4z M4,5c0-0.551,0.448-1,1-1h3v4	c0,1.103-0.897,2-2,2L5.891,9.997C4.849,9.943,4,8.971,4,7.831V5z M10,19v-3h4v3H10z M16,19v-3c0-1.103-0.897-2-2-2h-4	c-1.103,0-2,0.897-2,2v3H5v-7.131c0.254,0.067,0.517,0.111,0.787,0.125C7.068,12.061,8.224,11.523,9,10.643	C9.733,11.475,10.807,12,12,12s2.267-0.525,3-1.357c0.776,0.88,1.934,1.419,3.213,1.351c0.271-0.014,0.533-0.058,0.787-0.125V19H16z"
      />
    </Svg>
  ),
  User: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.width || defaultProps.size}
      height={props.height || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
      />
    </Svg>
  ),
  UserEdit: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 640 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Edit: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Address: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
      />
    </Svg>
  ),
  UsersAdd: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  UsersRemove: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M888 784H664c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7zM824 484c0-109.4-87.9-198.3-196.9-200C516.3 282.3 424 373.2 424 484c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C357 754.6 326 826.8 324 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 707.7 563 684 624 684c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 598.7 658.2 612 624 612s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Bag: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fillRule="evenodd"
        d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
        clipRule="evenodd"
        stroke={props.color || defaultProps.color}
      />
      <Path
        d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Gallery: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fill="none"
        strokeWidth="2"
        d="M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97061363 L18.9998921,5.97061363 M6,8 C6.55228475,8 7,7.55228475 7,7 C7,6.44771525 6.55228475,6 6,6 C5.44771525,6 5,6.44771525 5,7 C5,7.55228475 5.44771525,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Videos: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  VideoCamera: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fillRule="evenodd"
        d="M2.667 3.5c-.645 0-1.167.522-1.167 1.167v6.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V4.667c0-.645-.522-1.167-1.167-1.167H2.667zM.5 4.667C.5 3.47 1.47 2.5 2.667 2.5h6.666c1.197 0 2.167.97 2.167 2.167v6.666c0 1.197-.97 2.167-2.167 2.167H2.667A2.167 2.167 0 01.5 11.333V4.667z"
        clipRule="evenodd"
        stroke={props.color || defaultProps.color}
      />
      <Path
        fillRule="evenodd"
        d="M11.25 5.65l2.768-1.605a.318.318 0 01.482.263v7.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V4.308c0-1.033-1.125-1.626-1.984-1.128L10.75 4.785l.502.865z"
        clipRule="evenodd"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Close: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      />
    </Svg>
  ),
  Email: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"
      />
    </Svg>
  ),
  Gender: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M352 32v35h63.1l-81.4 80.5c-7.5-7.2-13.2-11-13.2-11C302.2 123.6 280 116 256 116c-30.2 0-57.6 12-77.8 31.4l-15.2-15 31.4-31.4-28.5-28.5-31.5 31.5-37.5-37H160V32H32v128h35V91.3l40.3 39.9-31.2 31.2 28.5 28.5 31.4-31.4 19.4 19.2c-7.3 14.9-11.5 31.7-11.5 49.5 0 54.8 39.5 100.4 91.1 110.2v45.3h-63V424h63v56h42v-56h63v-40.2h-63v-45.3c50.8-9.9 91.2-55.5 91.2-110.3 0-17.7-4.2-34.8-11.5-49.6L445 91.3V160h35V32H352zm-96 258c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
      />
    </Svg>
  ),
  CaretDown: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
      />
    </Svg>
  ),
  Play: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <Path
        stroke={props.color || defaultProps.color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  ),
  GraduationCap: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"
      />
    </Svg>
  ),
  PDF: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        fill="none"
        stroke={props.color || defaultProps.color}
        stroke-width="2"
        d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"
      />
    </Svg>
  ),
  Share: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
      />
    </Svg>
  ),
  Announce: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        fill="none"
        stroke-width="2"
        d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
      />
    </Svg>
  ),
  LinkedIn: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></Path>
    </Svg>
  ),
  Facebook: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"
      />
    </Svg>
  ),
  Twitter: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"
      />
    </Svg>
  ),
  Youtube: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        stroke={props.color || defaultProps.color}
        d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
      />
    </Svg>
  ),
  Zip: (props: IconType) => (
    <Svg
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z" />
      <Path d="M6.5 8.5a1 1 0 011-1h1a1 1 0 011 1v.938l.4 1.599a1 1 0 01-.416 1.074l-.93.62a1 1 0 01-1.109 0l-.93-.62a1 1 0 01-.415-1.074l.4-1.599V8.5zm2 0h-1v.938a1 1 0 01-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 01-.03-.243V8.5z" />
      <Path d="M7.5 2H9v1H7.5zm-1 1H8v1H6.5zm1 1H9v1H7.5zm-1 1H8v1H6.5zm1 1H9v1H7.5V6z" />
    </Svg>
  ),
};

export default ICONS;
