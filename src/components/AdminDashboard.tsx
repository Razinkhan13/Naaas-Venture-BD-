import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Users, Wallet, Activity, ArrowUpRight, 
  Bell, Search, LayoutDashboard, Power, Shield
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const revenueData = [
  { name: 'Q1', total: 120000 },
  { name: 'Q2', total: 180000 },
  { name: 'Q3', total: 220000 },
  { name: 'Q4', total: 350000 },
];

const sectorData = [
  { name: 'Real Estate', value: 55 },
  { name: 'Guardian', value: 15 },
  { name: 'Logistics', value: 12 },
  { name: 'Hospitality', value: 8 },
  { name: 'Tech/Medical', value: 10 },
];

const COLORS = ['#D4AF37', '#2DD4BF', '#3b82f6', '#ec4899', '#8b5cf6'];

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="min-h-screen bg-obsidian text-platinum flex overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-glass-border bg-black/40 backdrop-blur-xl hidden md:flex flex-col z-10 shadow-[5px_0_30px_rgba(0,0,0,0.5)]">
        <div className="h-20 flex items-center px-6 border-b border-glass-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 blur-[30px] rounded-full"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-bold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] text-lg italic tracking-widest">N</div>
            <h1 className="font-bold text-sm tracking-[0.2em] uppercase">Command <br/><span className="font-normal text-teal shadow-[0_0_10px_rgba(45,212,191,0.5)] bg-clip-text text-transparent bg-gradient-to-r from-teal to-blue-400">Center</span></h1>
          </div>
        </div>
        
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          <div className="text-[10px] uppercase tracking-[0.2em] text-platinum/30 mb-3 px-3 mt-4 font-bold">Core</div>
          <button onClick={() => setActiveMenu('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeMenu === 'dashboard' ? 'bg-glass border border-white/10 text-teal shadow-[0_0_20px_rgba(45,212,191,0.1)]' : 'text-platinum/50 hover:bg-white/5 hover:text-white'}`}>
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">Metrics</span>
          </button>
          <button onClick={() => setActiveMenu('users')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeMenu === 'users' ? 'bg-glass border border-white/10 text-teal shadow-[0_0_20px_rgba(45,212,191,0.1)]' : 'text-platinum/50 hover:bg-white/5 hover:text-white'}`}>
            <Users className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">Shareholders</span>
          </button>
          
          <div className="text-[10px] uppercase tracking-[0.2em] text-platinum/30 mb-3 px-3 mt-8 font-bold">Operations</div>
          <button onClick={() => setActiveMenu('partners')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeMenu === 'partners' ? 'bg-glass border border-white/10 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'text-platinum/50 hover:bg-white/5 hover:text-white'}`}>
            <Shield className="w-5 h-5" />
            <span className="font-bold text-xs uppercase tracking-widest">API Partners</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-glass-border bg-black/60">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-teal/10 border border-teal/40 flex items-center justify-center text-teal shadow-[0_0_15px_rgba(45,212,191,0.2)]">
              <span className="text-sm font-bold">SA</span>
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-wide">Super Admin</p>
              <p className="text-[9px] font-mono tracking-[0.2em] text-teal">SYS.NOMINAL</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/5 via-obsidian to-obsidian">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Header */}
        <header className="h-20 border-b border-glass-border bg-black/20 backdrop-blur-xl px-8 flex items-center justify-between shrink-0 z-10 shadow-sm">
          <div className="relative w-96 hidden md:block group">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-platinum/40 group-focus-within:text-teal transition-colors" />
            <input 
              type="text" 
              placeholder="Search investors, transactions, APIS..."
              className="w-full bg-[#0a0a0a] border border-white/5 rounded-full py-2.5 pl-12 pr-4 text-xs focus:outline-none focus:border-teal/50 text-white transition-all shadow-inner focus:shadow-[0_0_20px_rgba(45,212,191,0.1)]"
            />
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center hover:bg-white/10 relative transition-all shadow-inner bg-black/40">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2 right-2.5 w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_10px_#D4AF37] animate-pulse"></span>
            </motion.button>
            <div className="flex flex-col items-end border-l border-glass-border pl-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-platinum/70">Sylhet HQ Console</span>
              <span className="text-[9px] text-teal flex items-center gap-2 font-mono mt-1 tracking-widest">
                <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse shadow-[0_0_10px_#2DD4BF]"></span> LIVE DATA
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Views */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 z-10">
          <AnimatePresence mode="wait">
            {activeMenu === 'dashboard' && (
              <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">Ecosystem Dynamics</h2>
                
                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { title: 'Total Volume', value: '৳ 42.5M', trend: '+12.5%', color: 'from-gold/20 to-transparent', border: 'border-gold/30', text: 'text-gold' },
                    { title: 'Active Investors', value: '500+', trend: 'Max Cap', color: 'from-teal/20 to-transparent', border: 'border-teal/30', text: 'text-teal' },
                    { title: 'Transactions MTD', value: '1,248', trend: '+18.1%', color: 'from-blue-500/20 to-transparent', border: 'border-blue-500/30', text: 'text-blue-400' },
                    { title: 'System Health', value: '100%', trend: 'Optimal', color: 'from-emerald-500/20 to-transparent', border: 'border-emerald-500/30', text: 'text-emerald-400' },
                  ].map((kpi, i) => (
                    <div key={i} className={`p-6 rounded-2xl bg-gradient-to-br ${kpi.color} bg-black/40 border ${kpi.border} backdrop-blur-md relative overflow-hidden group shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all`}>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-platinum/50 mb-3">{kpi.title}</p>
                      <h3 className={`text-4xl font-bold mb-2 font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-platinum/60`}>{kpi.value}</h3>
                      <div className={`flex items-center text-xs font-bold ${kpi.text} tracking-widest uppercase mt-4`}>
                        <ArrowUpRight className="w-3 h-3 mr-1" /> {kpi.trend}
                      </div>
                      <Activity className={`absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 ${kpi.text}`} />
                    </div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 glass-panel p-6 bg-black/40 shadow-xl">
                    <div className="mb-6 flex justify-between items-center">
                      <h3 className="font-bold text-white uppercase tracking-[0.2em] text-xs">Scale Trajectory</h3>
                      <span className="text-[10px] tracking-widest text-teal border border-teal/20 px-2 py-1 rounded bg-teal/5">Q1 - Q4 OUTLOOK</span>
                    </div>
                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#2DD4BF" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="#2DD4BF" stopOpacity={0}/>
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                          <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `৳${val/1000}k`} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid rgba(45,212,191,0.3)', borderRadius: '12px', boxShadow: '0 0 20px rgba(45,212,191,0.1)' }}
                            itemStyle={{ color: '#2DD4BF', fontWeight: 'bold' }}
                          />
                          <Area type="monotone" dataKey="total" stroke="#2DD4BF" strokeWidth={4} fillOpacity={1} fill="url(#colorTotal)" style={{ filter: 'url(#glow)' }} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="glass-panel p-6 flex flex-col bg-black/40 shadow-xl">
                    <h3 className="font-bold text-white uppercase tracking-[0.2em] text-xs">Revenue Split</h3>
                    <div className="flex-1 relative mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={sectorData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={3} dataKey="value" stroke="none">
                            {sectorData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.5))' }} />)}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                        <span className="text-3xl font-bold text-white shadow-black drop-shadow-md">8</span>
                        <span className="text-[10px] text-teal tracking-widest uppercase font-bold mt-1">Wings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMenu === 'users' && (
              <motion.div key="users" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                 <h2 className="text-3xl font-bold mb-8 text-white">Shareholder Management</h2>
                 <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/5 bg-black/40">
                    <div className="p-6 border-b border-glass-border flex justify-between items-center bg-black/40">
                      <h3 className="font-bold text-xs uppercase tracking-[0.2em]">Top 500 Roster</h3>
                      <button className="text-[9px] uppercase tracking-[0.2em] font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors">
                        Export DB
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-[#050505] text-[9px] uppercase tracking-[0.2em] text-platinum/40">
                          <tr>
                            <th className="px-6 py-5 font-bold">Investor ID</th>
                            <th className="px-6 py-5 font-bold">Name</th>
                            <th className="px-6 py-5 font-bold">Tier/Shares</th>
                            <th className="px-6 py-5 font-bold">App Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            { id: 'NX-2026-001', name: 'Zaman H.', shares: '45 Units', status: 'Active App', color: 'teal' },
                            { id: 'NX-2026-042', name: 'Choudhury K.', shares: '12 Units', status: 'Pending Migration', color: 'gold' },
                            { id: 'NX-2026-108', name: 'Rahman SY.', shares: '08 Units', status: 'Active App', color: 'teal' },
                            { id: 'NX-2026-215', name: 'Ali M.', shares: '02 Units', status: 'Invite Sent', color: 'platinum' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-white/[0.04] transition-colors group cursor-pointer bg-[#0a0a0a]">
                              <td className="px-6 py-5 font-mono text-xs text-platinum/50 group-hover:text-white transition-colors">{row.id}</td>
                              <td className="px-6 py-5 font-bold text-white tracking-wide">{row.name}</td>
                              <td className="px-6 py-5 text-xs font-mono text-platinum/80">{row.shares}</td>
                              <td className="px-6 py-5">
                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest border font-bold ${
                                  row.color === 'teal' ? 'text-teal border-teal/20 bg-teal/5 shadow-[inset_0_0_10px_rgba(45,212,191,0.1)]' : 
                                  row.color === 'gold' ? 'text-gold border-gold/20 bg-gold/5 shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]' : 'text-platinum/50 border-white/10 bg-white/5'
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    row.color === 'teal' ? 'bg-teal shadow-[0_0_8px_#2DD4BF]' : 
                                    row.color === 'gold' ? 'bg-gold shadow-[0_0_8px_#D4AF37] animate-pulse' : 'bg-platinum/50'
                                  }`}></span>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeMenu === 'partners' && (
              <motion.div key="partners" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                 <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">API Bridges <span className="text-gold font-normal opacity-80 text-xl tracking-widest uppercase ml-2 block sm:inline mt-2 sm:mt-0">(MOU Partners)</span></h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Partner 1 */}
                    <motion.div whileHover={{ scale: 1.01 }} className="glass-panel p-8 flex flex-col gap-6 border-gold/20 bg-black/40 shadow-[0_15px_40px_rgba(212,175,55,0.08)] relative overflow-hidden">
                       <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 blur-[30px] rounded-full pointer-events-none"></div>
                       <div className="flex justify-between items-start relative z-10">
                         <div>
                           <h3 className="text-2xl font-bold text-white">BD Tickets</h3>
                           <p className="text-[10px] tracking-[0.2em] uppercase text-platinum/40 mt-2">Logistics Wing Integration</p>
                         </div>
                         {/* Toggle Switch */}
                         <div className="w-14 h-7 rounded-full bg-teal flex items-center px-1 cursor-pointer shadow-[0_0_25px_rgba(45,212,191,0.4)] border border-teal-300">
                           <div className="w-5 h-5 bg-navy rounded-full ml-auto shadow-md"></div>
                         </div>
                       </div>
                       
                       <div className="bg-[#050505] rounded-xl p-5 border border-white/5 font-mono text-xs text-platinum/50 shadow-inner relative z-10">
                         <div className="flex justify-between mb-3 border-b border-white/5 pb-2"><span>Latency:</span> <span className="text-teal font-bold tracking-widest text-shadow drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]">42ms</span></div>
                         <div className="flex justify-between mb-3 border-b border-white/5 pb-2"><span>24h Calls:</span> <span className="text-white">1,204</span></div>
                         <div className="flex justify-between items-center pt-1">
                           <span>Status:</span> 
                           <span className="text-teal border border-teal/40 px-3 py-1 rounded bg-teal/10 text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse shadow-[0_0_8px_#2DD4BF]"></div>
                             Live Routing
                           </span>
                          </div>
                       </div>
                    </motion.div>

                    {/* Partner 2 */}
                    <motion.div whileHover={{ scale: 1.01 }} className="glass-panel p-8 flex flex-col gap-6 border-red-500/20 bg-black/40 shadow-[0_15px_40px_rgba(239,68,68,0.05)] relative overflow-hidden">
                       <div className="flex justify-between items-start relative z-10">
                         <div>
                           <h3 className="text-2xl font-bold text-white">GoJayam</h3>
                           <p className="text-[10px] tracking-[0.2em] uppercase text-platinum/40 mt-2">Hospitality Wing Integration</p>
                         </div>
                         {/* Toggle Switch Offline */}
                         <div className="w-14 h-7 rounded-full bg-black/60 border border-white/10 flex items-center px-1 cursor-pointer">
                           <div className="w-5 h-5 bg-platinum/30 rounded-full mr-auto shadow-sm"></div>
                         </div>
                       </div>
                       
                       <div className="bg-[#050505] rounded-xl p-5 border border-white/5 font-mono text-xs text-platinum/50 opacity-60 shadow-inner relative z-10">
                         <div className="flex justify-between mb-3 border-b border-white/5 pb-2"><span>Latency:</span> <span>---</span></div>
                         <div className="flex justify-between mb-3 border-b border-white/5 pb-2"><span>24h Calls:</span> <span>0</span></div>
                         <div className="flex justify-between items-center pt-1">
                           <span>Status:</span> 
                           <span className="text-red-400 border border-red-400/30 px-3 py-1 rounded bg-red-400/5 text-[9px] tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                             <div className="w-1 h-1 rounded-full bg-red-500"></div>
                             Maintenance Offline
                           </span>
                         </div>
                       </div>
                    </motion.div>
                 </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
