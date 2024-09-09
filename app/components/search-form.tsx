'use client';

import { Box, Flex, TextField } from '@radix-ui/themes';
import { useAppDispatch } from '@/state/hooks';
import { setResult } from '@/state/slices/search';
import { searchCompanies } from '../actions/tic-api';
import SubmitButton from './submit-button';
import { MagnifyingGlass } from './icons';

export default function SearchForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: FormData) => {
    const search = values.get('search') as string;
    const res = await searchCompanies(search);
    dispatch(setResult(res));
  };

  return (
    <form action={handleSubmit}>
      <Flex gap="4">
        <Box flexGrow="1">
          <TextField.Root name="search" placeholder="Org.nummer eller namn...">
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
