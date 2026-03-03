import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Receipt,
  ClipboardList,
  ChevronLeft,
} from 'lucide-react';
import logo from '../../assets/logo.svg';

const navItems = [
  { label: 'Tableau de bord', href: '/documents', icon: LayoutDashboard },
  { label: 'Devis',            href: '/documents/quotation',  icon: FileText },
  { label: 'Factures',         href: '/documents/invoice',    icon: Receipt },
  { label: 'Bons de Commande', href: '/documents/purchase',   icon: ClipboardList },
];

const DocumentSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-white border-r border-gray-100 flex flex-col z-40">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="MAGENOR" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.href ||
            (item.href !== '/documents' && location.pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold
                transition-all duration-200
                ${isActive
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }
              `}
            >
              <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Back to site */}
      <div className="px-3 pb-6">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[12px] font-semibold text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all duration-200"
        >
          <ChevronLeft size={16} />
          <span>Retour au site</span>
        </Link>
      </div>
    </aside>
  );
};

export default DocumentSidebar;
