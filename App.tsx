
import React, { useEffect, useState,useRef } from 'react';
import { Navbar } from './components/Navbar';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { EducationItem } from './components/EducationItem';
import { PROJECTS, SKILLS, EDUCATION } from './constants';
import { Section } from './types';
import { askGeminiAssistant } from './services/geminiService';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, SiFirebase } from "react-icons/si";
import { IconType } from "react-icons";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


const social = [
  {name: 'Facebook',link:'https://www.facebook.com/niamot.ullah.652643', id:1},
  {name: 'LinkedIn',link:'https://www.linkedin.com/in/niamot-ullah', id:3},
  {name: 'Github',link:'https://github.com/Niamot-Ullah', id:2},
]


type TechIcon = {
  name: string;
  icon: IconType;
  pos: string;
  color: string;
};


const TECH_ICONS: TechIcon[] = [
  { name: "React.js", icon: FaReact, pos: "top-0 left-1/4", color: "#61DAFB" },
  { name: "MongoDB", icon: SiMongodb, pos: "top-1/4 left-5", color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, pos: "left-0 top-2/3", color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, pos: "bottom-0 left-1/4", color: "#000000" },

  { name: "Tailwind CSS", icon: SiTailwindcss, pos: "top-0 right-1/4", color: "#06B6D4" },
  { name: "Firebase", icon: SiFirebase, pos: "top-1/4 right-5", color: "#FFC400" },
  { name: "PostgreSQL", icon: SiPostgresql, pos: "right-0 top-2/3", color: "#336791" }, ,
  { name: "Node.js", icon: FaNodeJs, pos: "bottom-0 right-1/4", color: "#339933" },
];




const App: React.FC = () => {
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ld934jh", "template_5q344nk", form.current, {
        publicKey: "V5MNJUUa3XaoH3AYt",
      })
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            icon: "success",
            draggable: true,
          });
           form.current!.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // enter viewport
        } else {
          entry.target.classList.remove('active'); // leave viewport
        }
      });
    },
    { threshold: 0.1 } // trigger when 10% of element is visible
  );

  const elements = document.querySelectorAll<HTMLElement>('.reveal');

  elements.forEach((el, index) => {
    // add a stagger delay per element (in seconds)
    const delay = index * 0.001; // 0.1s per element, change as you like
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);





  const handleAiChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    setAiLoading(true);
    setAiMessage(null);
    try {
      const result = await askGeminiAssistant(userQuery);
      setAiMessage(result || "I'm sorry, I couldn't process that. Alex is great though!");
    } catch (error) {
      console.error(error);
      setAiMessage("Neyamat's AI is currently sleeping. Please use the form below!");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 transition-colors duration-500 bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="">
        {/* Banner / Hero Section */}
        <section id={Section.Home} className="relative ml-0 lg:ml-10  min-h-screen flex items-center pt-20 pb-0 md:pb-10 md:pt-36 overflow-hidden ">

          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 ml- md:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm md:text-xs font-bold tracking-widest mb-6">
                FULL STACK WEB DEVELOPER
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="animate-gradient">Neyamat </span>
                Ullah
              </h1>
              <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                Hello! I'm a FULL Stack Developer from Bangladesh, with a background in Economics from the University of Barishal.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`https://drive.google.com/file/d/18exFd3uzdOSnz-zkTq5RQuT7tJdS6is8/view?usp=drive_link`} target="_blank" className="px-8 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95">
                  Resume
                </a>


                <a href={`https://www.facebook.com/niamot.ullah.652643`} className="text-blue-700 hover:scale-110 active:scale-100" target="_blank"><FaFacebook size={38} /></a>

                <a className='hover:scale-110 active:scale-100' href={`https://github.com/Niamot-Ullah`} target="_blank"><FaGithub size={38} /></a>

                <a className='text-blue-700 hover:scale-110 active:scale-100' href={`https://www.linkedin.com/in/niamot-ullah/`} target="_blank"><FaLinkedin size={38} /></a>

              </div>
            </div>
 {/* img  */}
            <div className="reveal delay-300 order-1 md:order-2 flex justify-center relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96">

                {/* Floating Icons */}
                {TECH_ICONS.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className={`absolute ${tech.pos} z-20 animate-float -my-5 -mx-5`}
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <div className="glass-card p-3 rounded-2xl shadow-xl flex items-center justify-center group cursor-help -mt-15">
                        <Icon
                          className="group-hover:scale-125 transition-transform"
                          style={{ color: tech.color, fontSize: '2rem' }}
                        />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                  );
                })}


                {/* Main Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-indigo-500/20 relative z-10 p-2 glass-card">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="./assets/neyamot.png"
                      alt="Neyamat's Portrait"
                      className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700 scale-110"
                    />
                  </div>
                </div>

                {/* Orbital Ring Decor */}
                <div className="absolute -inset-4 border-2 border-dashed border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite] z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id={Section.About} className="py-16 md:py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Passionate about <span className="text-indigo-500">Innovation</span> & Scalability.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                With over 2 years of experience in the tech industry, I've led engineering teams to deliver robust products used by millions. My philosophy is simple: write clean code, prioritize user experience, and never stop learning. I thrive in collaborative environments where pushing boundaries is the norm.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Experience", val: "2+ Years" },
                  { label: "Projects", val: "20+" },
                  { label: "Clients", val: "10+" },
                  { label: "Coffee", val: "∞ Cups" }
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.val}</div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="py-12 glass-card border-x-0">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <div className="max-w-2xl w-full text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Chat with Neyamat's <span className="text-indigo-500">AI Twin</span></h3>
              <form onSubmit={handleAiChat} className="relative mb-6">
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Ask about Neyamat's skills, experience..."
                  className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-full py-4 px-6 pr-16 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm text-gray-900 dark:text-white"
                />
                <button
                  disabled={aiLoading}
                  className="absolute right-2 top-2 p-2 rounded-full bg-indigo-600 text-white disabled:bg-gray-400 dark:disabled:bg-gray-700 transition-colors"
                >
                  {aiLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                  )}
                </button>
              </form>
              {aiMessage && (
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm animate-fade-in text-left">
                  <span className="font-bold mr-2 text-indigo-500">AI Neyamat :</span>
                  {aiMessage}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id={Section.Skills} className="py-24 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
              <div>
                <h2 className="text-4xl font-bold mb-4">The Toolkit.</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md">My expertise spans across the entire stack, focusing on modern web technologies.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal delay-200">
              {SKILLS.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </div>
        </section>




        {/* Projects Section */}
        <section id={Section.Projects} className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl font-bold mb-4">Featured Work.</h2>
              <p className="text-gray-600 dark:text-gray-400">A selection of projects that showcase my passion for solving complex problems.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal delay-200">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>




        {/* Education Section */}
        <section id={Section.Education} className="py-24 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16 reveal">
                <h2 className="text-4xl font-bold mb-4">Education.</h2>
                <p className="text-gray-600 dark:text-gray-400">Academic background that shaped my technical foundation.</p>
              </div>
              <div className="reveal delay-200 ">
                {EDUCATION.map((edu, i) => (
                  <EducationItem className="" key={i} edu={edu} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id={Section.Contact} className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-card rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 reveal">
              {/* left */}
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Let's build<br />something <span className="text-indigo-500">remarkable.</span></h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12">I'm currently available for freelance work and full-time positions. Reach out and let's discuss your next big idea.</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</div>
                      <div className="font-semibold text-gray-900 dark:text-white">niamotullah009@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</div>
                      <div className="font-semibold text-gray-900 dark:text-white">Barishal, Bangladesh</div>
                    </div>

                  </div>
                  <div className="flex pt-7 pb-5 gap-3">
                    <a href={`https://www.facebook.com/niamot.ullah.652643`} className="text-blue-700 hover:scale-110 active:scale-100" target="_blank"><FaFacebook size={38} /></a>

                <a className='hover:scale-110 active:scale-100' href={`https://github.com/Niamot-Ullah`} target="_blank"><FaGithub size={38} /></a>

                <a className='text-blue-700 hover:scale-110 active:scale-100' href={`https://www.linkedin.com/in/niamot-ullah/`} target="_blank"><FaLinkedin size={38} /></a>
                  </div>
                </div>
              </div>

              {/* right  */}
              <div className="md:w-1/2">


                <form ref={form} onSubmit={sendEmail} className="space-y-6">

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
                    <input type="text"
              name="user_name" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 dark:text-white" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                    <input type="email"
              name="user_email" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-900 dark:text-white" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                    <textarea rows={4} name="message" className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none text-gray-900 dark:text-white"></textarea>
                  </div>

                  <button type="submit"
            value="Send" className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                  </button>

                </form>


              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Neyamat Ullah. All rights reserved. 
          </div>
          <div className="flex gap-6">
            {social.map(social => (
              <a key={social.id} target='_blank' href={social.link} className="text-sm font-medium text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
