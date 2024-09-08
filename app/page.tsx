"use client";

import Image from "next/image";
import { useState } from "react";
import { Flex, Container, Section, Card, Box } from "@radix-ui/themes";
import Form from "./components/search-form";
import { fetchUser } from "./actions/dummy-api";
import ResultTable from "./components/result";

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
                <Form onSubmit={handleSubmit} />
                <ResultTable result={result} />
              </Flex>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
