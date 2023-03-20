import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'lottie-react';
import { useState } from 'react';
import CartItemBox from './CartItemBox';
import CostInfo from './CostInfo';
import empty_lottie from './empty.json';
import './stylesheet.css';
import success_lottie from './success-lottie.json';

const CartDrawer = ({ cart, isOpen, onClose, setCart }) => {
  let countedCart = {};
  let subtotal = 0;
  let discount = 0;
  let total = subtotal - discount;

  const [discountCode, setDiscountCode] = useState('');
  const [showDiscountMessage, setShowDiscountMessage] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  cart.forEach(item => {
    if (countedCart[item.title]) {
      countedCart[item.title][1]++;
    } else {
      countedCart[item.title] = [item, 1];
    }
  });

  if (Object.keys(countedCart).length !== 0) {
    Object.keys(countedCart).forEach(
      title => (subtotal += countedCart[title][1] * countedCart[title][0].price)
    );
  }

  total = subtotal - discount;

  const handlePayment = () => {
    setShowPayment(true);
    countedCart = {};
    setCart([]);
  };

  return (
    <Drawer
      size="sm"
      isOpen={isOpen}
      placement="right"
      onClose={() => {
        setShowPayment(false);
        onClose();
      }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Order</DrawerHeader>
        <DrawerBody>
          {!cart.length && !showPayment && (
            <Flex
              alignItems="center"
              justifyContent="center"
              height="100%"
              flexDir="column"
            >
              <Lottie
                animationData={empty_lottie}
                style={{
                  height: '200px',
                  width: '100%',
                  position: 'relative',
                }}
                loop={true}
                autoplay={true}
              />
              <Text mt="1rem" fontSize="1.2rem">
                Your cart is empty.
              </Text>
            </Flex>
          )}
          {!!cart.length &&
            !showPayment &&
            Object.keys(countedCart).length !== 0 &&
            Object.keys(countedCart).map(title => (
              <CartItemBox
                key={'cartItemBox-' + title}
                item={countedCart[title][0]}
                amount={countedCart[title][1]}
              />
            ))}

          {showPayment && (
            <Flex
              flexDir="column"
              textAlign="center"
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Lottie
                animationData={success_lottie}
                style={{
                  height: '200px',
                  width: '100%',
                  position: 'relative',
                }}
                loop={false}
                autoplay={true}
              />
              <Text fontWeight="700" fontSize="1.3rem">
                Don't worry! This one's on the house.
              </Text>
              <Text>Come by anytime to pick up your order.</Text>
            </Flex>
          )}
        </DrawerBody>
        <DrawerFooter>
          {!!cart.length && !showPayment && (
            <Flex flexDir="column" w="100%">
              <InputGroup mb="1rem">
                <InputLeftElement
                  pointerEvents="none"
                  children={<FontAwesomeIcon icon={faPercent} />}
                />
                <Input
                  placeholder="Add discount code"
                  value={discountCode}
                  onChange={e => setDiscountCode(e.target.value)}
                />
                <InputRightElement
                  w="25%"
                  //   pointerEvents="none"
                  children={
                    <Button
                      w="100%"
                      borderColor="primary"
                      onClick={() => {
                        setDiscountCode('');
                        setShowDiscountMessage(true);
                      }}
                      isDisabled={discountCode.length === 0}
                    >
                      Apply
                    </Button>
                  }
                />
              </InputGroup>
              {showDiscountMessage && (
                <Text color="red" mb="1rem">
                  Discount code not valid.
                </Text>
              )}

              <CostInfo title="Subtotal" amount={subtotal.toFixed(2)} />
              <CostInfo
                title="Discount"
                amount={discount.toFixed(2)}
                isDiscount
              />
              <Divider my="0.5rem" />
              <CostInfo title="Grand total" amount={total.toFixed(2)} isTotal />
              <Button variant="primary" mt="1rem" onClick={handlePayment}>
                Continue to payment
              </Button>
            </Flex>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
