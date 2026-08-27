import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import UrlModal from '../components/UrlModal';
import CreateUrlForm from '../components/CreateUrlForm.jsx';

import { useState } from 'react';

function DashboardLayout() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-screen">

      <Nav />

      <main className="flex h-full">

        <Sidebar />

        <div className="flex-1">
          <Outlet
            context={{
              openModal: () => setIsModalOpen(true)
            }}
          />
        </div>

      </main>

      <UrlModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <CreateUrlForm />
      </UrlModal>

    </div>
  );
}

export default DashboardLayout;