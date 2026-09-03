import React, { createContext, useContext, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Context
type TabsContextType = {
  value: string;
  onValueChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tabs components must be used within Tabs');
  return context;
}

// Components
interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, value, onValueChange, children }) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '');
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('flex border-b border-gray-200', className)}>{children}</div>
);

export const TabsTrigger: React.FC<{ value: string; disabled?: boolean; children: React.ReactNode }> = ({ value, disabled, children }) => {
  const { value: selectedValue, onValueChange } = useTabsContext();
  const isSelected = selectedValue === value;

  return (
    <button
      className={cn(
        'px-4 py-2 text-sm font-medium border-b-2 -mb-px',
        isSelected ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      onClick={() => onValueChange(value)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => {
  const { value: selectedValue } = useTabsContext();
  return selectedValue === value ? <div className="p-4">{children}</div> : null;
};
