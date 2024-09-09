'use client';

import { Container, Flex } from '@radix-ui/themes';
import { NavMenu } from './components/nav-menu';
import { UserMenu } from './components/user-menu';

export default function Header() {
  return (
    <header>
      <Container py="2" px="3">
        <Flex align="center" justify="between">
          <NavMenu />
          <UserMenu />
        </Flex>
      </Container>
    </header>
  );
}
