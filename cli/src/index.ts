#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const program = new Command();

// Component templates
type ComponentKeys = 'button' | 'card' | 'pricing';

const components: Record<ComponentKeys, string> = {
  button: `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-green-500 text-white hover:bg-green-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100",
        link: "text-green-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}`,
  card: `import * as React from "react"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={\`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 \${
      className ?? ""
    }\`}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={\`flex flex-col space-y-1.5 p-6 \${className ?? ""}\`}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={\`text-2xl font-semibold leading-none tracking-tight \${
      className ?? ""
    }\`}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={\`text-sm text-gray-500 dark:text-gray-400 \${className ?? ""}\`}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={\`p-6 pt-0 \${className ?? ""}\`} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={\`flex items-center p-6 pt-0 \${className ?? ""}\`}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,

  pricing: `import * as React from "react"
import { Button } from "./button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"

export interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features,
  popular = false 
}: PricingCardProps) {
  return (
    <Card className={\`relative \${
      popular ? 'border-green-500 bg-green-500/10' : ''
    }\`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-baseline mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">/month</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  )
}`,
};

const defaultConfig = {
  style: 'new-york',
  baseColor: 'zinc',
  cssVariables: true,
  typescript: true,
  tailwind: true,
  components: [],
  componentsDir: './src/components/ui',
};

program
  .name('ui-playground')
  .description('CLI to create and manage UI Playground components')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize UI Playground in your project')
  .option('-d, --defaults', 'Use default configuration')
  .action(async (options) => {
    let config = { ...defaultConfig };

    if (!options.defaults) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'style',
          message: 'Which style would you like to use?',
          choices: ['New York', 'Default'],
          default: 'New York',
        },
        {
          type: 'list',
          name: 'baseColor',
          message: 'Which color would you like to use as base color?',
          choices: ['Zinc', 'Slate', 'Stone', 'Gray', 'Neutral'],
          default: 'Zinc',
        },
        {
          type: 'confirm',
          name: 'cssVariables',
          message: 'Do you want to use CSS variables for colors?',
          default: true,
        },
      ]);

      config = {
        ...config,
        style: answers.style.toLowerCase(),
        baseColor: answers.baseColor.toLowerCase(),
        cssVariables: answers.cssVariables,
      };
    }

    const spinner = ora('Initializing UI Playground...').start();

    try {
      // Create components directory
      const componentsDir = path.join(process.cwd(), config.componentsDir);
      if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true });
      }

      // Save configuration
      fs.writeFileSync(
        path.join(process.cwd(), 'components.json'),
        JSON.stringify(config, null, 2)
      );

      // Install dependencies
      execSync('npm install class-variance-authority clsx tailwind-merge', {
        stdio: 'inherit',
      });

      spinner.succeed('UI Playground initialized successfully!');
      console.log('\n' + chalk.green('Next steps:'));
      console.log(chalk.white('  1. Start adding components:'));
      console.log(chalk.white('     npx ui-playground add button'));
      
    } catch (error) {
      spinner.fail('Failed to initialize UI Playground');
      console.error(error);
      process.exit(1);
    }
  });

program
  .command('add <component>')
  .description('Add a component to your project')
  .action(async (componentName) => {
    // Check if components.json exists
    if (!fs.existsSync(path.join(process.cwd(), 'components.json'))) {
      console.error(chalk.red('Error: components.json not found. Run "npx ui-playground init" first.'));
      process.exit(1);
    }

    // Check if component exists
    if (!(componentName in components)) {
      console.error(chalk.red(`Error: Component "${componentName}" not found.`));
      console.log(chalk.white('\nAvailable components:'));
      console.log(chalk.white(Object.keys(components).join(', ')));
      process.exit(1);
    }

    const spinner = ora(`Adding ${componentName} component...`).start();

    try {
      const config = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'components.json'), 'utf-8')
      );

      // Create component file
      const componentPath = path.join(process.cwd(), config.componentsDir, `${componentName}.tsx`);
      fs.writeFileSync(componentPath, components[componentName as ComponentKeys]);

      // Update components.json
      config.components.push(componentName);
      fs.writeFileSync(
        path.join(process.cwd(), 'components.json'),
        JSON.stringify(config, null, 2)
      );

      spinner.succeed(`Added ${componentName} component successfully!`);
      console.log('\n' + chalk.green('Import component:'));
      console.log(chalk.white(`import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from "${config.componentsDir}/${componentName}"`));
      
    } catch (error) {
      spinner.fail(`Failed to add ${componentName} component`);
      console.error(error);
      process.exit(1);
    }
  });

program.parse();
