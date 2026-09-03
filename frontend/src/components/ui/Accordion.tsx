import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  mode?: 'single' | 'multiple';
  defaultOpenIds?: string[];
  // Controlled props
  openIds?: string[];
  onOpenIdsChange?: (ids: string[]) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items = [],
  mode = 'single',
  defaultOpenIds = [],
  openIds: controlledOpenIds,
  onOpenIdsChange,
}) => {
  const [uncontrolledOpenIds, setUncontrolledOpenIds] = useState<string[]>(defaultOpenIds);
  
  const isControlled = controlledOpenIds !== undefined;
  const openIds = isControlled ? controlledOpenIds : uncontrolledOpenIds;

  const toggleItem = (id: string) => {
    let newOpenIds: string[];

    if (mode === 'single') {
      newOpenIds = openIds.includes(id) ? [] : [id];
    } else {
      newOpenIds = openIds.includes(id)
        ? openIds.filter((openId) => openId !== id)
        : [...openIds, id];
    }

    if (isControlled) {
      onOpenIdsChange?.(newOpenIds);
    } else {
      setUncontrolledOpenIds(newOpenIds);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      {items.map((item) => (
        <div key={item.id} className="border-b last:border-b-0">
          <button
            className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 hover:bg-gray-50"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openIds.includes(item.id)}
            aria-controls={`accordion-panel-${item.id}`}
          >
            {item.title}
            <span>{openIds.includes(item.id) ? '-' : '+'}</span>
          </button>
          {openIds.includes(item.id) && (
            <div id={`accordion-panel-${item.id}`} className="p-4 bg-gray-50 text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
