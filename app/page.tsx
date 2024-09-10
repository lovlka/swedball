'use client';

import Image from 'next/image';
import { Flex, Container, Section, Card, Box } from '@radix-ui/themes';
import SearchForm from './components/search-form';
import SearchResult from './components/search-result';

export default function Home() {
  return (
    <Section>
      <Container>
        <Flex justify="center">
          <Box width="600px" px="3">
            <Card size="4">
              <Flex direction="column" gap="6">
                <Flex justify="center">
                  <Image src="/logo.png" alt="Swedball" height={100} width={65} />
                </Flex>
                <SearchForm />
                <SearchResult />
              </Flex>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
