'use client';

import { Container, Flex, Text } from '@radix-ui/themes';

export default function Footer() {
  return (
    <footer>
      <Container py="2">
        <Flex justify="center">
          <Text size="1" color="gray">
            &copy; Swedball 2024
          </Text>
        </Flex>
      </Container>
    </footer>
  );
}
