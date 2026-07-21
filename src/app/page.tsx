import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  MessageSquare,
  ShieldAlert,
  Monitor,
  ImageOff,
  Scale,
  Eye,
  Lock,
  ShieldCheck,
  Activity,
  Bell,
  FileText,
  X,
  Check,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50"
      >
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#0094C5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#65BC7B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0094C5]/10 text-[#0094C5] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0094C5] animate-pulse" />
              Next-Generation School Safety Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 leading-[1.1] mb-6">
              Intervene before <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0094C5] to-[#74529D]">
                harm occurs.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Monarch AI provides a proactive, multimodal behavioral risk
              detection platform for K-12 schools. We analyze patterns across
              text, images, audio, video, and device activity to catch early
              warning signs of bullying, self-harm, and threats.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium bg-[#0094C5] text-white hover:bg-[#0094C5]/90 h-14 rounded-2xl px-8 text-base w-full sm:w-auto shadow-lg shadow-[#0094C5]/20 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 h-14 rounded-2xl px-8 text-base w-full sm:w-auto transition-colors"
              >
                Learn how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS (The stakes…) ── */}
      <section
        id="platform"
        className="py-20"
        style={{ background: "#0d1f35" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
              The stakes are too high for reactive keyword alerts.
            </h2>
            <p className="text-lg text-slate-300">
              Legacy tools wait for students to explicitly type restricted words.
              By then, the harm is often already underway. The reality of modern
              digital behavior requires a deeper understanding of context and
              intent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "~2,000",
                label: "High schoolers lost to suicide annually in the U.S.",
                color: "text-[#0094C5]",
              },
              {
                stat: "1 in 3",
                label: "Girls under 13 have been sexually harassed online.",
                color: "text-slate-100",
              },
              {
                stat: "54%",
                label: "Of kids encounter pornographic material before age 13.",
                color: "text-slate-100",
              },
              {
                stat: "42%",
                label: "Of high schoolers report chronic sadness or hopelessness.",
                color: "text-slate-100",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col h-full border-l border-slate-700 pl-6 py-2">
                  <span className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${item.color}`}>
                    {item.stat}
                  </span>
                  <span className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES (Comprehensive Contextual Detection) ── */}
      <section id="capabilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">
              Comprehensive Contextual Detection
            </h2>
            <p className="text-lg text-slate-600">
              Monarch AI protects students during and after school hours,
              understanding the nuanced realities of digital interaction to catch
              signs early.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <MessageSquare className="w-6 h-6 text-[#0094C5]" />,
                title: "Cyberbullying & Harassment",
                desc: "Detects coordinated exclusion, relational aggression, and subtle intimidation tactics across messaging and documents.",
              },
              {
                icon: <ShieldAlert className="w-6 h-6 text-[#74529D]" />,
                title: "Grooming & Predatory Behavior",
                desc: "Identifies age-inappropriate conversations, isolation strategies, and requests to move to unmonitored platforms.",
              },
              {
                icon: <Monitor className="w-6 h-6 text-[#65BC7B]" />,
                title: "Self-Harm Indicators",
                desc: "Understands expressions of hopelessness, ideation, and research into self-harm methods beyond isolated trigger words.",
              },
              {
                icon: <ImageOff className="w-6 h-6 text-[#0094C5]" />,
                title: "Threats & Violence",
                desc: "Analyzes intent across text, uploaded imagery, and activity signals to identify genuine threats versus benign contexts.",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND KEYWORD FILTERING ── */}
      <section id="platform" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">
              Beyond Keyword Filtering
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Traditional tools generate overwhelming false positives by flagging
              isolated words. Monarch AI processes context multimodally, providing
              clear signals instead of noise.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legacy card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 h-full">
              <h3 className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-slate-500" />
                </div>
                Legacy Keyword Tools
              </h3>
              <ul className="space-y-6">
                {[
                  "Flags the word 'kill' even in historical research contexts.",
                  "Blind to images, audio, video, and device interaction patterns.",
                  "Requires administrators to sort through thousands of daily alerts.",
                  "Analyzes single messages without understanding the ongoing relationship.",
                  "Reactive alerts only trigger when strict policy lists are violated.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Monarch AI card */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0094C5]/20 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#0094C5]/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0094C5]" />
                </div>
                The Monarch AI Solution
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Understands context, distinguishing bullying from banter and research from risk.",
                  "Multimodal: analyzes text, images, video, and device activity comprehensively.",
                  "Provides synthesized timelines and severity scoring, saving admin time.",
                  "Maintains relationship context across platforms and sessions.",
                  "Proactive detection spots escalating behavioral patterns before direct policy violations occur.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0094C5]" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & ETHICS ── */}
      <section id="trust-ethics" className="py-24 bg-[#f5f6f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trust &amp; Ethics
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
              We strive to build ethical AI that is compliant with state and
              federal regulations. Protecting students means earning the trust of
              the schools and families who rely on us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: <Scale className="w-5 h-5 text-[#0094C5]" />,
                title: "Regulatory Compliance",
                desc: "Designed to align with FERPA, COPPA, and emerging state student data privacy laws as we work toward formal compliance ahead of launch.",
              },
              {
                icon: <Eye className="w-5 h-5 text-[#74529D]" />,
                title: "Human Oversight",
                desc: "Every flagged signal is reviewed by trained staff before action is taken. Monarch AI supports human judgment, it never replaces it.",
              },
              {
                icon: <Lock className="w-5 h-5 text-[#65BC7B]" />,
                title: "Data Privacy by Design",
                desc: "We collect and retain only what is necessary to detect risk, with strict access controls protecting student information at every step.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#0094C5]" />,
                title: "Ethical AI Principles",
                desc: "Our models are built to minimize bias and false positives, and are continuously evaluated against fairness and safety standards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLARITY FOR EDUCATORS ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
                Clarity for educators.<br />Privacy for students.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Administrators carry real responsibility for student wellbeing.
                We equip them with comprehensive safety insights and incident
                timelines, allowing for appropriate, informed intervention.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Activity className="w-5 h-5 text-[#65BC7B]" />,
                    title: "Behavioral Timelines",
                    desc: "See the progression of interactions over time to understand the root cause of escalations.",
                  },
                  {
                    icon: <Bell className="w-5 h-5 text-[#74529D]" />,
                    title: "Severity Triage",
                    desc: "Alerts are intelligently categorized by immediate risk level, ensuring critical events are addressed first.",
                  },
                  {
                    icon: <FileText className="w-5 h-5 text-[#0094C5]" />,
                    title: "Actionable Reports",
                    desc: "Export secure, redacted summaries for parent meetings or counselor reviews.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Mock UI */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-2xl shadow-slate-200/50">
                {/* HIGH PRIORITY badge */}
                <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-red-200">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  High Priority Review
                </div>

                <div className="space-y-6">
                  {/* Student header */}
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-500" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Student #4821</div>
                        <div className="text-xs text-slate-500">Grade 9 · District Middle-High</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-red-600">Severity: High</div>
                      <div className="text-xs text-slate-500">2 min ago</div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3 pl-4 border-l-2 border-slate-200 ml-4">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300 border-2 border-white" />
                      <p className="text-sm text-slate-600">
                        Mon, 8:14 AM — Isolation from peer group flagged in messaging activity.
                      </p>
                    </div>
                    <div className="relative pt-4">
                      <div className="absolute -left-[21px] top-5 w-2 h-2 rounded-full bg-[#65BC7B] border-2 border-white" />
                      <p className="text-sm text-slate-600">
                        Wed, 11:32 PM — Repeated late-night device activity outside typical pattern.
                      </p>
                    </div>
                    <div className="relative pt-4">
                      <div className="absolute -left-[21px] top-5 w-2 h-2 rounded-full bg-[#74529D] border-2 border-white" />
                      <div className="w-full rounded-lg border border-[#74529D]/20 bg-[#74529D]/10 p-3">
                        <p className="text-sm font-medium text-slate-800 mb-1">
                          Fri, 3:47 PM — Language indicating hopelessness detected
                        </p>
                        <p className="text-xs text-slate-600">
                          Context suggests escalating distress. Recommend counselor check-in today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT BELLA ── */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-[#74529D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug text-center max-w-3xl mx-auto mb-20">
            Protecting children in the digital age: through an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0094C5] to-[#74529D]">
              AI-powered safety solution
            </span>{" "}
            built with purpose and designed to save lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 md:gap-16 items-start">
            {/* Left – Photo */}
            <div className="md:sticky md:top-28">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-100">
                <Image
                  src="/bella-founder.jpeg"
                  alt="Bella, Founder of Monarch AI"
                  width={320}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="font-semibold text-slate-900 text-lg">Bella</p>
                <p className="text-slate-500 text-sm">Founder, Monarch AI</p>
              </div>
            </div>

            {/* Right – Bio */}
            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#0094C5] mb-6">
                About Bella
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Some founders build for opportunity. I build because I cannot
                  imagine not doing it.
                </p>
                <p>
                  I spent over 15 years working across some of the most
                  competitive tech ecosystems in the United States and Europe —
                  from global corporations to the heart of the Berlin startup
                  scene — before founding Monarch AI. That journey gave me a
                  deep understanding of what technology can do at its best. And
                  a clear-eyed view of what it enables at its worst.
                </p>
                <p>
                  Monarch AI was born from a simple but urgent conviction: that
                  the most powerful technology being built today should be
                  protecting our most vulnerable — not exploiting them. Children
                  are growing up in a digital environment that was never designed
                  with their safety in mind. I decided to change that.
                </p>
                <p>
                  Monarch AI is built around an AI-powered solution that detects
                  harmful online patterns in real time — giving schools and
                  families the ability to intervene before it is too late.
                  Because a child&apos;s safety should never depend on someone
                  manually checking a tablet by hand.
                </p>
                <p>
                  None of this is built alone. I am fortunate to have a
                  dedicated technical team — Edwin, Sascha and Youxuan — who
                  show up every day with the same conviction I do, a long-term
                  advisor in Justin whose guidance has been invaluable, and a
                  growing community of supporters working alongside us behind
                  the scenes. We are united by one belief: that purpose-built
                  technology saves lives.
                </p>
                <p className="text-slate-900 font-medium">
                  This is not just a company. It is a commitment — to the
                  children who deserve better and to the schools and families
                  fighting every day to protect them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 relative overflow-hidden bg-[#0094C5]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#65BC7B]/40 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#74529D]/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm border border-white/20">
            Launching in Schools This August
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            Contact Us for Solutions &amp; Pricing
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Monarch AI is onboarding school districts now ahead of our August
            launch. Reach out to learn how our platform fits your school, and
            get pricing tailored to your district.
          </p>
          <a
            href="mailto:support@monarchai.io"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#0094C5] shadow-lg shadow-black/20 transition-all hover:bg-white/90 hover:scale-[1.02]"
          >
            support@monarchai.io
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#hero" className="inline-block mb-6 bg-white rounded-lg px-4 py-2.5 shadow-sm">
                <Image
                  src="/monarch_logo.png"
                  alt="Monarch AI"
                  width={120}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </a>
              <p className="max-w-sm mb-6 leading-relaxed">
                Building a proactive, multimodal behavioral risk detection
                platform for K-12 schools to intervene before harm occurs.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4" />
                <span>Committed to ethical AI, compliant with state and federal regulations</span>
              </div>
            </div>

            {/* Platform links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Platform</h4>
              <ul className="space-y-4">
                {[
                  { label: "Capabilities", id: "capabilities" },
                  { label: "How it Works", id: "platform" },
                  { label: "Trust & Ethics", id: "trust-ethics" },
                  { label: "About", id: "about" },
                ].map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:support@monarchai.io" className="hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Monarch AI. All rights reserved.</p>
            <p>
              Contact us:{" "}
              <a href="mailto:support@monarchai.io" className="text-white hover:underline">
                support@monarchai.io
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
