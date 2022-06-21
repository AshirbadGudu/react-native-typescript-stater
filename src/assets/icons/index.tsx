import React from 'react';
import Svg, {SvgProps, Path, G, Line} from 'react-native-svg';
type IconType = SvgProps & {
  size?: number;
};

const defaultProps: IconType = {
  size: 24,
  color: '#000',
};

const ICONS = {
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
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
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
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
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
  Notification: (props: IconType) => (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <Path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
        stroke={props.color || defaultProps.color}
      />
      <Path
        d="M13.73 21a2 2 0 01-3.46 0"
        stroke={props.color || defaultProps.color}
      />
    </Svg>
  ),
  Help: (props: IconType) => (
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
        d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
      />
      <Path
        stroke={props.color || defaultProps.color}
        d="M256.7 160c37.5 0 63.3 20.8 63.3 50.7 0 19.8-9.6 33.5-28.1 44.4-17.4 10.1-23.3 17.5-23.3 30.3v7.9h-34.7l-.3-8.6c-1.7-20.6 5.5-33.4 23.6-44 16.9-10.1 24-16.5 24-28.9s-12-21.5-26.9-21.5c-15.1 0-26 9.8-26.8 24.6H192c.7-32.2 24.5-54.9 64.7-54.9zm-26.3 171.4c0-11.5 9.6-20.6 21.4-20.6 11.9 0 21.5 9 21.5 20.6s-9.6 20.6-21.5 20.6-21.4-9-21.4-20.6z"
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
  Star: (props: IconType) => (
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
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
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
  Dashboard: (props: IconType) => (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      {...props}
      color={props.color || defaultProps.color}
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
      <G>
        <Path
          stroke={props.color || defaultProps.color}
          fill="none"
          d="M0 0h24v24H0z"
        />
        <Path
          stroke={props.color || defaultProps.color}
          d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"
        />
      </G>
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
      width={props.size || defaultProps.size}
      height={props.size || defaultProps.size}>
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
};

export default ICONS;
