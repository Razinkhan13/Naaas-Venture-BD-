/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import Login from './components/Login';
import UserApp from './components/UserApp';
import AdminDashboard from './components/AdminDashboard';
import { AnimatePresence, motion } from 'motion/react';

type ViewState = 'login' | 'user' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('login');

  return (
    <AnimatePresence mode="wait">
      {currentView === 'login' && (
        <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
          <Login onLogin={(role) => setCurrentView(role)} />
        </motion.div>
      )}
      {currentView === 'user' && (
        <motion.div key="user" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <UserApp onLogout={() => setCurrentView('login')} />
        </motion.div>
      )}
      {currentView === 'admin' && (
        <motion.div key="admin" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <AdminDashboard />
          <button 
            onClick={() => setCurrentView('login')}
            className="fixed bottom-6 right-6 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white transition-all z-50 shadow-lg"
          >
            Exit Admin
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


