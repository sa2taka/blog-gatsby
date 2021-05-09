import { useColorMode, Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';

export const DarkThemeSwitch: React.VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label="Dark/Light Switch">
      <Button variant="ghost" onClick={toggleColorMode}>
        <i
          aria-hidden="true"
          className={
            colorMode === 'dark' ? 'icon icon-moon-o' : 'icon icon-sun-o'
          }
          style={{
            fontSize: '1.5em',
          }}
        ></i>
      </Button>
    </Tooltip>
  );
};
