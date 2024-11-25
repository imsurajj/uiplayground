# UI Playground CLI

A CLI tool for adding beautiful, accessible UI components to your Next.js projects.

## Installation

```bash
npm install -g @ui-playground/cli
```

## Usage

### Initialize in your project

Run the init command to set up UI Playground in your Next.js project:

```bash
npx @ui-playground/cli init
```

You can use the `-d` flag for defaults (New York style, Zinc color, and CSS variables enabled):

```bash
npx @ui-playground/cli init -d
```

### Configure components.json

When running the init command, you'll be asked a few questions to configure `components.json`:

```bash
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › yes/no
```

### Adding Components

Once initialized, you can start adding components to your project:

```bash
npx @ui-playground/cli add button
```

Then import the component in your code:

```tsx
import { Button } from "@/components/ui/button"
```

## Available Components

- Button (with variants: default, secondary, outline, destructive, ghost, link)
- Card (with header, content, footer, and description sections)
- Pricing Card (with features list and popular badge)

## Features

- 🎨 Beautiful, modern components
- 🌙 Dark mode support
- 🎯 Fully typed with TypeScript
- 📦 Easy to customize
- 🚀 Quick setup
- 💨 Powered by Tailwind CSS

## License

MIT
