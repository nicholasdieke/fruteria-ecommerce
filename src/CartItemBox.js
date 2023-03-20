import { Flex, Image, Text } from '@chakra-ui/react';
import './stylesheet.css';

function CartItemBox({ item, amount }) {
  //   const getOccurrence = item => {
  //     var count = 0;
  //     cart.forEach(i => i.title === item && count++);
  //     return count;
  //   };

  return (
    <Flex className="cart-item-box" justifyContent="space-between">
      <Flex>
        <Flex className="cart-item-img-box" bg={item.color}>
          <Image className="cart-item-img" src={item.picture}></Image>
        </Flex>
        <Flex flexDir="column">
          <Text fontWeight="700">{item.title}</Text>
          <Text>x{amount}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text fontWeight="700">€{(item.price * amount).toFixed(2)}</Text>
      </Flex>
    </Flex>
  );
}

export default CartItemBox;
