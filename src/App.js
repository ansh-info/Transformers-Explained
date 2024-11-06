import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Timeline } from './components/sections/Timeline';
import { ArchitectureComparison } from './components/sections/ArchitectureComparison';
import { WhyTransformers } from './components/sections/WhyTransformers';
import { ArchitectureAnimation } from './components/visualizations/ArchitectureAnimation';
import { AttentionVisualizer } from './components/visualizations/AttentionVisualizer';
import { PerformanceChart } from './components/visualizations/PerformanceChart';

const App = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-white text-center">
            Understanding Transformers
          </CardTitle>
          <p className="text-white text-center">
            The Architecture that Revolutionized AI
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="architecture" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="attention">Self-Attention</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="why">Why Transformers?</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture">
          <Card>
            <CardHeader>
              <CardTitle>Transformer Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <ArchitectureAnimation />
              <div className="mt-6">
                <ArchitectureComparison />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attention">
          <Card>
            <CardHeader>
              <CardTitle>Self-Attention Mechanism</CardTitle>
            </CardHeader>
            <CardContent>
              <AttentionVisualizer />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="why">
          <Card>
            <CardHeader>
              <CardTitle>Why We Needed Transformers</CardTitle>
            </CardHeader>
            <CardContent>
              <WhyTransformers />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;