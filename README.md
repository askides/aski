# Aski

Suite of Copy & Paste TailwindCSS + React Components to build web apps effortlessly.

[![Aski](./assets/welcome.jpg)](https://elements.askides.com)

## Table of Contents

- [Installation](#installation)
- [Elements](#elements)
- [Demo](#demo)
- [Motivation](#motivation)
- [Contributing](#contributing)

## Installation

Here's the quickest way to get started with Aski.

### Install TailwindCSS

You need to have TailwindCSS installed in your project. Follow the [official documentation](https://tailwindcss.com/docs/installation) to get started.

### Initialize the CLI

```bash
npx @askides/cli init
```

This will install the CLI and create a new `.askides.json` file in your project root next to your `package.json` file.

### Add an Element

```bash
npx @askides/cli add elements <element-name>
```

This command will add the desired element to your project and install the necessary dependencies for it.

## Elements

You can see all the available Element in the [Storybook](https://elements.askides.com/). All the elements present on the Storybook can be added to your project.

```bash
npx @askides/cli add elements Button
```

### Examples

There's also a special section called `Examples`, where you can find UIs built using the Elements. You can install them as well using the CLI:

```bash
npx @askides/cli add examples <example-name>
```

## Demo

Here's how starting a new project with Aski looks like:

https://github.com/user-attachments/assets/38f2041b-e02b-4fc3-b6b0-c35c89a1dfae

## Motivation

I've been using Shadcn's UI for a while now, and I love the simplicity and ease of use it provides.

This is my attempt to create a similar collection of components as a learning experience and with some personal touch.

## Contributing

Right now, Aski is in its early stages, and I'm still figuring out how to structure the components and the CLI. If you have any suggestions or want to contribute, feel free to open an issue or a PR.
