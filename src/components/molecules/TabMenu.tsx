"use client";

interface TabMenuProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

const TabMenu = ({ tabs, activeTab, onChange, className = "" }: TabMenuProps) => {
  return (
    <div className={`flex gap-4 mb-12 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            font-quicksand relative px-6 py-3 font-bold text-lg transition-all duration-300
            ${
              activeTab === tab
                ? "text-[#F2F2F2]"
                : "text-[#BFBFBF] hover:text-[#F2F2F2]"
            }
          `}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] transition-all duration-300"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;
