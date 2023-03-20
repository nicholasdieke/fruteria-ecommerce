import { Flex, Heading, Text, useDisclosure, useToast } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import React, { useRef, useState } from 'react';
import CartDrawer from './CartDrawer';
import CategoriesSection from './CategoriesSection';
import Footer from './Footer';
import Header from './Header';
import noResults from './noresults.json';
import Section from './Section';

const App = () => {
  const fruits = [
    new Item('Lemon', 'Fruits', '0.40', 'foods/lemons.png', '#fffdc0', ''),
    new Item('Lime', 'Fruits', '0.40', 'foods/limes.png', '#e9f4b7', ''),
    new Item('Apricot', 'Fruits', '0.50', 'foods/apricot.png', '#ffcdc0', ''),
    new Item('Mandarin', 'Fruits', '0.50', 'foods/mandarin.png', '#ffe0c0', ''),
    new Item(
      'Pomegranate',
      'Fruits',
      '2.50',
      'foods/pomegranates.png',
      '#ffbbbe',
      ''
    ),
    new Item(
      'Grapefruit',
      'Fruits',
      '0.90',
      'foods/grapefruit.png',
      'pink',
      ''
    ),
    new Item('Coconut', 'Fruits', '2.00', 'foods/coconuts.png', '#ebccb0', ''),
    new Item('Orange', 'Fruits', '0.40', 'foods/oranges.png', '#ffd498', ''),
    new Item('Avocado', 'Fruits', '1.50', 'foods/avocados.png', '#deef98', ''),
    new Item('Apple', 'Fruits', '0.60', 'foods/apple.png', '#daf3b0', ''),
    new Item(
      'Blood Orange',
      'Fruits',
      '0.90',
      'foods/blood-orange.png',
      '#feccc6',
      ''
    ),
    new Item('Grapes', 'Fruits', '2.50', 'foods/grape.png', '#c4cedf', '500g'),
    new Item('Kiwi', 'Fruits', '1.00', 'foods/kiwi.png', '#e7eeae', ''),
    new Item('Mango', 'Fruits', '2.00', 'foods/mango.png', '#ffe8a9', ''),
    new Item('Papaya', 'Fruits', '3.50', 'foods/papaya.png', '#fcceb0', ''),
    new Item(
      'Passionfruit',
      'Fruits',
      '0.80',
      'foods/passionfruit.png',
      '#f7e9bc',
      ''
    ),
    new Item(
      'Watermelon',
      'Fruits',
      '5.00',
      'foods/watermelon.png',
      '#ffd5d4',
      ''
    ),
    new Item(
      'Pineapple',
      'Fruits',
      '5.00',
      'foods/pineapple.png',
      '#fff2b0',
      ''
    ),
  ];
  const nutsSeeds = [
    new Item(
      'Almonds',
      'Nuts & Seeds',
      '3.00',
      'foods/almonds.png',
      '#ffe2c6',
      '250g'
    ),
    new Item(
      'Walnuts',
      'Nuts & Seeds',
      '4.00',
      'foods/walnut.png',
      '#ffe8bf',
      '250g'
    ),
    new Item(
      'Chia Seeds',
      'Nuts & Seeds',
      '4.50',
      'foods/chia.png',
      '#d7d1ca',
      '175g'
    ),
    new Item(
      'Coriander Seeds',
      'Nuts & Seeds',
      '1.50',
      'foods/coriander.png',
      '#e4d6b6',
      '25g'
    ),
    new Item(
      'Fennel Seeds',
      'Nuts & Seeds',
      '1.50',
      'foods/fennel.png',
      '#e9dfb2',
      '25g'
    ),
    new Item(
      'Pumpkin Seeds',
      'Nuts & Seeds',
      '2.50',
      'foods/pumpkin.png',
      '#e4d9b7',
      '175g'
    ),
    new Item(
      'Sesame Seeds',
      'Nuts & Seeds',
      '2.50',
      'foods/sesame.png',
      '#e4d9b7',
      '175g'
    ),
  ];
  const veggies = [
    new Item(
      'Lemongrass',
      'Veggies',
      '1.00',
      'foods/lemongrass.png',
      '#e2f3b8',
      '2 stems'
    ),
    new Item(
      'Broccoli',
      'Veggies',
      '1.00',
      'foods/broccoli.png',
      '#d0edaf',
      ''
    ),
    new Item(
      'Shiitake',
      'Veggies',
      '3.00',
      'foods/shiitake.png',
      '#efcdae',
      '150g'
    ),
    new Item('Ginger', 'Veggies', '0.50', 'foods/ginger.png', '#f4e7b8', ''),
    new Item(
      'Turmeric',
      'Veggies',
      '1.00',
      'foods/turmeric.png',
      '#ffd9bb',
      ''
    ),
  ];
  const herbs = [
    new Item('Basil', 'Herbs', '1.00', 'foods/basil.png', '#e1ecc1', 'Bunch'),
    new Item(
      'Oregano',
      'Herbs',
      '1.00',
      'foods/oregano.png',
      '#c8ddb1',
      'Bunch'
    ),
    new Item(
      'Bay Leaf',
      'Herbs',
      '1.00',
      'foods/bay-leaf.png',
      '#dae7c4',
      'Bunch'
    ),
    new Item('Mint', 'Herbs', '1.00', 'foods/mint.png', '#ccefb6', 'Bunch'),
    new Item('Sage', 'Herbs', '1.00', 'foods/sage.png', '#e4f0b6', 'Bunch'),
    new Item('Thyme', 'Herbs', '1.00', 'foods/thyme.png', '#d0eaba', 'Bunch'),
  ];
  const berries = [
    new Item(
      'Blueberries',
      'Berries',
      '2.00',
      'foods/blueberry.png',
      '#d2d4ff',
      '150g'
    ),
    new Item(
      'Strawberries',
      'Berries',
      '4.00',
      'foods/strawberry.png',
      '#ffadad',
      '300g'
    ),
    new Item(
      'Raspberries',
      'Berries',
      '2.20',
      'foods/raspberry.png',
      '#ffc5c5',
      '150g'
    ),
  ];
  const categories = ['Fruits', 'Veggies', 'Nuts & Seeds', 'Berries', 'Herbs'];

  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = item => {
    setCart(items => [...items, item]);
    toast({
      title: 'Item added.',
      description: "We've added 1 " + item.title.toLowerCase() + ' for you.',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'bottom-left',
    });
  };

  const removeFromCart = title => {
    const arr = [...cart];
    let index = 0;
    for (index; index < cart.length; index++) {
      if (cart[index].title === title) break;
    }

    if (index > -1) {
      arr.splice(index, 1);
    }
    setCart(arr);
    toast({
      title: 'Item removed.',
      description: "We've removed 1 " + title.toLowerCase() + ' for you.',
      status: 'info',
      duration: 2000,
      isClosable: true,
      position: 'bottom-left',
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartBtnRef = useRef();

  const filteredList = (input, list) => {
    //if no input the return the original
    if (input === '') {
      return list;
    }
    //return the item which contains the user input
    else {
      return list.filter(item => item.title.toLowerCase().includes(input));
    }
  };

  const [inputText, setInputText] = useState('');
  let inputHandler = e => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Flex
      textAlign="center"
      fontSize="xl"
      px="5rem"
      bg="#fef7e6"
      minH="100vh"
      justifyContent="space-between"
      flexDir="column"
    >
      <Flex flexDir="column">
        <Header
          cart={cart}
          cartBtnRef={cartBtnRef}
          onChange={inputHandler}
          onOpen={onOpen}
          inputText={inputText}
          setInputText={setInputText}
        ></Header>
        <CartDrawer
          cart={cart}
          isOpen={isOpen}
          onClose={onClose}
          setCart={setCart}
        />
        <Flex className="banner-img" bgImage="banner.jpg">
          <Flex className="banner">
            <Heading size="2xl" mb="0.5rem">
              La Nueva Fresita De Castelló
            </Heading>
            <Text fontSize="24px">La boutique de la fruta desde 1944</Text>
          </Flex>
        </Flex>
        <CategoriesSection items={categories} />

        <Section
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          title="Fruits"
          items={filteredList(inputText, fruits)}
          cart={cart}
        />
        <Section
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          title="Veggies"
          items={filteredList(inputText, veggies)}
          cart={cart}
        />
        <Section
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          title="Nuts & Seeds"
          items={filteredList(inputText, nutsSeeds)}
          cart={cart}
        />

        <Section
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          title="Berries"
          items={filteredList(inputText, berries)}
          cart={cart}
        />

        <Section
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          title="Herbs"
          items={filteredList(inputText, herbs)}
          cart={cart}
        />
        {filteredList(inputText, herbs).length +
          filteredList(inputText, berries).length +
          filteredList(inputText, nutsSeeds).length +
          filteredList(inputText, veggies).length +
          filteredList(inputText, fruits).length ===
          0 && (
          <Flex flexDir="column">
            <Lottie
              animationData={noResults}
              style={{
                height: '200px',
                width: '100%',
                position: 'relative',
              }}
              loop={false}
              autoplay={true}
            />
            <Text fontWeight="700" fontSize="1.3rem">
              Sorry! No results found.
            </Text>
          </Flex>
        )}
      </Flex>
      <Footer />
    </Flex>
  );
};

class Item {
  constructor(title, category, price, picture, color, info) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.info = info;
    this.picture = picture;
    this.color = color;
  }
}

export default App;
