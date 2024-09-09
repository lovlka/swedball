import { Flex, Container, Section, Card, Box, Heading, Text } from '@radix-ui/themes';

export default function Home() {
  return (
    <Section>
      <Container>
        <Flex justify="center">
          <Box width="500px" px="3">
            <Card size="4">
              <Heading mb="4">Om tjänsten</Heading>
              <Text>
                Swedball är en tjänst som hjälper dig hitta företag i Sverige.

                Innehållet bygger på data som hämtas från The Intelligent Company.
              </Text>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
