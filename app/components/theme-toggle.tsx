'use client';

import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@radix-ui/themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleMode = () => setTheme(theme == 'light' ? 'dark' : 'light');

  const defaultChecked = useMemo(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      && (theme == 'dark' || theme == 'system');
  }, [theme]);

  return (
    <Switch size="2" defaultChecked={defaultChecked} onCheckedChange={toggleMode} />
  );
}