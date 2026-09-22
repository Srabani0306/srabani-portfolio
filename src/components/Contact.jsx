import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">

      {/* Section Header matching demo screenshot 2 */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white glow-title tracking-tight">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Available for Full Stack software engineering roles, project development, and consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">

        {/* Left Form Card matching demo screenshot 2 */}
        <div className="md:col-span-7">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-6">
            <h3 className="text-xl font-bold text-slate-100">Send a Message</h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-100">Message Sent!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. I'll get back to you shortly at <strong className="text-indigo-400">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 font-medium">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Info & Follow Me Cards matching demo screenshot 2 */}
        <div className="md:col-span-5 space-y-6">

          {/* Connect With Me */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80 space-y-4">
            <h3 className="text-xl font-bold text-slate-100">Connect With Me</h3>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-200 hover:border-indigo-500/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.github}
                target="https://github.com/Srabani159"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-200 hover:border-indigo-500/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-mono text-xs">{personalInfo.githubUsername}</span>
              </a>
            </div>
          </div>

          {/* Follow Me Social Buttons matching demo screenshot 2 */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80 space-y-4">
            <h3 className="text-xl font-bold text-slate-100">Follow Me</h3>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="https://www.linkedin.com/in/srabani-satadala-nayak-124997142/"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.github}
                target="https://github.com/Srabani159"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:scale-110 transition-transform"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                title="Gmail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
