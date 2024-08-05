import React from 'react';
import { Box, List, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import { MdHome, MdAccountBalanceWallet, MdList, MdWork, MdExitToApp, MdNote, MdShowChart } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

const Sidebar = () => (
  <Box
    as="nav"
    position="sticky"
    top="0"
    left="0"
    h="100vh"
    w={{ base: '100%', md: '250px' }}
    bg="gray.100"
    p={4}
  >
    <Flex direction="column" justifyContent="space-between" h="100%">
      <Box>
        <Flex align="center" mb={6}>
          <FaReact size="2em" color="teal.500" />
          <Box ml={2} fontWeight="bold" fontSize="xl">FitPeo</Box>
        </Flex>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdHome} color="teal.500" />
            Home
          </ListItem>
          <ListItem>
            <ListIcon as={MdAccountBalanceWallet} color="teal.500" />
            Wallet
          </ListItem>
          <ListItem>
            <ListIcon as={MdList} color="teal.500" />
            To-do List
          </ListItem>
          <ListItem>
            <ListIcon as={MdWork} color="teal.500" />
            Bag
          </ListItem>
          <ListItem>
            <ListIcon as={MdNote} color="teal.500" />
            Notes
          </ListItem>
          <ListItem>
            <ListIcon as={MdShowChart} color="teal.500" />
            Statistics
          </ListItem>
        </List>
      </Box>
      <Box>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdExitToApp} color="teal.500" />
            Logout
          </ListItem>
        </List>
      </Box>
    </Flex>
  </Box>
);

export default Sidebar;
