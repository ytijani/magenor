import React from 'react';
import DocumentSidebar from './DocumentSidebar';

interface DocumentLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const DocumentLayout: React.FC<DocumentLayoutProps> = ({
  children,
  title,
  subtitle,
  actions,
}) => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <DocumentSidebar />

      {/* Main content area */}
      <div className="ml-[260px]">
        {/* Top header bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="flex items-center justify-between px-8 py-5">
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight font-display">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[13px] text-gray-400 mt-0.5 font-medium">
                  {subtitle}
                </p>
              )}
            </div>
            {actions && (
              <div className="flex items-center gap-3">{actions}</div>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default DocumentLayout;
