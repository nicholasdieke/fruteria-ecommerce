import { Flex, HStack, Text } from '@chakra-ui/react';
import './stylesheet.css';

function Footer() {
  //   const router = useRouter();

  return (
    <Flex
      justifyContent="space-between"
      pb="3rem"
      pt="1.5rem"
      alignItems="center"
      bg="inherit"
      fontSize="16px"
    >
      <Text>2023 © La Nueva Fresita De Castelló</Text>
      <HStack>{/* <FontAwesomeIcon icon={faTowerObservation} /> */}</HStack>
    </Flex>
  );
}

export default Footer;
