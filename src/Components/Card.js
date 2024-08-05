import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const Card = ({ title, description }) => (
  <Box p={4} bg="white" borderRadius="md" shadow="md">
    <Heading size="md" mb={2}>{title}</Heading>
    <Text>{description}</Text>
  </Box>
);

export default Card;
