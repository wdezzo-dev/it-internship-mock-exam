import { Question } from '../types';

export const itOpsQuestions: Question[] = [
  {
    id: 'itops-1',
    question: 'What is the OSI model?',
    options: [
      'A programming model',
      'A 7-layer conceptual framework for understanding network communication',
      'An operating system interface',
      'A security model'
    ],
    correctAnswer: 1,
    explanation: 'The OSI (Open Systems Interconnection) model is a 7-layer framework that standardizes network communication functions.'
  },
  {
    id: 'itops-2',
    question: 'What are the 7 layers of the OSI model (bottom to top)?',
    options: [
      'App, Server, Data, Network, Link, Logic, Physical',
      'Physical, Data Link, Network, Transport, Session, Presentation, Application',
      'Hardware, Software, Network, Transport, User, Admin, App',
      'Wire, Switch, Router, Firewall, Server, OS, App'
    ],
    correctAnswer: 1,
    explanation: 'The 7 layers are: Physical, Data Link, Network, Transport, Session, Presentation, and Application.'
  },
  {
    id: 'itops-3',
    question: 'What is TCP/IP?',
    options: [
      'A programming language',
      'A suite of communication protocols used for interconnecting network devices on the internet',
      'A type of cable',
      'A software application'
    ],
    correctAnswer: 1,
    explanation: 'TCP/IP is the fundamental protocol suite of the internet, defining how data is addressed, transmitted, routed, and received.'
  },
  {
    id: 'itops-4',
    question: 'What is the difference between TCP and UDP?',
    options: [
      'No difference',
      'TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable',
      'UDP is more reliable',
      'TCP is faster'
    ],
    correctAnswer: 1,
    explanation: 'TCP provides reliable, ordered delivery with error checking. UDP is faster but doesn\'t guarantee delivery or order.'
  },
  {
    id: 'itops-5',
    question: 'What is a firewall?',
    options: [
      'A physical wall',
      'A network security system that monitors and controls incoming and outgoing traffic',
      'An antivirus program',
      'A backup system'
    ],
    correctAnswer: 1,
    explanation: 'A firewall is a network security device/software that monitors and filters incoming and outgoing network traffic based on security rules.'
  },
  {
    id: 'itops-6',
    question: 'What is DHCP?',
    options: [
      'Dynamic Host Control Process',
      'Dynamic Host Configuration Protocol - automatically assigns IP addresses to devices',
      'Data Handling Configuration Protocol',
      'Distributed Host Computing Platform'
    ],
    correctAnswer: 1,
    explanation: 'DHCP automatically assigns IP addresses and network configuration parameters to devices on a network.'
  },
  {
    id: 'itops-7',
    question: 'What is SSH?',
    options: [
      'Super Secure Hosting',
      'Secure Shell - a protocol for secure remote login and command execution',
      'Simple Server Hosting',
      'Secure System Handler'
    ],
    correctAnswer: 1,
    explanation: 'SSH (Secure Shell) is a cryptographic protocol for secure remote login, command execution, and file transfer.'
  },
  {
    id: 'itops-8',
    question: 'What is a VLAN?',
    options: [
      'A virtual LAN that logically segments a network without physical separation',
      'A very large area network',
      'A virtual local application network',
      'A VPN alternative'
    ],
    correctAnswer: 0,
    explanation: 'A VLAN (Virtual LAN) logically segments a physical network into separate broadcast domains without physical rewiring.'
  },
  {
    id: 'itops-9',
    question: 'What is Active Directory?',
    options: [
      'A file manager',
      'A Microsoft directory service for managing users, computers, and resources in a network',
      'A web directory',
      'An antivirus tool'
    ],
    correctAnswer: 1,
    explanation: 'Active Directory is Microsoft\'s directory service that manages identities, authentication, and access to resources in a Windows domain.'
  },
  {
    id: 'itops-10',
    question: 'What is RAID?',
    options: [
      'A security scan',
      'Redundant Array of Independent Disks - combining multiple drives for performance/redundancy',
      'A backup software',
      'A network protocol'
    ],
    correctAnswer: 1,
    explanation: 'RAID combines multiple physical drives into a logical unit for improved performance, redundancy, or both.'
  },
  {
    id: 'itops-11',
    question: 'What is a VPN?',
    options: [
      'Virtual Personal Network',
      'Virtual Private Network - creates a secure encrypted tunnel over a public network',
      'Very Private Network',
      'Virtual Protocol Network'
    ],
    correctAnswer: 1,
    explanation: 'A VPN creates an encrypted tunnel over a public network, allowing secure remote access to private network resources.'
  },
  {
    id: 'itops-12',
    question: 'What is HTTPS?',
    options: [
      'Hyper Text Transfer Protocol Standard',
      'HTTP Secure - HTTP with encryption using TLS/SSL',
      'High Transfer Protocol System',
      'Hyper Text Transport Security'
    ],
    correctAnswer: 1,
    explanation: 'HTTPS is HTTP with encryption using TLS/SSL, ensuring secure communication between browser and server.'
  },
  {
    id: 'itops-13',
    question: 'What is a subnet?',
    options: [
      'A submarine network',
      'A logical subdivision of an IP network that divides a network into smaller parts',
      'A secondary network',
      'A backup network'
    ],
    correctAnswer: 1,
    explanation: 'A subnet is a logical subdivision of an IP network, dividing a larger network into smaller, manageable segments.'
  },
  {
    id: 'itops-14',
    question: 'What is ITIL?',
    options: [
      'IT Integration Language',
      'Information Technology Infrastructure Library - a framework for IT service management',
      'IT Implementation Layer',
      'International Technology Integration Library'
    ],
    correctAnswer: 1,
    explanation: 'ITIL is a widely adopted framework of best practices for delivering IT services effectively and efficiently.'
  },
  {
    id: 'itops-15',
    question: 'What is a backup strategy?',
    options: [
      'Buying extra hardware',
      'A planned approach to copying and archiving data to protect against loss',
      'Installing antivirus',
      'Using strong passwords'
    ],
    correctAnswer: 1,
    explanation: 'A backup strategy defines how, when, and where data is copied and stored to ensure recovery in case of data loss.'
  },
  {
    id: 'itops-16',
    question: 'What is the difference between full, incremental, and differential backups?',
    options: [
      'All are the same',
      'Full backs up everything; incremental backs up changes since last backup; differential backs up changes since last full backup',
      'Incremental is a full backup',
      'Differential is the same as incremental'
    ],
    correctAnswer: 1,
    explanation: 'Full copies all data. Incremental copies only changes since the last backup. Differential copies changes since the last full backup.'
  },
  {
    id: 'itops-17',
    question: 'What is system monitoring?',
    options: [
      'Watching a screen',
      'Continuously observing system performance, health, and availability to detect issues',
      'Installing cameras',
      'Reading reports'
    ],
    correctAnswer: 1,
    explanation: 'System monitoring involves continuously tracking metrics like CPU, memory, disk, and network to detect and resolve issues proactively.'
  },
  {
    id: 'itops-18',
    question: 'What is a patch management process?',
    options: [
      'Fixing physical holes',
      'Systematically acquiring, testing, and installing software updates/fixes',
      'Creating patches',
      'Patching networks'
    ],
    correctAnswer: 1,
    explanation: 'Patch management is the process of identifying, acquiring, testing, and installing software patches/updates to fix vulnerabilities and bugs.'
  },
  {
    id: 'itops-19',
    question: 'What is a ticketing system?',
    options: [
      'A movie ticket system',
      'Software that tracks and manages IT support requests and incidents',
      'A lottery system',
      'An event management tool'
    ],
    correctAnswer: 1,
    explanation: 'A ticketing system (like ServiceNow, Jira) tracks, manages, and resolves IT support requests, incidents, and problems.'
  },
  {
    id: 'itops-20',
    question: 'What is disaster recovery?',
    options: [
      'Recovering from natural disasters',
      'Plans and processes to restore IT systems and data after a major disruption',
      'Emergency response',
      'Insurance policies'
    ],
    correctAnswer: 1,
    explanation: 'Disaster recovery involves strategies and procedures to restore IT infrastructure and data access after a catastrophic event.'
  },
  {
    id: 'itops-21',
    question: 'What is a proxy server?',
    options: [
      'A backup server',
      'An intermediary server between client and destination server',
      'A development server',
      'A database server'
    ],
    correctAnswer: 1,
    explanation: 'A proxy server acts as an intermediary between clients and servers, providing caching, filtering, and anonymity.'
  },
  {
    id: 'itops-22',
    question: 'What is NAT (Network Address Translation)?',
    options: [
      'A naming convention',
      'A method that maps private IP addresses to public IP addresses',
      'A network analysis tool',
      'A network architecture type'
    ],
    correctAnswer: 1,
    explanation: 'NAT translates private IP addresses to a public IP address, allowing multiple devices to share a single public IP.'
  },
  {
    id: 'itops-23',
    question: 'What is an SLA in IT operations?',
    options: [
      'Software License Agreement',
      'Service Level Agreement - defines expected service quality and response times',
      'System Level Architecture',
      'Service Line Application'
    ],
    correctAnswer: 1,
    explanation: 'An SLA defines the expected level of service between an IT provider and customer, including uptime, response times, and resolution times.'
  },
  {
    id: 'itops-24',
    question: 'What is a DMZ (Demilitarized Zone) in networking?',
    options: [
      'A war zone',
      'A network segment between internal and external networks that hosts public-facing services',
      'A dead zone with no signal',
      'A development zone'
    ],
    correctAnswer: 1,
    explanation: 'A DMZ is a network segment that sits between the internal network and the internet, hosting public-facing services with added security.'
  },
  {
    id: 'itops-25',
    question: 'What is an IP address?',
    options: [
      'An internet password',
      'A unique numerical label assigned to each device connected to a network',
      'An internet program',
      'An identity provider'
    ],
    correctAnswer: 1,
    explanation: 'An IP (Internet Protocol) address is a unique numerical identifier assigned to each device on a network for communication.'
  },
  {
    id: 'itops-26',
    question: 'What is the difference between IPv4 and IPv6?',
    options: [
      'No difference',
      'IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses with a vastly larger address space',
      'IPv6 is slower',
      'IPv4 has more addresses'
    ],
    correctAnswer: 1,
    explanation: 'IPv4 uses 32-bit addresses (~4.3 billion). IPv6 uses 128-bit addresses providing a vastly larger address space.'
  },
  {
    id: 'itops-27',
    question: 'What is a MAC address?',
    options: [
      'An Apple computer address',
      'A unique hardware identifier assigned to a network interface card (NIC)',
      'A mailing address',
      'A media access code'
    ],
    correctAnswer: 1,
    explanation: 'A MAC (Media Access Control) address is a unique hardware identifier permanently assigned to a network interface card.'
  },
  {
    id: 'itops-28',
    question: 'What is Nagios?',
    options: [
      'A programming language',
      'An open-source IT infrastructure monitoring tool',
      'A database',
      'A cloud provider'
    ],
    correctAnswer: 1,
    explanation: 'Nagios is a popular open-source monitoring system that monitors hosts, services, and network devices for issues.'
  },
  {
    id: 'itops-29',
    question: 'What is the purpose of a log file?',
    options: [
      'Storing login credentials',
      'Recording events, errors, and activities for troubleshooting and auditing',
      'Logging into systems',
      'Storing user data'
    ],
    correctAnswer: 1,
    explanation: 'Log files record system events, errors, and activities, providing valuable information for troubleshooting and security auditing.'
  },
  {
    id: 'itops-30',
    question: 'What is the `ping` command used for?',
    options: [
      'Sending messages',
      'Testing network connectivity by sending ICMP echo requests to a host',
      'Opening websites',
      'Installing software'
    ],
    correctAnswer: 1,
    explanation: 'ping tests network connectivity by sending ICMP echo request packets to a destination and measuring response time.'
  },
  {
    id: 'itops-31',
    question: 'What is `traceroute` used for?',
    options: [
      'Tracing code bugs',
      'Showing the path packets take from source to destination across a network',
      'Tracking users',
      'Finding files'
    ],
    correctAnswer: 1,
    explanation: 'traceroute displays the path and transit delays of packets across a network, showing each hop to the destination.'
  },
  {
    id: 'itops-32',
    question: 'What is SSL/TLS?',
    options: [
      'Server Side Language',
      'Cryptographic protocols that provide secure communication over a network',
      'System Security Layer',
      'Secure Server Login'
    ],
    correctAnswer: 1,
    explanation: 'SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that encrypt communications over networks.'
  },
  {
    id: 'itops-33',
    question: 'What is a DDoS attack?',
    options: [
      'A data download attack',
      'Distributed Denial of Service - overwhelming a system with traffic from multiple sources',
      'A database attack',
      'A DNS attack'
    ],
    correctAnswer: 1,
    explanation: 'A DDoS attack overwhelms a target system with traffic from multiple distributed sources, making it unavailable to legitimate users.'
  },
  {
    id: 'itops-34',
    question: 'What is two-factor authentication (2FA)?',
    options: [
      'Using two passwords',
      'Requiring two different types of identification to verify a user\'s identity',
      'Logging in twice',
      'Having two accounts'
    ],
    correctAnswer: 1,
    explanation: '2FA requires two different forms of identification (something you know + something you have) for added security.'
  },
  {
    id: 'itops-35',
    question: 'What is configuration management?',
    options: [
      'Configuring computers',
      'Systematically handling changes to systems to maintain integrity over time',
      'Writing configuration files',
      'Managing passwords'
    ],
    correctAnswer: 1,
    explanation: 'Configuration management systematically handles changes to systems, ensuring consistency and maintaining system integrity (Ansible, Puppet).'
  },
  {
    id: 'itops-36',
    question: 'What is Ansible?',
    options: [
      'A programming language',
      'An open-source automation tool for configuration management, deployment, and orchestration',
      'A monitoring tool',
      'A database'
    ],
    correctAnswer: 1,
    explanation: 'Ansible is an open-source automation tool that automates configuration management, application deployment, and IT orchestration.'
  },
  {
    id: 'itops-37',
    question: 'What is the difference between a switch and a router?',
    options: [
      'No difference',
      'A switch connects devices within a network (L2); a router connects different networks (L3)',
      'A router connects devices within a network',
      'A switch connects different networks'
    ],
    correctAnswer: 1,
    explanation: 'Switches connect devices within a local network (Layer 2). Routers connect different networks and direct traffic between them (Layer 3).'
  },
  {
    id: 'itops-38',
    question: 'What is a network protocol?',
    options: [
      'A networking agreement',
      'A set of rules that governs how data is transmitted and received over a network',
      'A network password',
      'A hardware component'
    ],
    correctAnswer: 1,
    explanation: 'A network protocol is a set of rules and conventions for communication between network devices (HTTP, FTP, SMTP).'
  },
  {
    id: 'itops-39',
    question: 'What is port forwarding?',
    options: [
      'Shipping port management',
      'Redirecting network traffic from one IP/port to another to allow external access to internal services',
      'Forward planning',
      'Email forwarding'
    ],
    correctAnswer: 1,
    explanation: 'Port forwarding redirects incoming traffic from a specific port on a router to a specific device/port on the internal network.'
  },
  {
    id: 'itops-40',
    question: 'What is the purpose of a UPS (Uninterruptible Power Supply)?',
    options: [
      'A delivery service',
      'Providing emergency power to equipment when the main power source fails',
      'Upgrading power supplies',
      'Universal power standard'
    ],
    correctAnswer: 1,
    explanation: 'A UPS provides emergency backup power to connected equipment during power outages, preventing data loss and hardware damage.'
  },
  {
    id: 'itops-41',
    question: 'What is the principle of least privilege?',
    options: [
      'Giving everyone admin access',
      'Granting users only the minimum access rights needed to perform their job',
      'Restricting all access',
      'Using guest accounts'
    ],
    correctAnswer: 1,
    explanation: 'The principle of least privilege grants users only the minimum access rights necessary to perform their duties, limiting security risk.'
  },
  {
    id: 'itops-42',
    question: 'What is an incident in ITIL?',
    options: [
      'A security breach',
      'An unplanned interruption to a service or reduction in quality of service',
      'A planned change',
      'A software update'
    ],
    correctAnswer: 1,
    explanation: 'In ITIL, an incident is an unplanned interruption to an IT service or a reduction in the quality of an IT service.'
  },
  {
    id: 'itops-43',
    question: 'What is a change management process?',
    options: [
      'Changing management',
      'A systematic approach to managing all changes to IT infrastructure to minimize disruption',
      'Changing passwords',
      'Software updates'
    ],
    correctAnswer: 1,
    explanation: 'Change management controls the lifecycle of all IT changes, minimizing disruption and ensuring changes are implemented smoothly.'
  },
  {
    id: 'itops-44',
    question: 'What is a SAN (Storage Area Network)?',
    options: [
      'A social area network',
      'A high-speed network providing block-level access to consolidated data storage',
      'A small area network',
      'A secure access network'
    ],
    correctAnswer: 1,
    explanation: 'A SAN is a dedicated high-speed network that provides block-level access to consolidated, centralized data storage.'
  },
  {
    id: 'itops-45',
    question: 'What is virtualization?',
    options: [
      'Virtual reality',
      'Creating virtual versions of physical resources (servers, storage, networks)',
      'Making things invisible',
      'Online gaming'
    ],
    correctAnswer: 1,
    explanation: 'Virtualization creates virtual versions of physical resources, allowing multiple virtual systems to run on a single physical system.'
  },
  {
    id: 'itops-46',
    question: 'What is Nginx?',
    options: [
      'A programming language',
      'A high-performance web server, reverse proxy, and load balancer',
      'A database',
      'A monitoring tool'
    ],
    correctAnswer: 1,
    explanation: 'Nginx is a high-performance web server that also serves as a reverse proxy, load balancer, and HTTP cache.'
  },
  {
    id: 'itops-47',
    question: 'What is the 3-2-1 backup rule?',
    options: [
      'Backup 3 times daily, 2 weekly, 1 monthly',
      '3 copies of data, on 2 different media types, with 1 copy offsite',
      '3 full, 2 incremental, 1 differential backups',
      'Backup at 3am, 2pm, and 1am'
    ],
    correctAnswer: 1,
    explanation: 'The 3-2-1 rule: keep 3 copies of data, on 2 different types of media, with 1 copy stored offsite for disaster recovery.'
  },
  {
    id: 'itops-48',
    question: 'What is SNMP?',
    options: [
      'Simple Network Management Protocol - used to monitor and manage network devices',
      'Secure Network Message Protocol',
      'System Network Monitoring Program',
      'Simple Network Mail Protocol'
    ],
    correctAnswer: 0,
    explanation: 'SNMP (Simple Network Management Protocol) is used to collect and organize information about managed devices on networks.'
  },
  {
    id: 'itops-49',
    question: 'What is a runbook?',
    options: [
      'A running diary',
      'A set of standardized procedures for routine IT operations and incident response',
      'A coding exercise book',
      'A project plan'
    ],
    correctAnswer: 1,
    explanation: 'A runbook is a compilation of routine procedures and operations that system administrators or operators carry out.'
  },
  {
    id: 'itops-50',
    question: 'What is high availability (HA)?',
    options: [
      'Having fast internet',
      'Designing systems to be continuously operational with minimal downtime',
      'Having many servers',
      'High-speed computing'
    ],
    correctAnswer: 1,
    explanation: 'High availability refers to systems designed to be continuously operational with minimal downtime, typically 99.9%+ uptime.'
  }
];
