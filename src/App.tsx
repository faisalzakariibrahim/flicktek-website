import React, { Component, ErrorInfo, ReactNode } from 'react';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  Activity, 
  Clock, 
  Users, 
  Globe, 
  ArrowRight, 
  Menu, 
  X,
  Linkedin,
  Twitter,
  Server,
  Cloud,
  ClipboardCheck,
  Zap,
  Quote,
  MessageSquare,
  Send,
  Minimize2,
  Loader2
} from 'lucide-react';
import { motion } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class AppErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-surface border border-border-dim rounded-2xl m-4">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
          <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-slate-400 text-sm">This section failed to load. Please refresh the page.</p>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dim bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <Shield className="w-8 h-8 fill-primary/20" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">FLICKTEK</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {[
              { name: 'Services', href: '#services' },
              { name: 'SOC 24/7', href: '#soc' },
              { name: 'Compliance', href: '#services' },
              { name: 'Testimonials', href: '#testimonials' }
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="#cta" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
              Get a Quote
            </a>
            <div className="hidden sm:block h-10 w-10 rounded-full border border-border-dim bg-surface overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" 
                alt="User" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-background-with-blue-lines-43314-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Cybersecurity
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
              Securing Your <br/><span className="text-primary">Digital Future</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Enterprise-grade managed security services tailored for the modern digital landscape. We provide 24/7 proactive defense so you can focus on scaling your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2">
                View Solutions
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#cta" className="bg-surface hover:bg-border-dim text-white border border-border-dim px-8 py-4 rounded-lg font-bold transition-all">
                Schedule Audit
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-background-dark border border-border-dim p-2 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Server Room" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border-dim p-6 rounded-xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-green/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Uptime Guarantee</p>
                  <p className="text-xl font-bold text-white">99.99%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-12 bg-surface/30 border-y border-border-dim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Threats Blocked', value: '2.4M+', trend: '12% MoM', trendUp: true },
            { label: 'Response Time', value: '<15m', sub: 'Industry Leading' },
            { label: 'Experts on Call', value: '150+', sub: 'Certified SOC Analysts' },
            { label: 'Global Compliance', value: 'SOC 2', sub: 'Type II Certified' },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex flex-col gap-1 p-6 rounded-2xl transition-colors ${i !== 0 ? 'md:border-l md:border-border-dim md:pl-8' : ''}`}
            >
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              {stat.trend ? (
                <p className="text-accent-green text-sm flex items-center gap-1 font-semibold">
                  <Zap className="w-3 h-3" /> {stat.trend}
                </p>
              ) : (
                <p className="text-primary text-sm font-semibold italic">{stat.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Managed Detection',
      desc: 'Proactive 24/7/365 monitoring and threat hunting across your entire perimeter.',
      features: ['24/7 SOC Monitoring', 'Advanced Threat Hunting', 'SIEM/XDR Management'],
      icon: Shield,
    },
    {
      title: 'Cloud Security',
      desc: 'Secure multi-cloud architectures with continuous posture management (CSPM).',
      features: ['Multi-cloud Posture', 'Workload Protection', 'Identity & Access'],
      icon: Cloud,
    },
    {
      title: 'Compliance',
      desc: 'Automated evidence collection for SOC2, HIPAA, ISO 27001, and more.',
      features: ['SOC 2 & ISO 27001', 'HIPAA & GDPR Readiness', 'Continuous Evidence Sync'],
      icon: ClipboardCheck,
    },
    {
      title: 'Incident Response',
      desc: 'Rapid mitigation and forensic analysis to minimize business impact and downtime.',
      features: ['15-Minute SLA', 'Digital Forensics', 'Post-Incident Hardening'],
      icon: Activity,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold text-sm tracking-widest uppercase">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">End-to-End Managed Security</h3>
          <p className="text-slate-400">Comprehensive protection strategies designed to mitigate risk across every layer of your infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-xl border border-border-dim bg-surface hover:border-primary transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              
              <div className="mb-8 flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#" className="text-primary text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                Learn More <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SOCFeature = () => {
  return (
    <section id="soc" className="py-24 bg-surface/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background-dark border border-border-dim rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl font-bold text-white leading-tight">
              Your Elite <br/><span className="text-primary">24/7/365</span> SOC Operations
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Cyber threats never sleep. Our Security Operations Center (SOC) provides constant vigilance using advanced AI and human intelligence to neutralize attacks before they breach your network.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Real-time behavior analysis and SIEM monitoring',
                  detail: 'Our AI-driven SIEM platform analyzes billions of events daily to detect anomalies and zero-day threats in milliseconds.'
                },
                {
                  title: 'Dedicated security analyst for every account',
                  detail: 'You get a direct line to a senior security expert who knows your infrastructure inside and out, ensuring personalized defense strategies.'
                },
                {
                  title: 'Direct integration with your existing IT stack',
                  detail: 'We plug directly into AWS, Azure, GCP, and 200+ SaaS tools to provide a unified security pane without disrupting your workflow.'
                }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="group relative flex items-center gap-3 text-slate-200 cursor-help p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-accent-green shrink-0" />
                  <span className="group-hover:text-white transition-colors">{item.title}</span>
                  
                  {/* Tooltip */}
                  <div className="absolute left-0 bottom-full mb-2 w-72 p-4 bg-surface border border-border-dim rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">SOC Capability</p>
                    <p className="text-sm text-slate-200 leading-relaxed">{item.detail}</p>
                    <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-surface border-r border-b border-border-dim rotate-45"></div>
                  </div>
                </motion.li>
              ))}
            </ul>
            <a href="#cta" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all inline-block">
              Tour the SOC
            </a>
          </div>
          <div className="flex-1 relative w-full aspect-video lg:aspect-square">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20"></div>
            <div className="relative w-full h-full rounded-2xl border border-border-dim bg-surface shadow-inner overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda51658f7?auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Dashboard" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Flicktek transformed our security posture overnight. Their SOC team is an extension of our own department.",
      name: "Sarah Chen",
      role: "CTO, TechNova Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "The compliance automation saved us hundreds of hours during our SOC2 audit. Highly recommended for fast-growing startups.",
      name: "Marcus Rodriguez",
      role: "Head of Infrastructure, CloudCore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "Finally, a security partner that understands the balance between rigorous protection and developer velocity.",
      name: "Elena Petrov",
      role: "VP Engineering, SecureLine",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Trusted by Industry Leaders</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border-dim bg-surface/50 relative"
            >
              <div className="text-primary mb-6">
                <Quote className="w-8 h-8 opacity-50" />
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">Trusted by Global Enterprises</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['TECHNOVA', 'CLOUDCORE', 'SECURELINE', 'DATADRIVE', 'NETVANCE'].map((brand) => (
            <span key={brand} className="text-2xl font-black text-slate-300 tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          className="bg-primary px-8 py-12 md:py-20 rounded-3xl text-center space-y-8 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Ready to fortify your business?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get a comprehensive security assessment from our experts and discover how Flicktek can help you achieve resilient growth.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-xl font-bold transition-all text-lg shadow-lg"
            >
              Request Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-border-dim py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <Shield className="w-6 h-6 fill-primary/20" />
              </div>
              <span className="text-lg font-bold tracking-tight uppercase">FLICKTEK</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading provider of managed security services, dedicated to protecting small to medium enterprises with Fortune 500 security standards.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Services</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Managed SIEM', 'EDR Monitoring', 'Penetration Testing', 'Phishing Simulation'].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Careers', 'Case Studies', 'Contact'].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Connect</h5>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-surface border border-border-dim text-slate-400 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface border border-border-dim text-slate-400 hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border-dim flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2024 FLICKTEK MSSP. All rights reserved. Privacy Policy | Terms of Service</p>
          <div className="flex items-center gap-6">
            {['ISO 27001', 'SOC2 TYPE II', 'HIPAA'].map((cert) => (
              <span key={cert} className="text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-border-dim px-2 py-1 rounded">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Hello! I'm the Flicktek Security Assistant. How can I help secure your business today?" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: "You are a professional sales and support representative for Flicktek, a managed cybersecurity service provider (MSSP). Your goal is to help potential clients understand Flicktek's services (24/7 SOC, Managed SIEM, Compliance, Cloud Security) and encourage them to schedule a security audit. Be professional, technical but accessible, and always prioritize security best practices. If asked about pricing, mention that we provide custom quotes based on infrastructure size.",
        }
      });

      const response = await model;
      const text = response.text;
      
      setMessages(prev => [...prev, { role: 'assistant', content: text || "I'm sorry, I encountered an error. Please try again or contact us via the 'Get a Quote' button." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-surface border border-border-dim w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-background-dark p-4 border-b border-border-dim flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
              <span className="text-sm font-bold text-white">Flicktek Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border-dim">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-background-dark text-slate-200 border border-border-dim rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background-dark border border-border-dim p-3 rounded-xl rounded-tl-none">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border-dim bg-background-dark">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-surface border border-border-dim rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="flex flex-col">
        <AppErrorBoundary>
          <Hero />
        </AppErrorBoundary>
        <AppErrorBoundary>
          <Stats />
        </AppErrorBoundary>
        <AppErrorBoundary>
          <Services />
        </AppErrorBoundary>
        <AppErrorBoundary>
          <SOCFeature />
        </AppErrorBoundary>
        <AppErrorBoundary>
          <Testimonials />
        </AppErrorBoundary>
        <AppErrorBoundary>
          <Trust />
        </AppErrorBoundary>
        <AppErrorBoundary>
          <CTA />
        </AppErrorBoundary>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
