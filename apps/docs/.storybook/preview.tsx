import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { FileQuestion, X } from 'lucide-react';
import { Button, Card } from '@askides/elements';
import * as Popover from '@radix-ui/react-popover';

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
    (Story, { parameters, viewMode }) => {
      useEffect(() => {
        document.body.classList.add('antialiased');
      }, []);

      // Check if the current view is 'docs'
      if (viewMode === 'docs') {
        return <Story />;
      }

      const fileName = parameters.fileName.split('/').pop().split('.').shift();
      const chunkName = parameters.fileName
        .replace('./stories/', '')
        .split('/')
        .shift();

      return (
        <div className="relative">
          <Story />

          <div
            className="fixed p-4"
            style={{
              bottom: 0,
              right: 0,
            }}
          >
            <Popover.Root>
              <Popover.Trigger asChild>
                <Button art="shi">
                  How To Install
                  <FileQuestion size={16} />
                </Button>
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content asChild sideOffset={16} align="end" side="top">
                  <Card
                    className="p-4 relative"
                    style={{
                      boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Card.Header className="space-y-0">
                      <Card.Title>Install Instructions</Card.Title>
                      <Card.Description>
                        How to install this component in your project.
                      </Card.Description>
                    </Card.Header>
                    <Card.Body>
                      <pre className="text-xs font-mono bg-zinc-100 p-4 rounded-md">
                        <code>
                          npx @askides/cli add {chunkName} {fileName}
                        </code>
                      </pre>
                    </Card.Body>

                    <Popover.Close asChild>
                      <Button
                        art="san"
                        mass="xs"
                        icon
                        style={{
                          position: 'absolute',
                          top: 4,
                          right: 4,
                          padding: 0,
                          height: 24,
                          width: 24,
                          marginTop: 6,
                          marginRight: 6,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <X size={16} />
                      </Button>
                    </Popover.Close>
                  </Card>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
      );
    },
  ],
};

export default preview;
