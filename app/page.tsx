'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Flex, Container, Section, Card, Box } from '@radix-ui/themes';
import { fetchUser } from './actions/dummy-api';
import SearchForm from './components/search-form';
import SearchResult from './components/search-result';

export default function Home() {
  const [result, setResult] = useState<object | null>(null);

  const handleSubmit = async () => {
    const res = await fetchUser(1);
    setResult(res);
  };

  return (
    <Section>
      <Container>
        <Flex justify="center">
          <Box width="500px">
            <Card size="4">
              <Flex direction="column" gap="6">
                <Flex justify="center">
                  <Image src="/logo.png" alt="Swedball" height={100} width={65} />
                </Flex>
                <SearchForm onSubmit={handleSubmit} />
                <SearchResult result={result} />
              </Flex>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
