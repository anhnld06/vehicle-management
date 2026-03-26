'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme as antdTheme } from 'antd';
import jaJP from 'antd/locale/ja_JP';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'vehicle-mgmt-theme';

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useAppTheme must be used within AntdProvider');
  }
  return ctx;
}

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>('light');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === 'dark' || stored === 'light') {
      setModeState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = mode === 'dark' ? 'dark' : 'light';
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const ctxValue = useMemo(() => ({ mode, setMode }), [mode, setMode]);

  const configTheme = useMemo(
    () => ({
      algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    }),
    [mode],
  );

  return (
    <AntdRegistry>
      <ThemeContext.Provider value={ctxValue}>
        <ConfigProvider locale={jaJP} theme={configTheme}>
          {children}
        </ConfigProvider>
      </ThemeContext.Provider>
    </AntdRegistry>
  );
}
