import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import {
  faCircleXmark,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesheet.css';

const Header = ({
  cart,
  onChange,
  cartBtnRef,
  onOpen,
  inputText,
  setInputText,
}) => {
  return (
    <Flex
      justifyContent="space-between"
      pb="1rem"
      pt="1.5rem"
      alignItems="center"
      pos="sticky"
      top="0px"
      zIndex="1"
      bg="#fef7e6"
    >
      {/* onClick={() => router.push('/')} */}
      <Text
        className="logo-text"
        fontSize={{ base: '14px', md: '20px' }}
        textAlign="left"
      >
        La Nueva Fresita De Castelló
      </Text>
      <HStack spacing={{ base: '0.5rem', md: '1rem' }}>
        <InputGroup w={{ base: '150px', md: '200px' }}>
          <InputLeftElement
            pointerEvents="none"
            children={<FontAwesomeIcon icon={faSearch} />}
          />
          <Input
            value={inputText}
            placeholder="Search..."
            onChange={onChange}
            id="searchbar"
          />
          {inputText.length !== 0 && (
            <InputRightElement
              // pointerEvents="none"
              children={
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => {
                    setInputText('');
                  }}
                  style={{ cursor: 'pointer' }}
                />
              }
            />
          )}
        </InputGroup>

        <Flex
          bg="primary"
          h="2.5rem"
          w={{ base: '3.5rem', md: '5rem' }}
          borderRadius="0.375rem"
          alignItems="center"
          justifyContent="center"
          px="0.75rem"
          cursor="pointer"
          ref={cartBtnRef}
          onClick={onOpen}
          color="white"
          _hover={{ bg: '#fa7b64' }}
        >
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          <Text ml="0.5rem" fontSize="16px" fontWeight="700">
            {cart.length}
          </Text>
        </Flex>
        {/* </Box> */}

        {/* <Button variant="outline">Log In</Button>
        <Button variant="outline">Sign Up</Button> */}
      </HStack>
    </Flex>
  );
};

export default Header;
