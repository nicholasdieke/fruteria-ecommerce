import { Box, HStack, Text } from '@chakra-ui/react';
import './stylesheet.css';

function CategoriesSection({ items }) {
  return (
    <HStack spacing="1rem" w="100%" mt="1.5rem" mb="2rem">
      {items.map(item => (
        <a href={'#' + item} key={'section-' + item}>
          <Box
            w="200px"
            px="2rem"
            py="0.5rem"
            bg="primary"
            color="white"
            fontWeight="600"
            borderRadius="500px"
            _hover={{ bg: '#fa7b64' }}
          >
            <Text>{item}</Text>
          </Box>
        </a>
      ))}
    </HStack>
  );
}

export default CategoriesSection;
