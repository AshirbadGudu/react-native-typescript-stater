import {Pressable, Row, Spinner, Text} from 'native-base';
import React from 'react';
import AppIcon, {IconProps} from './AppIcon';

type RowProps = React.ComponentProps<typeof Row>;
type TextProps = React.ComponentProps<typeof Text>;

type ButtonProps = {
  children: JSX.Element | string;
  isLoading?: boolean;
  isDisabled?: boolean;
  colors?: Array<string>;
  icon?: IconProps;
  iconSide?: 'LEFT' | 'RIGHT';
  onPress?: () => void;
  _text?: TextProps;
} & RowProps;

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  isDisabled = false,
  colors = ['primary.500', 'primary.600'],
  icon,
  onPress,
  _text,
  iconSide = 'LEFT',
  ..._row
}) => {
  const renderIcon = () => {
    if (isLoading) {
      return <Spinner color={'white'} />;
    }
    if (icon) {
      return <AppIcon color={'#fff'} size={20} {...icon} />;
    }
    return null;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled || isLoading}
      _pressed={{opacity: 0.6}}
      _disabled={{opacity: 0.6}}
      bg="transparent"
      rounded="md">
      <Row
        rounded="md"
        py="2"
        px="4"
        bg={{linearGradient: {start: [0, 0], end: [1, 0], colors}}}
        space="1"
        alignItems="center"
        justifyContent={'center'}
        {..._row}>
        {iconSide === 'LEFT' && renderIcon()}
        {typeof children === 'string' ? (
          <Text color="white" fontWeight="600" {..._text}>
            {children}
          </Text>
        ) : (
          children
        )}
        {iconSide === 'RIGHT' && renderIcon()}
      </Row>
    </Pressable>
  );
};

export default Button;
