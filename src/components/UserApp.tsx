import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, ShieldCheck, Plane, CalendarDays, 
  Stethoscope, Leaf, Briefcase, Zap,
  ChevronRight, QrCode, ChevronLeft, User, ArrowDownToLine, Download, LayoutDashboard, Receipt
} from 'lucide-react';

const WINGS = [
  { id: 1, name: 'Real Estate', icon: Building2, desc: 'Shareholder portal & properties', highlighted: true, status: 'Online' },
  { id: 2, name: 'Guardian', icon: ShieldCheck, desc: 'Legal & asset protection', status: 'Online' },
  { id: 3, name: 'Logistics', icon: Plane, desc: 'Global flight & travel bookings', status: 'Busy' },
  { id: 4, name: 'Events', icon: CalendarDays, desc: 'High-end corporate & social', status: 'Online' },
  { id: 5, name: 'Medical', icon: Stethoscope, desc: 'Emergency & health tech', status: 'Online' },
  { id: 6, name: 'AgriFood', icon: Leaf, desc: 'Organic supply & smart farming', status: 'Offline' },
  { id: 7, name: 'Hospitality', icon: Briefcase, desc: 'B2B trading & luxury stays', status: 'Online' },
  { id: 8, name: 'Daily Life', icon: Zap, desc: 'Utility, grocery & concierge', status: 'Online' },
];

export default function UserApp({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'home' | 'qr' | 'wing'>('home');
  const [selectedWing, setSelectedWing] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Online': return 'bg-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]';
      case 'Busy': return 'bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]';
      case 'Offline': return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]';
      default: return 'bg-platinum/50';
    }
  };

  return (
    <div className="min-h-screen bg-obsidian pb-24 md:pb-0 relative text-platinum">
      {/* Dynamic Header */}
      <header className="px-6 py-5 flex items-center justify-between sticky top-0 bg-surface/80 backdrop-blur-xl z-40 border-b border-glass-border">
        {activeTab !== 'home' ? (
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.9 }}
             onClick={() => { setActiveTab('home'); setSelectedWing(null); }}
             className="w-10 h-10 rounded-full flex items-center justify-center border border-glass-border hover:bg-glass transition-colors"
           >
             <ChevronLeft className="w-5 h-5 text-platinum" />
           </motion.button>
        ) : (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={onLogout}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-glass-border hover:bg-glass transition-colors bg-glass shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
            title="Log out"
          >
            <User className="w-5 h-5 text-platinum" />
          </motion.button>
        )}
        
        <h1 className="font-bold text-lg tracking-[0.1em] uppercase">
          {activeTab === 'home' && 'Ecosystem'}
          {activeTab === 'qr' && <span className="text-gold">Platinum Access</span>}
          {activeTab === 'wing' && WINGS.find(w => w.id === selectedWing)?.name}
        </h1>
        
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gold/30 bg-black overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <span className="text-xs font-bold text-gold italic">JD</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto relative md:pt-8 pt-4 px-4 overflow-hidden min-h-[calc(100vh-140px)]">
        <AnimatePresence mode="popLayout">
          
          {/* HOME TAB */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 px-2 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-teal uppercase tracking-widest mb-1">Portfolio Valuation</p>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-platinum/60">
                    ৳ 4.85M <span className="text-sm font-normal text-teal shadow-[0_0_10px_#2DD4BF]">↑ 12%</span>
                  </h2>
                </div>
              </div>

              {/* Anchor Wing Highlight (Real Estate) */}
              <motion.div 
                layoutId="wing-card-1"
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setSelectedWing(1); setActiveTab('wing'); }}
                className="relative overflow-hidden glass-panel p-6 mb-8 cursor-pointer group shadow-2xl"
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full transition-transform duration-700 group-hover:scale-[2]"></div>
                
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <motion.div layoutId="wing-icon-1" className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/30 text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Building2 className="w-6 h-6" />
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest text-teal font-semibold">Engine Active</span>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <motion.h3 layoutId="wing-title-1" className="text-2xl font-bold mb-2 text-white">Real Estate Hub</motion.h3>
                  <p className="text-sm text-platinum/50 mb-4">You have 2 active projects in Sylhet. View construction progress and yields.</p>
                  <div className="flex items-center text-xs text-gold font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    Deploy Engine <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Spokes Grid */}
              <div className="mb-6">
                <h4 className="text-[10px] uppercase tracking-widest text-platinum/50 mb-4 px-2">Ecosystem Modules</h4>
                <div className="grid grid-cols-2 gap-3">
                  {WINGS.filter(w => !w.highlighted).map((wing, i) => (
                    <motion.div 
                      key={wing.id}
                      layoutId={`wing-card-${wing.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { setSelectedWing(wing.id); setActiveTab('wing'); }}
                      className="glass-panel p-4 flex flex-col cursor-pointer relative shadow-lg"
                      style={{ perspective: 1000 }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <motion.div layoutId={`wing-icon-${wing.id}`}>
                          <wing.icon className={`w-5 h-5 ${wing.status === 'Online' ? 'text-teal' : wing.status === 'Busy' ? 'text-gold' : 'text-platinum/40'}`} />
                        </motion.div>
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(wing.status)}`}></span>
                      </div>
                      <motion.h5 layoutId={`wing-title-${wing.id}`} className="font-bold text-sm mb-1 text-white">{wing.name}</motion.h5>
                      <p className="text-[10px] text-platinum/50 leading-tight">{wing.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* FLIP QR CARD TAB */}
          {activeTab === 'qr' && (
            <motion.div
              key="qr"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="px-2 pt-6 pb-12 h-full flex flex-col items-center"
              style={{ perspective: 1000 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gold to-white">Global Access</h2>
                <p className="text-xs text-platinum/60">Tap card to flip</p>
              </div>

              <motion.div 
                className="w-full max-w-[320px] aspect-[9/14] relative cursor-pointer group"
                onClick={() => setIsFlipped(!isFlipped)}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 rounded-[2rem] bg-[#111] border border-gold/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-[#111] to-black opacity-80 pointer-events-none"></div>
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/[0.02] rounded-full blur-[60px] group-hover:bg-white/[0.04] transition-colors"></div>
                  
                  <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-gold/5 rounded-xl flex items-center justify-center border border-gold/40 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)] text-gold text-xl font-bold italic">N</div>
                      <span className="text-[10px] tracking-[0.2em] text-black px-3 py-1.5 bg-gradient-to-r from-gold to-yellow-600 rounded uppercase font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">Platinum</span>
                    </div>

                    <div>
                      <div className="text-[9px] text-platinum/40 uppercase tracking-[0.3em] mb-2">Member / Sovereign</div>
                      <div className="font-mono text-xl tracking-[0.1em] text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-platinum/50">NX-2026-8043</div>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="w-10 h-6 rounded bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gradient-to-r from-gold to-yellow-600 shadow-sm border border-yellow-400/50"></div>
                        <span className="text-[10px] text-platinum/40 font-mono tracking-widest">VALID THRU 12/28</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card (QR) */}
                <div 
                  className="absolute inset-0 rounded-[2rem] bg-[#111] border border-gold/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center p-8"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal/10 via-[#111] to-black opacity-80 pointer-events-none"></div>

                  <div className="bg-white p-3 rounded-2xl mb-8 shadow-[0_0_40px_rgba(255,255,255,0.1)] relative z-10 transition-transform hover:scale-105 duration-500">
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                      className="absolute left-0 w-full h-[2px] bg-gold shadow-[0_0_15px_#D4AF37] z-10"
                    />
                    <QrCode className="w-44 h-44 text-black border-4 border-white" strokeWidth={1} />
                  </div>
                  
                  <div className="text-center w-full z-10">
                    <div className="text-[10px] text-platinum/40 uppercase tracking-[0.2em] mb-1">Reward Balance</div>
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-500">42,500 <span className="text-sm font-normal text-platinum/30">pts</span></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* EXPANDED WING DETAILS */}
          {activeTab === 'wing' && selectedWing && (
            <motion.div
              layoutId={`wing-card-${selectedWing}`}
              className="px-4 py-6 bg-surface border border-glass-border rounded-3xl min-h-[500px] shadow-2xl relative overflow-hidden"
            >
              {(() => {
                const wing = WINGS.find(w => w.id === selectedWing);
                if (!wing) return null;
                const Icon = wing.icon;
                
                return (
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div layoutId={`wing-icon-${wing.id}`} className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center border border-teal/30 text-teal shadow-[0_0_20px_rgba(45,212,191,0.15)]">
                        <Icon className="w-8 h-8" />
                      </motion.div>
                      <div>
                        <motion.h2 layoutId={`wing-title-${wing.id}`} className="text-2xl font-bold text-white tracking-tight">{wing.name}</motion.h2>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className={`w-2 h-2 rounded-full ${getStatusColor(wing.status)}`}></span>
                          <span className="text-[10px] text-platinum/50 uppercase tracking-widest font-bold">{wing.status}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-platinum/60 mb-8 leading-relaxed font-light">
                      {wing.desc}. Priority concierge routing enabled based on your Platinum status. Deep integration active.
                    </p>

                    {/* Specific UI for Real Estate Engine */}
                    {wing.id === 1 && (
                      <div className="space-y-6">
                        <div className="glass-panel p-6 relative overflow-hidden bg-black/40 border-gold/10">
                          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 blur-[40px] rounded-full pointer-events-none"></div>
                          <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><div className="w-1 h-3 bg-gold rounded"></div>Sylhet Heights (Block A)</h3>
                          
                          <div className="w-full h-36 bg-[#0a0a0a] rounded-xl mb-6 border border-white/5 flex items-center justify-center relative overflow-hidden group shadow-inner">
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541881430806-696dbf205f01?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-all duration-700 group-hover:scale-105"></div>
                             <div className="z-10 flex flex-col items-center">
                               <CameraIcon />
                               <span className="text-[10px] bg-black/80 px-3 py-1 rounded backdrop-blur border border-white/10 tracking-widest uppercase mt-3 shadow-lg">Live Cam: Site 01</span>
                             </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                              <p className="text-[9px] text-platinum/40 uppercase tracking-[0.1em] mb-1">Current Valuation</p>
                              <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-white">৳ 2.4M</p>
                            </div>
                            <div>
                              <p className="text-[9px] text-platinum/40 uppercase tracking-[0.1em] mb-1 text-right">Completion Phase</p>
                              <div className="w-full bg-[#111] h-2 rounded-full mt-2 shadow-inner overflow-hidden border border-white/5">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: '65%' }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="bg-gradient-to-r from-teal to-blue-500 h-full rounded-full shadow-[0_0_10px_#2DD4BF]" 
                                />
                              </div>
                              <p className="text-[10px] text-right mt-1.5 font-mono text-teal">65%</p>
                            </div>
                          </div>

                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-white text-black hover:bg-platinum hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] rounded-xl flex justify-center items-center gap-2 text-xs font-bold transition-all"
                          >
                            <Download className="w-4 h-4" /> Export Shareholdings
                          </motion.button>
                        </div>
                      </div>
                    )}

                    {/* Logistics / Daily Life Ticket Mock */}
                    {(wing.id === 3 || wing.id === 8) && (
                      <div className="space-y-4">
                        <div className="glass-panel p-6 bg-black/40 border-teal/10 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 blur-[40px] pointer-events-none"></div>
                           <h3 className="text-[10px] font-bold text-teal uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><div className="w-1 h-3 bg-teal rounded"></div>Active Booking</h3>
                           
                           <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                             <div>
                               <div className="text-2xl font-bold font-mono">DAC</div>
                               <div className="text-[9px] text-platinum/40 uppercase tracking-widest mt-1">Dhaka</div>
                             </div>
                             <div className="flex flex-col items-center">
                               <Plane className="w-5 h-5 text-teal" />
                               <div className="text-[8px] text-teal mt-1 tracking-widest border border-teal/30 px-2 py-0.5 rounded uppercase">Business</div>
                             </div>
                             <div className="text-right">
                               <div className="text-2xl font-bold font-mono">DXB</div>
                               <div className="text-[9px] text-platinum/40 uppercase tracking-widest mt-1">Dubai</div>
                             </div>
                           </div>
                           
                           <div className="flex justify-between items-center">
                             <div>
                               <div className="text-[9px] text-platinum/40 uppercase tracking-widest">Departure</div>
                               <div className="text-sm font-bold mt-0.5">Aug 24, 10:45 AM</div>
                             </div>
                             <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center">
                               <QrCode className="w-4 h-4 text-platinum/50" />
                             </div>
                           </div>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 bg-white/5 hover:bg-white/10 border border-glass-border rounded-xl flex justify-center items-center gap-2 text-xs font-bold transition-all text-white"
                        >
                           <Zap className="w-4 h-4 text-teal" /> VIP Concierge Support
                        </motion.button>
                      </div>
                    )}

                    {/* Generic View for Others */}
                    {[2, 4, 5, 6, 7].includes(wing.id) && (
                      <div className="space-y-3">
                         <motion.div 
                           whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.05)' }}
                           whileTap={{ scale: 0.99 }}
                           className="glass-panel p-5 flex items-center justify-between cursor-pointer border border-white/5"
                         >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Receipt className="w-5 h-5 text-gold" />
                              </div>
                              <div>
                                <div className="font-bold text-sm mb-1 text-white">Create Request</div>
                                <div className="text-[9px] text-platinum/40 uppercase tracking-[0.2em]">Connect to concierge</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-platinum/30" />
                         </motion.div>
                         <motion.div 
                           whileHover={{ scale: 1.01 }}
                           className="glass-panel p-5 flex items-center justify-between cursor-pointer opacity-50 bg-black/40"
                         >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/5">
                                <CalendarDays className="w-4 h-4 text-platinum/50" />
                              </div>
                              <div>
                                <div className="font-bold text-sm mb-1 text-white">Past History</div>
                                <div className="text-[9px] text-platinum/40 uppercase tracking-[0.2em]">No recent activity</div>
                              </div>
                            </div>
                         </motion.div>
                      </div>
                    )}
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-2xl border-t border-glass-border z-40 pb-safe pt-2">
        <div className="max-w-md mx-auto flex justify-between items-center px-16 py-4">
          <button 
            onClick={() => { setActiveTab('home'); setSelectedWing(null); }}
            className={`flex flex-col items-center gap-2 transition-colors ${activeTab === 'home' || activeTab === 'wing' ? 'text-teal' : 'text-platinum/40 hover:text-white'}`}
          >
            <motion.div 
              whileTap={{ scale: 0.8 }}
              className={`p-2 rounded-xl ${activeTab === 'home' || activeTab === 'wing' ? 'bg-teal/10 shadow-[0_0_15px_rgba(45,212,191,0.2)] border border-teal/20' : ''}`}
            >
              <LayoutDashboard className="w-5 h-5" />
            </motion.div>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Hub</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('qr')}
            className={`flex flex-col items-center gap-2 transition-colors ${activeTab === 'qr' ? 'text-gold' : 'text-platinum/40 hover:text-white'}`}
          >
            <motion.div 
              whileTap={{ scale: 0.8 }}
              className={`p-2 rounded-xl ${activeTab === 'qr' ? 'bg-gold/10 shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-gold/20' : ''}`}
            >
              <QrCode className="w-5 h-5" />
            </motion.div>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">ID Pass</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 w-8 h-8">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);
