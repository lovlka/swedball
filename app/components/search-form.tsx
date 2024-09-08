"use client";

import { Box, Flex, TextField } from "@radix-ui/themes";
import SubmitButton from "./submit-button";
import { MagnifyingGlass } from "./icons";

export default function SearchForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <form action={onSubmit}>
      <Flex gap="4">
        <Box flexGrow="1">
          <TextField.Root placeholder="Org.nummer eller namn...">
            <TextField.Slot>
              <MagnifyingGlass />
            </TextField.Slot>
          </TextField.Root>
        </Box>
        <SubmitButton>Sök företag</SubmitButton>
      </Flex>
    </form>
  );
}
