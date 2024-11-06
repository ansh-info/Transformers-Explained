// src/components/ui/tabs.js
import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export const Tabs = ({ defaultValue, children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className = '' }) => (
  <div className={`flex space-x-2 mb-4 ${className}`}>{children}</div>
);

export const TabsTrigger = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${
        activeTab === value 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};