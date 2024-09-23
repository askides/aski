# Elements

Elements aim to be an easy-to-use collection of UI components for building web apps.

The idea behind Elements is to provide a set of components that are easy to use and customize. The components should be simple to understand and use, and should be easy to style and extend.

## Disclaimer

This package is an `always-work-in-progress`, as it's used for my personal projects, so it will be improved and updated from time to time.

## Components Demo

There's a demo available for the components in the Storybook, which you can run locally, or access online at [https://elements.askides.com](https://elements.askides.com).

## Installation and Usage

To use Elements into your project, you need these dependencies:

- [TailwindCSS](https://tailwindcss.com/)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- An Icon Library (i recommend [Lucide](https://lucide.dev/) - Optional

> Note, all the components are build with the out-of-the-box TailwindCSS classes, there's nothing custom in the components.

### Option 1: Using the CLI

That's the fastest way to get started with Elements. The CLI will help you to add the components to your project effortlessly.

1. Inside an existing project, run the following command:

```bash
npx @askides/cli init
```

2. The CLI will create a `.askides.json` file in the root of your project. This file will contain the configuration for the components you will add.

3. Run the following command to add the desired element to your project:

```bash
npx @askides/cli add Button
```

4. The CLI will take care of adding the component to your project and install the necessary dependencies.

### Option 2: Copying the Components

If you prefer to copy the components manually, you can do so by simply browsing the `libs/elements` folder and copying the desired component to your project.

## How Are The Components Structured?

All the components are in their specific directory and all the files are named in a way that you can easily understand what they do, let's take the `Button` component as an example:

```
Button.tsx -> Used to define the component.
Button.styles.tsx -> Used to style the component.
Button.dependencies.json -> Used to list the dependencies needed for the component.
index.ts -> Used to export the component.
```

For complex components the dot notation is used to separate the different parts of the component, check the `Card` component for an example.

## How To Contribute?

If you want to contribute to Elements, you can do so by creating a PR with your changes. Currently the project is in its early stages, so any suggestion is welcome.
