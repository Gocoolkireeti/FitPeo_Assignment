import React from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Flex flex="1" overflow="hidden">
          <Sidebar />
          <Box flex="1" overflowY="auto">
            <MainContent />
            <Footer />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
