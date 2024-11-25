import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 relative">
      {/* Background Effects */}
      <BackgroundBeams />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Component Showcase
          </h1>
          <div className="w-[40rem] h-[20rem] relative">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>

        <Tabs defaultValue="shadcn" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="shadcn" className="text-white">Shadcn UI</TabsTrigger>
            <TabsTrigger value="aceternity" className="text-white">Aceternity UI</TabsTrigger>
            <TabsTrigger value="magic" className="text-white">Magic UI</TabsTrigger>
          </TabsList>

          <TabsContent value="shadcn" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-4">Basic Form Elements</h3>
                <div className="space-y-4">
                  <Input placeholder="Enter your name" className="bg-gray-700" />
                  <Button variant="default">Submit</Button>
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-4">Interactive Elements</h3>
                <div className="space-y-4">
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="aceternity" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-4">3D Effects</h3>
                <div className="h-64 relative overflow-hidden rounded-lg">
                  {/* Add Aceternity 3D components here */}
                </div>
              </Card>

              <Card className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-4">Animated Cards</h3>
                <div className="space-y-4">
                  {/* Add Aceternity animated cards here */}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="magic" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-4">Magic Effects</h3>
                <div className="space-y-4">
                  {/* Add Magic UI effects here */}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
