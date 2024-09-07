import { Text, Flex, Box, Card, Avatar, Container, Section } from "@radix-ui/themes";
import Image from "next/image";
import Dialog from "./components/dialog";
import Alert from "./components/alert";
import ThemeToggle from "./components/theme-toggle";
import Form from "./components/form";

export default function Home() {
  return (
    <Section>
      <Container>
        <Flex justify="center" align="center">
          <Image src="/logo.png" alt="Swedball" width={100} height={150} />
        </Flex>
        <Box maxWidth="240px">
          <Card>
            <Flex gap="3" align="center">
              <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Victor Stodell
                </Text>
                <Text as="div" size="2" color="gray">
                  Developer
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Section>
          <Flex gap="5" wrap="wrap">
            <Alert />
            <Dialog />
            <ThemeToggle />
            <Form />
          </Flex>
        </Section>
      </Container>
    </Section>
  );
}
