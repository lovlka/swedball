import { useTheme } from 'next-themes';
import { Avatar, Box, DropdownMenu } from '@radix-ui/themes';

import '../styles/nav-menu.css';

export function UserMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Box>
          <Avatar size="3" radius="full" fallback="VS" ml="2" />
        </Box>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Välj tema</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.CheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>Mörkt</DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>Ljust</DropdownMenu.CheckboxItem>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">
          Logga ut
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
