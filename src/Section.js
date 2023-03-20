import { Flex, Heading, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import Item from './Item';
import './stylesheet.css';
import { useIsOverflow } from './useIsOverflow';

function Section({ title, items, addToCart, removeFromCart, cart }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();
  const isOverflow = useIsOverflow(ref);
  return (
    <Flex
      w="100%"
      my={!!items.length ? '1rem' : '0rem'}
      flexDir="column"
      id={title}
      alignContent="flex-start"
    >
      {!!items.length && (
        <Flex alignContent={'flex-start'} flexDir="column" w="100%">
          <Flex justifyContent="space-between" alignItems="center" mb="1rem">
            <Heading size="md" textAlign="start">
              {title}
            </Heading>
            {isOverflow && (
              <Text
                cursor="pointer"
                fontSize="16px"
                color="primary"
                onClick={() => setExpanded(!expanded)}
                _hover={{ opacity: 0.75 }}
              >
                {expanded ? 'Show less' : 'View All'}
              </Text>
            )}
          </Flex>
          <Flex
            spacing="1.5rem"
            overflow="auto"
            flexWrap={expanded ? 'wrap' : 'nowrap'}
            flexDir="row"
            ref={ref}
          >
            {items
              .sort((a, b) => (a.title > b.title ? 1 : -1))
              .map(item => (
                <Item
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  cart={cart}
                  key={item.title}
                  item={item}
                />
              ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Section;
