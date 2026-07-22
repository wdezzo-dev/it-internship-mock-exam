import { ExamField } from '../types';
import { javascriptQuestions } from './javascriptQuestions';
import { pythonQuestions } from './pythonQuestions';
import { reactQuestions } from './reactQuestions';
import { javaQuestions } from './javaQuestions';
import { cloudQuestions } from './cloudQuestions';
import { aiQuestions } from './aiQuestions';
import { itOpsQuestions } from './itOpsQuestions';
import { agileQuestions } from './agileQuestions';
import { databaseQuestions } from './databaseQuestions';
import { networksQuestions } from './networksQuestions';
import { linuxQuestions } from './linuxQuestions';
import { softSkillsQuestions } from './softSkillsQuestions';
import { securityQuestions } from './securityQuestions';

export const examFields: ExamField[] = [
  {
    id: 'networks',
    name: 'Networks',
    icon: '🌐',
    color: 'from-cyan-500 to-blue-500',
    description: 'TCP/IP, DNS, routing, switches, protocols, and network fundamentals',
    questions: networksQuestions,
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: '🐧',
    color: 'from-yellow-500 to-orange-500',
    description: 'Commands, permissions, scripting, package management, and system administration',
    questions: linuxQuestions,
  },
  {
    id: 'database',
    name: 'Database',
    icon: '🗄️',
    color: 'from-violet-500 to-purple-600',
    description: 'SQL, NoSQL, database design, queries, normalization, and optimization',
    questions: databaseQuestions,
  },
  {
    id: 'security',
    name: 'Security',
    icon: '🔒',
    color: 'from-red-500 to-pink-600',
    description: 'Cybersecurity, encryption, vulnerabilities, attacks, and best practices',
    questions: securityQuestions,
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    icon: '🤝',
    color: 'from-pink-400 to-rose-500',
    description: 'Communication, teamwork, leadership, problem-solving, and professional growth',
    questions: softSkillsQuestions,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    color: 'from-yellow-400 to-yellow-600',
    description: 'Core JavaScript concepts, ES6+, async programming, and more',
    questions: javascriptQuestions,
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: 'from-blue-500 to-green-500',
    description: 'Python fundamentals, OOP, libraries, and best practices',
    questions: pythonQuestions,
  },
  {
    id: 'react',
    name: 'React & Node.js',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500',
    description: 'React hooks, components, patterns, and frontend development',
    questions: reactQuestions,
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: 'from-red-500 to-orange-500',
    description: 'Java OOP, collections, Spring Boot, and design patterns',
    questions: javaQuestions,
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-sky-400 to-indigo-500',
    description: 'AWS, Docker, Kubernetes, CI/CD, and cloud architecture',
    questions: cloudQuestions,
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
    description: 'ML algorithms, deep learning, NLP, and data analysis',
    questions: aiQuestions,
  },
  {
    id: 'itops',
    name: 'IT Operations',
    icon: '🖥️',
    color: 'from-emerald-500 to-teal-500',
    description: 'Networking, security, monitoring, troubleshooting, and ITIL',
    questions: itOpsQuestions,
  },
  {
    id: 'agile',
    name: 'Agile & Software Dev',
    icon: '🔄',
    color: 'from-orange-400 to-red-500',
    description: 'Scrum, Kanban, Git, CI/CD, TDD, and best practices',
    questions: agileQuestions,
  },
];
