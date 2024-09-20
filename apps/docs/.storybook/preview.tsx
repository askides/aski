import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';

import '../styles.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        document.body.classList.add('antialiased');
      }, []);

      return <Story />;
    },
  ],
};

export default preview;
