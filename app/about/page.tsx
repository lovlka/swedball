import { Flex, Container, Section, Card, Box, Heading, Text, Link } from '@radix-ui/themes';

export default function Home() {
  return (
    <Section>
      <Container>
        <Flex justify="center">
          <Box width="700px" px="3">
            <Card size="4">
            <Heading mb="4">Om tjänsten</Heading>
              <Text as="p" mb="3">
                Swedball är en tjänst som hjälper dig hitta och utforska företag i Sverige. Vår plattform erbjuder omfattande information om svenska företag, inklusive ekonomiska data, branschklassificeringar och kontaktuppgifter.
              </Text>
              <Text as="p" mb="3">
                Vårt innehåll bygger på data som hämtas från <Link href="https://www.tic.io">The Intelligence Company (TIC)</Link>, en ledande leverantör av företagsinformation. TIC samlar in, bearbetar och uppdaterar kontinuerligt data från olika officiella källor, inklusive Bolagsverket, Skatteverket och andra myndigheter.
              </Text>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
