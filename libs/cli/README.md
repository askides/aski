# CLI

## Introduction

The CLI is a command line interface that allows you to interact with the Elements UI. It allows you to effortlessly add new components to your apps.

> This CLI is still in early development, it may not work as expected. Please report any issues you encounter.

## Installation

To use the CLI, run the following command:

```bash
npx @askides/cli init
```

This will install the CLI and create a new `.askides.json` file in your project root next to your `package.json` file.

This file is used to store the configuration for the CLI. You can modify it to suit your needs.

## Usage

To add a new component to your app, run the following command:

```bash
npx @askides/cli add <component-name>
```

This command will do the following:

1. Will look for the existence of the selected component in the elements repository.
2. Will download the component and install its dependencies (if any).
3. Will place the component in the selected directory (from the `.askides.json` file).
