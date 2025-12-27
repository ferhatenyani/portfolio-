import { useState } from 'react';
import { motion } from 'framer-motion';
import PixelGlitch from '../components/PixelGlitch';
import PixelDegrade from '../components/PixelDegrade';
import PixelText from '../components/PixelText';
import AnimatedText from '../components/AnimatedText';
import PixelThemeBlock from '../components/PixelThemeBlock';
import Modal from '../components/Modal';
import CaseStudyModal from '../components/CaseStudyModal';
import { FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Projects Section - Updated with three categories and modal functionality
 * Each project has User App + Admin App cards that open modals
 */
export default function Projects() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caseStudyModalOpen, setCaseStudyModalOpen] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 200);
  };

  const openCaseStudyModal = (caseStudy) => {
    setCurrentCaseStudy(caseStudy);
    setCaseStudyModalOpen(true);
  };

  const closeCaseStudyModal = () => {
    setCaseStudyModalOpen(false);
    setTimeout(() => setCurrentCaseStudy(null), 300);
  };

  // Case Study Data - Medical AI Chatbot (Student Interface)
  const medicalAICaseStudy = {
    title: 'MediMind AI',
    description: 'An AI-powered medical education platform designed to support students through intelligent diagnostics, adaptive learning, and course correction.',
    imageType: 'mobile',
    panels: [
      {
        label: 'Feature 01',
        title: 'AI Diagnostic Chat',
        description: 'Natural language processing enables students to ask medical questions and receive instant, accurate diagnostic guidance with cited medical sources.',
        mockups: [
          {
            src: '/medicalChatBot/app-user/chat-dark-mode.png',
            alt: 'AI Chat Interface - Light Mode',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 02',
        title: 'Adaptive Quiz System',
        description: 'AI-generated quizzes adapt to student performance and learning patterns. Questions reinforce weak areas and build comprehensive medical knowledge.',
        mockups: [
          {
            src: '/medicalChatBot/app-user/main page - quiz.png',
            alt: 'Quiz Interface - Main Page',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-user/main page - quiz-1.png',
            alt: 'Quiz Interface - Question View',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 03',
        title: 'PDF Course Correction',
        description: 'Upload medical textbooks or study materials to receive AI-powered corrections and annotations. The system identifies outdated information and provides current medical guidelines.',
        mockups: [
          {
            src: '/medicalChatBot/app-user/main page - correction.png',
            alt: 'Course Correction - Upload Interface',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-user/main page - correction-1.png',
            alt: 'Course Correction - Processing',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-user/main page - correction-2.png',
            alt: 'Course Correction - Results',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 04',
        title: 'Profile & Access',
        description: 'Personalized student profiles track learning progress, manage subscriptions, and provide access to premium features tailored to medical education needs.',
        mockups: [
          {
            src: '/medicalChatBot/app-user/profilePage1.png',
            alt: 'Student Profile - Overview',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-user/profilePage2.png',
            alt: 'Student Profile - Settings',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-user/access plan.png',
            alt: 'Access Plans & Subscriptions',
            loaded: false
          }
        ]
      },
      {
        label: 'Design System',
        title: 'Light & Dark Mode',
        description: 'A carefully designed theme system optimized for extended study sessions. Dark mode reduces eye strain during night studying, while light mode ensures clarity in clinical settings.',
        mockups: [
          {
            src: '/medicalChatBot/app-user/chat-light-mode.png',
            alt: 'Light Mode Interface',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-user/chat-dark-mode.png',
            alt: 'Dark Mode Interface',
            loaded: false
          }
        ]
      }
    ]
  };

  // Case Study Data - Medical AI Chatbot (Professor/Admin Interface)
  const medicalAIProfessorCaseStudy = {
    title: 'Professor Tools',
    description: 'Comprehensive admin platform for managing medical education content, monitoring student progress, and overseeing course corrections.',
    imageType: 'desktop',
    panels: [
      {
        label: 'Feature 01',
        title: 'Admin Dashboard',
        description: 'Centralized command center with real-time analytics, student activity monitoring, and platform health metrics. Seamlessly switch between light and dark modes for optimal viewing in any environment.',
        mockups: [
          {
            src: '/medicalChatBot/app-admin/dashboardLightMode.png',
            alt: 'Admin Dashboard - Light Mode',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/dashboardDarkMode.png',
            alt: 'Admin Dashboard - Dark Mode',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 02',
        title: 'User Management',
        description: 'Complete oversight of student and educator accounts. View detailed user profiles, edit permissions, manage access levels, and monitor individual learning progress with granular control.',
        mockups: [
          {
            src: '/medicalChatBot/app-admin/usersPage.png',
            alt: 'Users Management Page',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/usersDetailsModal.png',
            alt: 'User Details Modal',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/editUserModal.png',
            alt: 'Edit User Modal',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 03',
        title: 'Quiz Analytics',
        description: 'Deep insights into student performance and quiz effectiveness. Track completion rates, difficulty patterns, and learning outcomes to optimize AI-generated questions and improve educational impact.',
        mockups: [
          {
            src: '/medicalChatBot/app-admin/quizAnalyticsPage.png',
            alt: 'Quiz Analytics - Overview',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/quizAnalyticsPage2.png',
            alt: 'Quiz Analytics - Detailed View',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 04',
        title: 'Course Correction Review',
        description: 'Review, approve, and manage AI-generated course corrections. Examine detailed correction reports, validate suggested updates, and ensure all content meets current medical standards.',
        mockups: [
          {
            src: '/medicalChatBot/app-admin/correctionsPage.png',
            alt: 'Corrections Management Page',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/correctionDetailsModal.png',
            alt: 'Correction Details Modal',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/reviewCorrectionModal.png',
            alt: 'Review Correction Modal',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 05',
        title: 'Payment Management',
        description: 'Monitor subscription revenue, track transactions, and manage payment operations. Access detailed transaction histories and financial reporting for comprehensive platform oversight.',
        mockups: [
          {
            src: '/medicalChatBot/app-admin/payementsManegementPage.png',
            alt: 'Payments Management Page',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/transactionDetailsModal.png',
            alt: 'Transaction Details Modal',
            loaded: false
          }
        ]
      },
      {
        label: 'Feature 06',
        title: 'Settings & Security',
        description: 'Platform configuration and security controls. Manage system settings, configure AI parameters, update platform preferences, and maintain security with password management and access controls.',
        mockups: [
          {
            src: '/medicalChatBot/app-admin/settingsPage.png',
            alt: 'Settings Page - Configuration',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/settingsPage2.png',
            alt: 'Settings Page - Advanced Options',
            loaded: false
          },
          {
            src: '/medicalChatBot/app-admin/changePasswordModal.png',
            alt: 'Change Password Modal',
            loaded: false
          }
        ]
      }
    ]
  };

  const projects = [
    {
      id: 1,
      title: 'SaaS Analytics Platform',
      description: 'A modern SaaS application featuring embedded Power BI dashboards, designed with a clear separation between User and Admin experiences. The focus is on data clarity, role-based access, and smooth interactions, delivering complex analytics through a clean, intuitive interface.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      userApp: {
        name: 'User App',
        description: 'Clean analytics dashboard for end users',
        emoji: '👤',
        accentColor: 'cyan',
        modalContent: {
          title: 'SaaS Analytics Platform - User App',
          subtitle: 'Data-driven dashboard for end users',
          description: 'A modern SaaS application featuring embedded Power BI dashboards, designed with a clear separation between User and Admin experiences. The focus is on data clarity, role-based access, and smooth interactions, delivering complex analytics through a clean, intuitive interface.',
          media: '/path/to/user-app-preview.jpg', // Replace with actual path
          mediaType: 'image',
          stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Power BI'],
          demoLink: '#', // Replace with actual demo link
          demoText: 'LIVE DEMO — USER APP'
        }
      },
      adminApp: {
        name: 'Admin App',
        description: 'Advanced control panel with Power BI integration',
        emoji: '⚙️',
        accentColor: 'pink',
        modalContent: {
          title: 'SaaS Analytics Platform - Admin App',
          subtitle: 'Comprehensive admin dashboard',
          description: 'Advanced administrative interface providing full control over analytics configurations, user management, and Power BI dashboard customization. Built for power users who need granular control over the platform.',
          media: '/path/to/admin-app-preview.jpg', // Replace with actual path
          mediaType: 'image',
          stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Power BI'],
          demoLink: '#', // Replace with actual demo link
          demoText: 'LIVE DEMO — ADMIN APP'
        }
      },
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Book E-commerce Platform',
      description: 'A full-featured book e-commerce platform with a dedicated User app for browsing and purchasing, and a powerful Admin app giving the store owner complete control over products, orders, and content. The project emphasizes usability, motion-driven feedback, and scalable UI architecture.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      userApp: {
        name: 'User App',
        description: 'Seamless book browsing and purchasing experience',
        emoji: '📚',
        accentColor: 'cyan',
        modalContent: {
          title: 'Book E-commerce Platform - User App',
          subtitle: 'Browse and purchase books with ease',
          description: 'Customer-facing e-commerce platform for browsing, searching, and purchasing books. Features advanced filtering, smooth animations, and an intuitive checkout flow designed to maximize conversion.',
          media: '/path/to/ecom-user-demo.mp4', // Replace with actual path
          mediaType: 'video',
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
          demoLink: null // No live demo - video only
        }
      },
      adminApp: {
        name: 'Admin App',
        description: 'Complete control over products, orders, and content',
        emoji: '🛠️',
        accentColor: 'pink',
        modalContent: {
          title: 'Book E-commerce Platform - Admin App',
          subtitle: 'Full store management system',
          description: 'Comprehensive admin dashboard for managing products, processing orders, handling inventory, and controlling all aspects of the e-commerce platform. Features real-time updates and advanced analytics.',
          media: '/path/to/ecom-admin-demo.mp4', // Replace with actual path
          mediaType: 'video',
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
          demoLink: null // No live demo - video only
        }
      },
      color: 'pink'
    },
    {
      id: 3,
      title: 'Medical AI Assistant (UI/UX Concept)',
      description: 'A ChatGPT-inspired interface designed specifically for medical students and educators. The product is structured around three core experiences: An AI chatbot for medical questions, a course correction tool for professors, and a quiz generator to support student learning. The project focuses on information hierarchy, workflow clarity, and accessibility in a high-density educational context.',
      tags: ['Figma', 'UI/UX Design'],
      userApp: {
        name: 'Student Interface',
        description: 'AI chatbot and quiz tools for medical students',
        emoji: '🎓',
        accentColor: 'cyan',
        modalContent: {
          title: 'Medical AI Assistant - Student Interface',
          subtitle: 'AI-powered learning assistant',
          description: 'ChatGPT-inspired interface for medical students featuring an AI chatbot for answering medical questions and a quiz generator for practice. Designed with focus on clarity, accessibility, and ease of use in a learning context.',
          media: '/path/to/medical-student-mockup.jpg', // Replace with actual path
          mediaType: 'image',
          stack: ['Figma'],
          demoLink: null // Figma mockups - no live demo
        }
      },
      adminApp: {
        name: 'Professor Tools',
        description: 'Course correction and content management for educators',
        emoji: '👨‍🏫',
        accentColor: 'pink',
        modalContent: {
          title: 'Medical AI Assistant - Professor Tools',
          subtitle: 'Course management and correction tools',
          description: 'Educator-focused interface providing course correction tools, content management, and oversight of student progress. Designed to streamline the teaching workflow while maintaining high educational standards.',
          media: '/path/to/medical-professor-mockup.jpg', // Replace with actual path
          mediaType: 'image',
          stack: ['Figma'],
          demoLink: null // Figma mockups - no live demo
        }
      },
      color: 'amber'
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden bg-[var(--bg-secondary)]">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -right-64 w-128 h-128 bg-[var(--accent-cyan)] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-128 h-128 bg-[var(--accent-pink)] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <PixelDegrade delay={0.2}>
          <motion.div className="mb-20 text-center">
            <span className="pixel-text text-sm text-[var(--accent-pink)] mb-2 block">
              <PixelText delay={0.1} stagger={0.02}>
                // Selected Work
              </PixelText>
            </span>
            <h2
              className="text-5xl md:text-6xl font-bold gradient-text mb-4"
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              <AnimatedText delay={0.3} stagger={0.028} glitchIntensity="high" variant="full">
                FEATURED PROJECTS
              </AnimatedText>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Full-stack applications and design systems crafted with precision—each featuring distinct user and administrative interfaces.
            </p>
          </motion.div>
        </PixelDegrade>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <PixelDegrade key={project.id} delay={0.3 + idx * 0.2}>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Header */}
                <div className="lg:col-span-2">
                  <motion.div
                    className="border-l-4 pl-6 mb-8"
                    style={{
                      borderColor:
                        project.color === 'cyan'
                          ? 'var(--accent-cyan)'
                          : project.color === 'pink'
                          ? 'var(--accent-pink)'
                          : 'var(--accent-amber)'
                    }}
                  >
                    <h3
                      className="text-4xl font-bold text-[var(--text-primary)] mb-3"
                      style={{ fontFamily: 'var(--font-pixel)' }}
                    >
                      <AnimatedText delay={0.5 + idx * 0.2} stagger={0.035} glitchIntensity="medium" variant="simple">
                        {project.title.toUpperCase()}
                      </AnimatedText>
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm pixel-text border border-[var(--accent-cyan)] border-opacity-20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* User App Card */}
                <PixelGlitch>
                  <PixelThemeBlock delay={0.15 + idx * 0.1}>
                    <motion.div
                      className="group relative bg-[var(--bg-tertiary)] p-8 border-2 border-transparent hover:border-[var(--accent-cyan)] transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backfaceVisibility: 'hidden',
                        perspective: 1000,
                        transform: 'translateZ(0)'
                      }}
                      onClick={() => {
                        // Use new CaseStudyModal for Medical AI Assistant (id: 3)
                        if (project.id === 3) {
                          openCaseStudyModal(medicalAICaseStudy);
                        } else {
                          openModal(project.userApp.modalContent);
                        }
                      }}
                    >
                      {/* Card Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-2xl font-bold text-[var(--text-primary)] glitch-text">
                            {project.userApp.name}
                          </h4>
                          <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-10 group-hover:bg-opacity-20 transition-all">
                            <span className="text-2xl">{project.userApp.emoji}</span>
                          </div>
                        </div>

                        <p className="text-[var(--text-secondary)] mb-6">
                          {project.userApp.description}
                        </p>

                        {/* Click to view prompt */}
                        <div className="flex items-center gap-2 text-[var(--accent-cyan)] pixel-text text-sm">
                          <FaExternalLinkAlt />
                          Click to view details
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />

                      {/* Pixel Corner Accent */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent-cyan)]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.2 }}
                      />
                    </motion.div>
                  </PixelThemeBlock>
                </PixelGlitch>

                {/* Admin App Card */}
                <PixelGlitch>
                  <PixelThemeBlock delay={0.25 + idx * 0.1}>
                    <motion.div
                      className="group relative bg-[var(--bg-tertiary)] p-8 border-2 border-transparent hover:border-[var(--accent-pink)] transition-all duration-300 cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backfaceVisibility: 'hidden',
                        perspective: 1000,
                        transform: 'translateZ(0)'
                      }}
                      onClick={() => {
                        // Use new CaseStudyModal for Medical AI Assistant Admin (id: 3)
                        if (project.id === 3) {
                          openCaseStudyModal(medicalAIProfessorCaseStudy);
                        } else {
                          openModal(project.adminApp.modalContent);
                        }
                      }}
                    >
                      {/* Card Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-2xl font-bold text-[var(--text-primary)] glitch-text">
                            {project.adminApp.name}
                          </h4>
                          <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent-pink)] bg-opacity-10 group-hover:bg-opacity-20 transition-all">
                            <span className="text-2xl">{project.adminApp.emoji}</span>
                          </div>
                        </div>

                        <p className="text-[var(--text-secondary)] mb-6">
                          {project.adminApp.description}
                        </p>

                        {/* Click to view prompt */}
                        <div className="flex items-center gap-2 text-[var(--accent-pink)] pixel-text text-sm">
                          <FaExternalLinkAlt />
                          Click to view details
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-pink)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity" />

                      {/* Pixel Corner Accent */}
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-6 h-6 bg-[var(--accent-pink)]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.2 }}
                      />
                    </motion.div>
                  </PixelThemeBlock>
                </PixelGlitch>
              </div>
            </PixelDegrade>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={caseStudyModalOpen}
        onClose={closeCaseStudyModal}
        caseStudy={currentCaseStudy}
        imageType={currentCaseStudy?.imageType || 'mobile'}
      />
    </section>
  );
}
