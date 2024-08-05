import React from 'react';
import { Box, Heading, Flex, IconButton, Avatar } from '@chakra-ui/react';
import { MdMail, MdSettings, MdNotifications } from 'react-icons/md';

const Header = () => (
  <Box bg="teal.500" p={4} color="white" width="100%">
    <Flex justify="space-between" align="center">
      <Heading as="h1" size="lg">FitPeo Assignment</Heading>
      <Flex align="center">
        <IconButton
          aria-label="Mail"
          icon={<MdMail />}
          variant="ghost"
          color="white"
          _hover={{ bg: 'teal.600' }}
          mr={2}
        />
        <IconButton
          aria-label="Notifications"
          icon={<MdNotifications />}
          variant="ghost"
          color="white"
          _hover={{ bg: 'teal.600' }}
          mr={2}
        />
        <IconButton
          aria-label="Settings"
          icon={<MdSettings />}
          variant="ghost"
          color="white"
          _hover={{ bg: 'teal.600' }}
          mr={2}
        />
        <Avatar size="sm" name="Profile" src="https://via.placeholder.com/150" />
      </Flex>
    </Flex>
  </Box>
);

export default Header;
