import { Question } from '../types';

export const securityQuestions: Question[] = [
  {
    id: 'sec-1',
    question: 'What is cybersecurity?',
    options: [
      'Physical security of computers',
      'Protection of systems, networks, and data from digital attacks',
      'Antivirus software only',
      'Password management'
    ],
    correctAnswer: 1,
    explanation: 'Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, damage, or unauthorized access.'
  },
  {
    id: 'sec-2',
    question: 'What does CIA stand for in security?',
    options: [
      'Central Intelligence Agency',
      'Confidentiality, Integrity, Availability - the three pillars of information security',
      'Computer Intelligence Analysis',
      'Certified Information Auditor'
    ],
    correctAnswer: 1,
    explanation: 'CIA triad: Confidentiality (data is protected), Integrity (data is accurate), Availability (data is accessible when needed).'
  },
  {
    id: 'sec-3',
    question: 'What is phishing?',
    options: [
      'A type of fishing',
      'Fraudulent attempts to obtain sensitive information by impersonating a trusted entity',
      'Network scanning',
      'Password cracking'
    ],
    correctAnswer: 1,
    explanation: 'Phishing is a cyberattack using deceptive emails/messages to trick users into revealing sensitive information like passwords.'
  },
  {
    id: 'sec-4',
    question: 'What is two-factor authentication (2FA)?',
    options: [
      'Using two passwords',
      'Requiring two different types of verification (something you know + something you have)',
      'Logging in twice',
      'Two accounts'
    ],
    correctAnswer: 1,
    explanation: '2FA requires two forms of verification: knowledge (password) and possession (phone, token), or biometrics.'
  },
  {
    id: 'sec-5',
    question: 'What is encryption?',
    options: [
      'Deleting data',
      'Converting data into a coded format to prevent unauthorized access',
      'Compressing data',
      'Backing up data'
    ],
    correctAnswer: 1,
    explanation: 'Encryption transforms readable data (plaintext) into coded form (ciphertext) that can only be read with the decryption key.'
  },
  {
    id: 'sec-6',
    question: 'What is the difference between symmetric and asymmetric encryption?',
    options: [
      'No difference',
      'Symmetric uses one key; asymmetric uses a public/private key pair',
      'Asymmetric is faster',
      'Symmetric is more secure'
    ],
    correctAnswer: 1,
    explanation: 'Symmetric encryption uses the same key for encryption and decryption. Asymmetric uses a public key for encryption and private key for decryption.'
  },
  {
    id: 'sec-7',
    question: 'What is a firewall?',
    options: [
      'A physical barrier',
      'A security system that monitors and filters network traffic based on rules',
      'A type of antivirus',
      'A backup system'
    ],
    correctAnswer: 1,
    explanation: 'A firewall is a network security system that monitors and controls incoming/outgoing traffic based on predetermined rules.'
  },
  {
    id: 'sec-8',
    question: 'What is a DDoS attack?',
    options: [
      'Data Download Service',
      'Distributed Denial of Service - overwhelming a system with traffic from multiple sources',
      'Database Denial Service',
      'Data Distribution System'
    ],
    correctAnswer: 1,
    explanation: 'A DDoS attack overwhelms a target with traffic from multiple distributed sources, making it unavailable to legitimate users.'
  },
  {
    id: 'sec-9',
    question: 'What is malware?',
    options: [
      'Software bugs',
      'Malicious software designed to harm, exploit, or gain unauthorized access',
      'Hardware failure',
      'Network errors'
    ],
    correctAnswer: 1,
    explanation: 'Malware (malicious software) includes viruses, worms, trojans, ransomware, and spyware designed to harm systems or steal data.'
  },
  {
    id: 'sec-10',
    question: 'What is ransomware?',
    options: [
      'Antivirus software',
      'Malware that encrypts data and demands payment for decryption',
      'A backup tool',
      'A security scan'
    ],
    correctAnswer: 1,
    explanation: 'Ransomware encrypts victim\'s data and demands payment (usually cryptocurrency) for the decryption key.'
  },
  {
    id: 'sec-11',
    question: 'What is social engineering?',
    options: [
      'Building social networks',
      'Manipulating people into divulging confidential information or performing actions',
      'Social media marketing',
      'Community building'
    ],
    correctAnswer: 1,
    explanation: 'Social engineering manipulates people psychologically to reveal confidential information or perform security-breaching actions.'
  },
  {
    id: 'sec-12',
    question: 'What is SQL injection?',
    options: [
      'A database optimization',
      'An attack that inserts malicious SQL code into application queries',
      'A backup technique',
      'A data migration tool'
    ],
    correctAnswer: 1,
    explanation: 'SQL injection inserts malicious SQL code through application inputs, potentially accessing, modifying, or deleting database data.'
  },
  {
    id: 'sec-13',
    question: 'What is XSS (Cross-Site Scripting)?',
    options: [
      'A browser extension',
      'An attack injecting malicious scripts into web pages viewed by other users',
      'A type of encryption',
      'A testing framework'
    ],
    correctAnswer: 1,
    explanation: 'XSS injects malicious scripts into web pages that execute in other users\' browsers, potentially stealing data or session tokens.'
  },
  {
    id: 'sec-14',
    question: 'What is OWASP?',
    options: [
      'A programming language',
      'Open Web Application Security Project - a nonprofit focused on software security',
      'An operating system',
      'A testing tool'
    ],
    correctAnswer: 1,
    explanation: 'OWASP (Open Web Application Security Project) is a nonprofit that provides resources for web application security, including the Top 10 risks.'
  },
  {
    id: 'sec-15',
    question: 'What is the OWASP Top 10?',
    options: [
      'Ten programming languages',
      'A list of the ten most critical web application security risks',
      'Top 10 security companies',
      'Top 10 security tools'
    ],
    correctAnswer: 1,
    explanation: 'OWASP Top 10 is a standard awareness document listing the most critical security risks to web applications.'
  },
  {
    id: 'sec-16',
    question: 'What is a vulnerability?',
    options: [
      'A strong point',
      'A weakness in a system that can be exploited by attackers',
      'A security feature',
      'A bug in code'
    ],
    correctAnswer: 1,
    explanation: 'A vulnerability is a weakness in a system, process, or control that can be exploited by a threat actor.'
  },
  {
    id: 'sec-17',
    question: 'What is a threat?',
    options: [
      'A security tool',
      'A potential danger that can exploit a vulnerability',
      'A security policy',
      'A software update'
    ],
    correctAnswer: 1,
    explanation: 'A threat is any potential danger (person, event, or thing) that can exploit a vulnerability to cause harm.'
  },
  {
    id: 'sec-18',
    question: 'What is a risk in security?',
    options: [
      'A danger already realized',
      'The potential for loss or damage when a threat exploits a vulnerability',
      'A security measure',
      'An insurance policy'
    ],
    correctAnswer: 1,
    explanation: 'Risk is the potential for loss when a threat exploits a vulnerability. Risk = Threat × Vulnerability × Impact.'
  },
  {
    id: 'sec-19',
    question: 'What is penetration testing?',
    options: [
      'Hacking illegally',
      'Simulating cyberattacks to identify security weaknesses in a system',
      'Installing antivirus',
      'Creating backups'
    ],
    correctAnswer: 1,
    explanation: 'Penetration testing (pen testing) is authorized simulated attacks to identify security weaknesses in systems.'
  },
  {
    id: 'sec-20',
    question: 'What is the principle of least privilege?',
    options: [
      'Everyone gets admin access',
      'Users should have only the minimum access necessary to perform their jobs',
      'No one gets any access',
      'Only managers get access'
    ],
    correctAnswer: 1,
    explanation: 'Least privilege grants users only the minimum access rights necessary to perform their duties, limiting potential damage.'
  },
  {
    id: 'sec-21',
    question: 'What is a zero-day vulnerability?',
    options: [
      'An old vulnerability',
      'A previously unknown vulnerability with no patch available yet',
      'A minor bug',
      'A theoretical risk'
    ],
    correctAnswer: 1,
    explanation: 'A zero-day is a previously unknown vulnerability with no available patch, giving attackers a window of opportunity.'
  },
  {
    id: 'sec-22',
    question: 'What is a security patch?',
    options: [
      'A physical patch',
      'A software update that fixes security vulnerabilities',
      'A security tool',
      'A type of encryption'
    ],
    correctAnswer: 1,
    explanation: 'A security patch is a software update that fixes known vulnerabilities, critical for maintaining system security.'
  },
  {
    id: 'sec-23',
    question: 'What is HTTPS?',
    options: [
      'Hyper Text Transfer Protocol Standard',
      'HTTP Secure - HTTP with TLS/SSL encryption',
      'High Transfer Protocol System',
      'Hyper Text Transport Security'
    ],
    correctAnswer: 1,
    explanation: 'HTTPS is HTTP with encryption using TLS/SSL, ensuring data confidentiality and integrity during transmission.'
  },
  {
    id: 'sec-24',
    question: 'What is SSL/TLS?',
    options: [
      'Server Side Language',
      'Cryptographic protocols that provide secure communication over a network',
      'System Security Layer',
      'Secure Server Login'
    ],
    correctAnswer: 1,
    explanation: 'SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are protocols that encrypt communications over networks.'
  },
  {
    id: 'sec-25',
    question: 'What is a digital certificate?',
    options: [
      'A diploma',
      'An electronic document that verifies the identity of a website/owner using public key cryptography',
      'A security badge',
      'A software license'
    ],
    correctAnswer: 1,
    explanation: 'A digital certificate binds a public key to an identity, issued by a Certificate Authority (CA) to verify authenticity.'
  },
  {
    id: 'sec-26',
    question: 'What is hashing?',
    options: [
      'Chopping vegetables',
      'Converting data into a fixed-size string that cannot be reversed',
      'Encrypting data',
      'Compressing data'
    ],
    correctAnswer: 1,
    explanation: 'Hashing converts data into a fixed-size string (hash) using a one-way function. Common algorithms: SHA-256, MD5.'
  },
  {
    id: 'sec-27',
    question: 'What is the difference between hashing and encryption?',
    options: [
      'No difference',
      'Hashing is one-way; encryption is reversible with a key',
      'Encryption is one-way',
      'They are the same'
    ],
    correctAnswer: 1,
    explanation: 'Hashing is one-way (cannot be reversed). Encryption is two-way (reversible with the correct key).'
  },
  {
    id: 'sec-28',
    question: 'What is multi-factor authentication (MFA)?',
    options: [
      'Multiple passwords',
      'Using multiple authentication factors: knowledge, possession, inherence',
      'Multiple accounts',
      'Multiple logins'
    ],
    correctAnswer: 1,
    explanation: 'MFA uses multiple factors: something you know (password), something you have (phone), and/or something you are (biometrics).'
  },
  {
    id: 'sec-29',
    question: 'What is a brute force attack?',
    options: [
      'A physical attack',
      'Trying every possible combination until the correct one is found (e.g., password cracking)',
      'A social engineering attack',
      'A network flood'
    ],
    correctAnswer: 1,
    explanation: 'A brute force attack tries every possible combination (like passwords) until the correct one is found.'
  },
  {
    id: 'sec-30',
    question: 'What is a dictionary attack?',
    options: [
      'Looking up words',
      'Trying common passwords/words from a list (dictionary) to crack credentials',
      'A spelling test',
      'A language translation'
    ],
    correctAnswer: 1,
    explanation: 'A dictionary attack uses a pre-defined list of common passwords/words to crack credentials, faster than brute force.'
  },
  {
    id: 'sec-31',
    question: 'What is a man-in-the-middle (MITM) attack?',
    options: [
      'Physical attack',
      'An attacker secretly intercepts and possibly alters communication between two parties',
      'A phishing attack',
      'A DDoS attack'
    ],
    correctAnswer: 1,
    explanation: 'MITM attacks involve an attacker secretly intercepting and possibly altering communication between two parties.'
  },
  {
    id: 'sec-32',
    question: 'What is a trojan horse?',
    options: [
      'A historical reference',
      'Malware disguised as legitimate software',
      'A type of firewall',
      'An encryption tool'
    ],
    correctAnswer: 1,
    explanation: 'A trojan is malware disguised as legitimate software, tricking users into installing it.'
  },
  {
    id: 'sec-33',
    question: 'What is a worm?',
    options: [
      'A virus variant',
      'Self-replicating malware that spreads across networks without user action',
      'A type of virus that needs a host',
      'A debugging tool'
    ],
    correctAnswer: 1,
    explanation: 'A worm is self-replicating malware that spreads across networks independently, without needing a host file or user action.'
  },
  {
    id: 'sec-34',
    question: 'What is a virus?',
    options: [
      'A biological threat',
      'Malware that attaches to legitimate programs and requires user action to spread',
      'A network attack',
      'A hardware failure'
    ],
    correctAnswer: 1,
    explanation: 'A virus is malware that attaches to legitimate programs/files and requires user action (like opening a file) to spread.'
  },
  {
    id: 'sec-35',
    question: 'What is spyware?',
    options: [
      'Software for spies',
      'Malware that secretly monitors and collects user information',
      'A security tool',
      'A surveillance camera'
    ],
    correctAnswer: 1,
    explanation: 'Spyware secretly monitors user activities, collects information (keystrokes, browsing habits) without the user\'s knowledge.'
  },
  {
    id: 'sec-36',
    question: 'What is a honeypot in security?',
    options: [
      'A sweet trap',
      'A decoy system designed to attract and study attackers',
      'A storage location',
      'A backup system'
    ],
    correctAnswer: 1,
    explanation: 'A honeypot is a decoy system designed to attract attackers, allowing security teams to study their methods.'
  },
  {
    id: 'sec-37',
    question: 'What is a SIEM?',
    options: [
      'A software tool',
      'Security Information and Event Management - collects and analyzes security data',
      'A network device',
      'A database system'
    ],
    correctAnswer: 1,
    explanation: 'SIEM (Security Information and Event Management) aggregates and analyzes security data from various sources to detect threats.'
  },
  {
    id: 'sec-38',
    question: 'What is an IDS (Intrusion Detection System)?',
    options: [
      'An identity system',
      'A system that monitors network traffic for suspicious activity and alerts',
      'An identification card',
      'A security camera'
    ],
    correctAnswer: 1,
    explanation: 'An IDS monitors network or system activities for malicious activities or policy violations and generates alerts.'
  },
  {
    id: 'sec-39',
    question: 'What is an IPS (Intrusion Prevention System)?',
    options: [
      'Same as IDS',
      'A system that monitors and actively blocks/prevents detected threats',
      'An identity provider',
      'An IP scanner'
    ],
    correctAnswer: 1,
    explanation: 'An IPS goes beyond detection (IDS) by actively blocking or preventing detected threats in real-time.'
  },
  {
    id: 'sec-40',
    question: 'What is encryption at rest?',
    options: [
      'Encryption during sleep',
      'Encrypting data stored on disk/in databases',
      'Encryption of network traffic',
      'Backup encryption only'
    ],
    correctAnswer: 1,
    explanation: 'Encryption at rest protects data stored on disks, databases, or other storage, preventing unauthorized access to stored data.'
  },
  {
    id: 'sec-41',
    question: 'What is encryption in transit?',
    options: [
      'Encrypting shipping packages',
      'Encrypting data being transmitted over networks',
      'Encryption during backup',
      'Encryption at rest'
    ],
    correctAnswer: 1,
    explanation: 'Encryption in transit (or in motion) protects data being transmitted over networks using protocols like TLS/SSL.'
  },
  {
    id: 'sec-42',
    question: 'What is the GDPR?',
    options: [
      'A security tool',
      'General Data Protection Regulation - EU data privacy law',
      'A programming language',
      'A network protocol'
    ],
    correctAnswer: 1,
    explanation: 'GDPR is an EU regulation that protects personal data and privacy for individuals in the EU and EEA.'
  },
  {
    id: 'sec-43',
    question: 'What is a security policy?',
    options: [
      'An insurance policy',
      'A document outlining rules, procedures, and guidelines for protecting information',
      'A software license',
      'A user agreement'
    ],
    correctAnswer: 1,
    explanation: 'A security policy is a formal document outlining rules, procedures, and guidelines for protecting an organization\'s information assets.'
  },
  {
    id: 'sec-44',
    question: 'What is penetration testing scope?',
    options: [
      'A telescope',
      'The defined boundaries of what systems, networks, and methods are allowed in a test',
      'The size of the report',
      'The cost of testing'
    ],
    correctAnswer: 1,
    explanation: 'Scope defines the boundaries of a penetration test: which systems, networks, and testing methods are authorized.'
  },
  {
    id: 'sec-45',
    question: 'What is security awareness training?',
    options: [
      'Physical training',
      'Educating employees about security threats and best practices',
      'Military training',
      'Self-defense classes'
    ],
    correctAnswer: 1,
    explanation: 'Security awareness training educates employees about threats (phishing, social engineering) and best practices.'
  },
  {
    id: 'sec-46',
    question: 'What is the purpose of incident response?',
    options: [
      'Preventing all incidents',
      'Managing and responding to security incidents to minimize damage',
      'Assigning blame',
      'Buying insurance'
    ],
    correctAnswer: 1,
    explanation: 'Incident response is a structured approach to managing security incidents, minimizing damage and restoring operations.'
  },
  {
    id: 'sec-47',
    question: 'What is the difference between white hat and black hat hackers?',
    options: [
      'No difference',
      'White hat: ethical hackers who test security legally; Black hat: malicious hackers who exploit systems',
      'Black hat is ethical',
      'White hat is illegal'
    ],
    correctAnswer: 1,
    explanation: 'White hat hackers are ethical security researchers working legally. Black hat hackers maliciously exploit systems.'
  },
  {
    id: 'sec-48',
    question: 'What is a buffer overflow attack?',
    options: [
      'A network overload',
      'An exploit that writes data beyond allocated buffer memory, potentially executing arbitrary code',
      'A storage overflow',
      'A data leak'
    ],
    correctAnswer: 1,
    explanation: 'Buffer overflow occurs when data exceeds buffer boundaries, potentially overwriting adjacent memory to execute malicious code.'
  },
  {
    id: 'sec-49',
    question: 'What is zero trust security?',
    options: [
      'Trusting no one',
      'A security model that requires verification for every access request, never trusting implicitly',
      'A paranoid approach',
      'No security at all'
    ],
    correctAnswer: 1,
    explanation: 'Zero trust assumes no implicit trust; every access request must be verified, regardless of origin (inside or outside network).'
  },
  {
    id: 'sec-50',
    question: 'What is a security audit?',
    options: [
      'A financial audit',
      'A systematic evaluation of an organization\'s information security',
      'A code review',
      'A performance review'
    ],
    correctAnswer: 1,
    explanation: 'A security audit is a systematic evaluation of an organization\'s information security against defined criteria/standards.'
  }
];
