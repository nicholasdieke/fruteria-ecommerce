import { Flex, Text } from '@chakra-ui/react';
import './stylesheet.css';

const CostInfo = ({ title, amount, isDiscount = false, isTotal = false }) => {
  return (
    <Flex justifyContent="space-between">
      <Text
        color={isTotal ? 'black' : 'gray.500'}
        fontWeight={isTotal ? '700' : '400'}
      >
        {title}
      </Text>
      <Text fontWeight="700">
        {isDiscount ? '-' : ''}€{amount}
      </Text>
    </Flex>
  );
};

export default CostInfo;
