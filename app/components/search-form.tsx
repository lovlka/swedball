'use client';

import { Box, Flex, TextField } from '@radix-ui/themes';
import { useAppDispatch } from '@/state/hooks';
import { setResult } from '@/state/slices/search';
import { fetchUser } from '../actions/dummy-api';
import SubmitButton from './submit-button';
import { MagnifyingGlass } from './icons';

export default function SearchForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    const res = await fetchUser(1);
    dispatch(setResult(res));
  };

  return (
    <form action={handleSubmit}>
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
