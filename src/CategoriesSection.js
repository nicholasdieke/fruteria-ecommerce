import { Box, Flex, Text } from '@chakra-ui/react';
import './stylesheet.css';

function CategoriesSection({ items }) {
  return (
    <Flex w="100%" mt="1.5rem" mb="1rem" overflow="auto">
      {items.map(item => (
        <a href={'#' + item} key={'section-' + item}>
          <Box
            w="190px"
            px="2rem"
            py="0.5rem"
            bg="primary"
            color="white"
            fontWeight="600"
            borderRadius="500px"
            _hover={{ bg: '#fa7b64' }}
            mr="0.75rem"
          >
            <Text>{item}</Text>
          </Box>
        </a>
      ))}
    </Flex>
  );
}

export default CategoriesSection;
