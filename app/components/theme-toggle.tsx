'use client';

import { useTheme } from 'next-themes';
import { Switch } from '@radix-ui/themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleMode = () => setTheme(theme == 'light' ? 'dark' : 'light');

  return (
    <Switch size="3" onCheckedChange={toggleMode} />
  );
}