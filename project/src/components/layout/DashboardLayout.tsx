import React from 'react';
import { Layout, Sidebar, Navigation } from '../ui';
import { useAuth } from '../../hooks/useAuth';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <Layout>
      <Sidebar>
        <Navigation role={user.role} />
      </Sidebar>
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        {children}
      </main>
    </Layout>
  );
}