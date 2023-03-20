import { Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import {
  faMinus,
  faPlus,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesheet.css';

const Item = ({ item, addToCart, removeFromCart, cart }) => {
  const getOccurrence = item => {
    var count = 0;
    cart.forEach(i => i.title === item && count++);
    return count;
  };

  return (
    <Flex className="item-box" bg={item.color} justifyContent="space-between">
      <Flex w="100%" flexDir="column" alignItems="center">
        <Text className="item-text">{item.title}</Text>
        <Image className="item-img" src={item.picture}></Image>
      </Flex>
      {!!item.category && (
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <HStack spacing="0.3rem">
            <Text fontWeight="800">€{item.price}</Text>
            <Text fontSize="16px">{item.info}</Text>
          </HStack>
          {!cart.some(cartItem => cartItem.title === item.title) && (
            <IconButton
              onClick={() => addToCart(item)}
              variant="primary"
              icon={<FontAwesomeIcon icon={faShoppingBasket} />}
            ></IconButton>
          )}
          {cart.some(cartItem => cartItem.title === item.title) && (
            <Flex>
              <IconButton
                size="sm"
                variant="primary"
                icon={<FontAwesomeIcon icon={faMinus} />}
                onClick={() => removeFromCart(item.title)}
              />
              <Text fontWeight="600" mx="0.5rem">
                {getOccurrence(item.title)}
              </Text>
              <IconButton
                variant="primary"
                isDisabled={getOccurrence(item.title) >= 10}
                size="sm"
                icon={<FontAwesomeIcon icon={faPlus} />}
                onClick={() => addToCart(item)}
              />
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Item;
