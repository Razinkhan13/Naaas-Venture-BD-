import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Fingerprint, ArrowRight, ShieldCheck, Phone, LayoutDashboard } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'user' | 'admin') => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length > 8) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }

    // Auto-submit if all filled
    if (index === 3 && value && newOtp.every(v => v !== '')) {
      verifyOtp();
    }
  };

  const verifyOtp = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      onLogin('user');
    }, 1500);
  };

  const handleBiometric = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      onLogin('user');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-6 relative overflow-hidden bg-hero-gradient">
      {/* Brand Heritage Video-like Background Placeholder */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 40%, rgba(45,212,191,0.05) 80%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm relative z-10"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
            className="w-16 h-16 rounded-2xl bg-surface border border-gold/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent"></div>
            <ShieldCheck className="w-8 h-8 text-gold relative z-10" />
          </motion.div>
          <h2 className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-3">Priority Access</h2>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-platinum">
            NAAAS <br/><span className="font-light text-platinum/50">Ecosystem</span>
          </h1>
        </div>

        <div className="glass-panel p-8 mb-8 relative overflow-hidden shadow-2xl shadow-obsidian/50">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          
          {isAuthenticating && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-surface/90 backdrop-blur-xl z-20 flex flex-col items-center justify-center rounded-2xl"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Fingerprint className="w-14 h-14 text-gold mb-4" strokeWidth={1} />
              </motion.div>
              <p className="text-[10px] font-bold text-platinum tracking-[0.2em] uppercase">Verifying Identity</p>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {step === 'phone' ? (
              <motion.form 
                key="phone"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                onSubmit={handlePhoneSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.2em] text-platinum/40 mb-3 pl-1">Shareholder ID / Phone</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="w-4 h-4 text-platinum/30 group-focus-within:text-gold transition-colors" />
                    </div>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white placeholder-platinum/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all text-sm font-medium shadow-inner"
                      placeholder="+880 1700-000000"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{ transition: 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    className="flex-1 py-4 bg-white text-obsidian font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all text-sm"
                  >
                    Authenticate
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBiometric}
                    className="w-14 rounded-xl flex items-center justify-center border bg-black border-gold/20 text-gold hover:bg-gold/10 transition-all shadow-inner"
                  >
                    <Fingerprint className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 text-center py-2"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight text-white">Security Passcode</h3>
                  <p className="text-[10px] text-platinum/40 uppercase tracking-widest">Sent via secure channel</p>
                  
                  <div className="flex justify-center gap-4 mt-8 mb-2">
                    {otp.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        type="text"
                        inputMode="numeric"
                        value={digit}
                        onChange={(e) => handleOtpChange(i, e.target.value.replace(/\D/g, ''))}
                        className="w-12 h-14 bg-black border border-white/10 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all shadow-inner"
                        maxLength={1}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex items-center justify-between px-4">
          <button onClick={() => onLogin('admin')} className="flex items-center gap-2 text-[9px] text-platinum/30 uppercase tracking-[0.2em] hover:text-teal transition-colors">
            <LayoutDashboard className="w-3 h-3" /> Command
          </button>
          <a href="#" className="text-[9px] text-platinum/30 uppercase tracking-[0.2em] hover:text-white transition-colors">
            Support
          </a>
        </div>
      </motion.div>
    </div>
  );
}
