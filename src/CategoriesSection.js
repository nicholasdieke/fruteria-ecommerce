import { Box, Flex, Text } from '@chakra-ui/react';
import './stylesheet.css';

function CategoriesSection({ items, onFilter, visibleCategory }) {
  return (
    <Flex w="100%" mt="1.5rem" mb="1rem" overflow="auto">
      {items.map(item => (
        <Box
          className="category-box"
          px="2rem"
          py="0.5rem"
          bg="primary"
          opacity={visibleCategory === item ? '1' : '0.4'}
          onClick={onFilter}
          id={item}
          key={item}
        >
          <Text whiteSpace="nowrap">{item}</Text>
        </Box>
      ))}
    </Flex>
  );
}

export default CategoriesSection;
