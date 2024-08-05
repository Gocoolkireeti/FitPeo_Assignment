import React from 'react';
import { Box, Heading, SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import Card from './Card';

const MainContent = () => (
  <Box p={4}>
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {/* 1st Div: Dashboard */}
      <GridItem>
        <Heading size="lg" mb={4}>Dashboard</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
          <Card title="Total Delivered" description="Value 1" />
          <Card title="Total Ordered" description="Value 2" />
          <Card title="Total Cancelled" description="Value 3" />
          <Card title="Total Revenue" description="Value 4" />
        </SimpleGrid>
      </GridItem>

      {/* 2nd Div: Netprofit */}
      <GridItem>
        <Heading size="lg" mb={4}>Netprofit</Heading>
        <Box p={4} bg="gray.100" borderRadius="md">Some random value</Box>
      </GridItem>

      {/* 3rd Div: Activity */}
      <GridItem>
        <Heading size="lg" mb={4}>Activity</Heading>
        <Box p={4} bg="gray.100" borderRadius="md">Graph statistics</Box>
      </GridItem>

      {/* 4th Div: Goals, Popular Dishes, Menu */}
      <GridItem>
        <Heading size="lg" mb={4}>Goals, Popular Dishes, Menu</Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Card title="Goals" description="Description for Goals" />
          <Card title="Popular Dishes" description="Description for Popular Dishes" />
          <Card title="Menu" description="Description for Menu" />
        </SimpleGrid>
      </GridItem>

      {/* 5th Div: Recent Orders */}
      <GridItem>
        <Heading size="lg" mb={4}>Recent Orders</Heading>
        <Box p={4} bg="gray.100" borderRadius="md">Recent Order details</Box>
      </GridItem>

      {/* 6th Div: Customers Feedback */}
      <GridItem>
        <Heading size="lg" mb={4}>Customers Feedback</Heading>
        <Box p={4} bg="gray.100" borderRadius="md">Some feedbacks</Box>
      </GridItem>
    </Grid>
  </Box>
);

export default MainContent;
