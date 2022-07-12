import React, { FC } from 'react';
import { Text } from 'react-native';

interface LabelProps {
  title: string
}

const Label: FC<LabelProps> = ({ title }) => {
  return (
    <Text>
      {title}
    </Text>
  );
};

export default Label;
