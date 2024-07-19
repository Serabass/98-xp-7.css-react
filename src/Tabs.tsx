import { useState } from "react";

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return <div>
    <menu role="tablist">
      {tabs.map((tab, index) => (
        <li role="tab" aria-selected={index === activeTab} key={index}>
          <a href="#tabs" onClick={() => setActiveTab(index)}>
            {tab.title}
          </a>
        </li>
      ))}
    </menu>
    {tabs[activeTab].content}
  </div>;
}
