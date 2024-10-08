'use client';

import { useState } from 'react';
import { ExclamationTriangleIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Box, Flex, TextField } from '@radix-ui/themes';
import { useAppDispatch } from '@/state/hooks';
import { setResult } from '@/state/slices/search';
import { searchCompanies } from '../actions/tic-api';
import SubmitButton from './submit-button';
import Callout from './callout';

export default function SearchForm() {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: FormData) => {
    try {
      setError(null);
      const search = values.get('search') as string;
      const res = await searchCompanies(search);
      dispatch(setResult(res));
    } catch (error) {
      setError(error instanceof Error
        ? `Fel vid sökning: ${error.message}`
        : 'Ett okänt fel uppstod');
    }
  };

  return (
    <form action={handleSubmit}>
      <Flex gap="4">
        <Box flexGrow="1">
          <TextField.Root name="search" placeholder="Namn eller org.nummer">
            <TextField.Slot>
              <MagnifyingGlassIcon />
            </TextField.Slot>
          </TextField.Root>
        </Box>
        <SubmitButton>Sök företag</SubmitButton>
      </Flex>
      {error && (
        <Box mt="4">
          <Callout icon={<ExclamationTriangleIcon />} text={error} />
        </Box>
      )}
    </form>
  );
}
