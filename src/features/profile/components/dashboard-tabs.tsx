import { PawPrintIcon, UserIcon, LayoutIcon, LockIcon } from "@phosphor-icons/react";

type TabId = 'dashboard' | 'profile' | 'pets' | 'security';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TABS_CONFIG: TabConfig[] = [
  { id: 'dashboard', label: 'Panel General', icon: <LayoutIcon weight="fill" size={20} /> },
  { id: 'profile', label: 'Mi Perfil', icon: <UserIcon weight="fill" size={20} /> },
  { id: 'pets', label: 'Mis Mascotas', icon: <PawPrintIcon weight="fill" size={20} /> },
  { id: 'security', label: 'Seguridad', icon: <LockIcon weight="fill" size={20} /> },

];

export const DashboardTabs = ({ activeTab, setActiveTab }: DashboardTabsProps) => {
  return (
    <nav className="flex gap-8 border-b border-gray-200">
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

const TabItem = ({ tab, isActive, onClick }: { tab: TabConfig, isActive: boolean, onClick: () => void }) => {
  const activeStyles = isActive ? "text-primary" : "text-primary/50 hover:text-primary";

  return (
    <button
      onClick={onClick}
      className={`pb-4 px-2 flex items-center gap-2 font-bold transition-all cursor-pointer relative ${activeStyles}`}
    >
      {tab.icon}
      <span>{tab.label}</span>

      {isActive && <ActiveIndicator />}
    </button>
  );
};

const ActiveIndicator = () => (
  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />
);
