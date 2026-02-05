"use client";

import { useRef, useEffect, useState } from "react";

interface TabMenuProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

const TabMenu = ({ tabs, activeTab, onChange, className = "" }: TabMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeEl = tabRefs.current[activeIndex];
    const container = containerRef.current;
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div ref={containerRef} className={`relative flex gap-4 mb-12 ${className}`}>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          ref={(el) => { tabRefs.current[index] = el; }}
          onClick={() => onChange(tab)}
          className={`
            font-quicksand relative px-6 py-3 font-bold text-lg transition-colors duration-300
            ${
              activeTab === tab
                ? "text-[#F2F2F2]"
                : "text-[#BFBFBF] hover:text-[#F2F2F2]"
            }
          `}
        >
          {tab}
        </button>
      ))}
      <span
        className="absolute bottom-0 h-[3px] bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] transition-all duration-400 ease-in-out"
        style={{
          left: indicator.left,
          width: indicator.width,
        }}
      />
    </div>
  );
};

export default TabMenu;
