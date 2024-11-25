'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const previewCode = `'use client';

export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  popular = false 
}: PricingCardProps) {
  return (
    <div className={\`relative p-6 rounded-xl border \${
      popular 
        ? 'border-green-500 bg-green-500/10' 
        : 'border-gray-200 dark:border-gray-800'
    } space-y-4\`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-400 ml-2">/month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="text-green-500 w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

const usageCode = `import { PricingCard } from '@/components/PricingCard';

export function MyComponent() {
  return (
    <PricingCard
      name="Professional"
      price="$79"
      description="Best for growing businesses"
      features={[
        "Unlimited Team Members",
        "100GB Storage",
        "Advanced Analytics",
        "Priority Support"
      ]}
      popular={true}
    />
  );
}`;

export default function PricingDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Pricing Card</h1>
        <p className="mt-4 text-lg text-gray-400">
          A versatile pricing card component for displaying pricing plans and features.
        </p>
      </div>

      <Tabs defaultValue="preview" className="relative">
        <TabsList className="w-full justify-start rounded-none border-b border-gray-800 bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-gray-400 hover:text-gray-300 data-[state=active]:border-b-green-500 data-[state=active]:text-green-500"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-gray-400 hover:text-gray-300 data-[state=active]:border-b-green-500 data-[state=active]:text-green-500"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="rounded-md border border-gray-800 p-6">
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {/* Example pricing card here */}
              <div className="relative p-6 rounded-xl border border-green-500 bg-green-500/10 space-y-4">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Professional</h3>
                  <p className="text-gray-400">Best for growing businesses</p>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">$79</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
                    </svg>
                    <span>Unlimited Team Members</span>
                  </li>
                  {/* Add more features */}
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="space-y-4">
          <div className="rounded-md bg-gray-900 p-6">
            <pre className="text-sm text-gray-300">
              <code>{previewCode}</code>
            </pre>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Usage</h3>
            <div className="rounded-md bg-gray-900 p-6">
              <pre className="text-sm text-gray-300">
                <code>{usageCode}</code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-2 px-4 text-left font-medium text-gray-400">Prop</th>
                <th className="py-2 px-4 text-left font-medium text-gray-400">Type</th>
                <th className="py-2 px-4 text-left font-medium text-gray-400">Default</th>
                <th className="py-2 px-4 text-left font-medium text-gray-400">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="py-2 px-4 text-white">name</td>
                <td className="py-2 px-4 text-green-500">string</td>
                <td className="py-2 px-4 text-gray-400">-</td>
                <td className="py-2 px-4 text-gray-400">The name of the pricing plan</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-white">price</td>
                <td className="py-2 px-4 text-green-500">string</td>
                <td className="py-2 px-4 text-gray-400">-</td>
                <td className="py-2 px-4 text-gray-400">The price of the plan</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-white">description</td>
                <td className="py-2 px-4 text-green-500">string</td>
                <td className="py-2 px-4 text-gray-400">-</td>
                <td className="py-2 px-4 text-gray-400">A brief description of the plan</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-white">features</td>
                <td className="py-2 px-4 text-green-500">string[]</td>
                <td className="py-2 px-4 text-gray-400">[]</td>
                <td className="py-2 px-4 text-gray-400">Array of features included in the plan</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-white">popular</td>
                <td className="py-2 px-4 text-green-500">boolean</td>
                <td className="py-2 px-4 text-gray-400">false</td>
                <td className="py-2 px-4 text-gray-400">Whether to show the popular badge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
