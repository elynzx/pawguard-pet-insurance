import { PawPrintIcon, UserIcon, LayoutIcon, LockIcon } from "@phosphor-icons/react";

type TabId = 'dashboard' | 'profile' | 'pets' | 'security';

const TABS_CONFIG: TabConfig[] = [
  { id: 'dashboard', label: 'Panel General', icon: <LayoutIcon weight="fill" size={20} /> },
  { id: 'profile', label: 'Mi Perfil', icon: <UserIcon weight="fill" size={20} /> },
  { id: 'pets', label: 'Mis Mascotas', icon: <PawPrintIcon weight="fill" size={20} /> },
  { id: 'security', label: 'Seguridad', icon: <LockIcon weight="fill" size={20} /> },
];

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

interface TabItemProps {
  tab: TabConfig;
  isActive: boolean;
  onClick: () => void;
}

const TabItem = ({ tab, isActive, onClick }: TabItemProps) => {
  const activeStyles = isActive
    ? "text-primary border-secondary"
    : "text-primary/30 hover:text-primary border-transparent";

  return (
    <button
      onClick={onClick}
      className={`pb-4 px-1 md:px-2 flex md:font-bold items-center gap-2 text-xs md:text-sm transition-all cursor-pointer relative shrink-0 ${activeStyles}`}
    >
      {tab.icon}
      <span>{tab.label}</span>
      {isActive && <ActiveIndicator />}
    </button>
  );
};

const ActiveIndicator = () => (
  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-t-full" />
);

export const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  return (
    <nav className="flex gap-4 md:gap-8 border-b border-gray-100 overflow-x-auto scrollbar-hide no-scrollbar">
      {TABS_CONFIG.map((tab) => (
        <TabItem
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        />
      ))}
    </nav>
  );
};
