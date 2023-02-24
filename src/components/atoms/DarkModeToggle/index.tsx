import React, { useEffect, useState } from 'react';

import * as Toggle from './index.styles';

import lightModeSunPath from '@/assets/light-mode-sun.svg';
import darkModeSunPath from '@/assets/dark-mode-sun.svg';
import lightModeMoonPath from '@/assets/light-mode-moon.svg';
import darkModeMoonPath from '@/assets/dark-mode-moon.svg';

export default function DarkModeToggle() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme === 'light') {
      window.document.body.classList.add('light');
    } else {
      window.document.body.classList.add('dark');
    }
  }, []);

  const onClickHandler = () => {
    const currentTheme = window.document.body.classList.contains('light') ? 'light' : 'dark';

    if (currentTheme === 'light') {
      window.document.body.classList.replace('light', 'dark');
      window.localStorage.setItem('theme', 'dark');
      setMode('dark');
    }

    if (currentTheme === 'dark') {
      window.document.body.classList.replace('dark', 'light');
      window.localStorage.setItem('theme', 'light');
      setMode('light');
    }
  };

  return (
    <Toggle.Wrapper mode={mode} onClick={onClickHandler}>
      <Toggle.Sun
        src={mode === 'light' ? lightModeSunPath : darkModeSunPath}
        alt="darkModeToggle SunSide"
      />
      <Toggle.Moon
        src={mode === 'light' ? lightModeMoonPath : darkModeMoonPath}
        alt="darkModeToggle MoonSide"
      />
    </Toggle.Wrapper>
  );
}
