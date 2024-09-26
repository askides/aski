# Elements

This is the place where all the components are stored. You can find all the components in the `src` directory. Each component has its own directory and all the files are named in a way that you can easily understand what they do.

## Installation & Usage

Please refer to the main [README](https://github.com/askides/aski) for the installation instructions.

## What's The Structure Of Elements?

All the components are in their specific directory and all the files are named in a way that you can easily understand what they do, let's take the `Button` component as an example:

```
Button.tsx -> Used to define the component.
Button.styles.tsx -> Used to style the component.
Button.dependencies.json -> Used to list the dependencies needed for the component.
index.ts -> Used to export the component.
```

For complex components the dot notation is used to separate the different parts of the component, check the `Card` component for an example.
