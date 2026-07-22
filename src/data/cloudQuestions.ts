import { Question } from '../types';

export const cloudQuestions: Question[] = [
  {
    id: 'cloud-1',
    question: 'What is cloud computing?',
    options: [
      'Storing files on a USB drive',
      'Delivering computing services over the internet on-demand',
      'Using a local server',
      'A type of weather technology'
    ],
    correctAnswer: 1,
    explanation: 'Cloud computing delivers computing services (servers, storage, databases, networking) over the internet on a pay-as-you-go basis.'
  },
  {
    id: 'cloud-2',
    question: 'What are the three main cloud service models?',
    options: [
      'HTML, CSS, JavaScript',
      'IaaS, PaaS, SaaS',
      'CPU, RAM, Storage',
      'Linux, Windows, macOS'
    ],
    correctAnswer: 1,
    explanation: 'IaaS (Infrastructure), PaaS (Platform), and SaaS (Software) are the three main cloud service models.'
  },
  {
    id: 'cloud-3',
    question: 'What is AWS?',
    options: [
      'A programming language',
      'Amazon Web Services - a comprehensive cloud platform',
      'A web framework',
      'An operating system'
    ],
    correctAnswer: 1,
    explanation: 'AWS (Amazon Web Services) is the world\'s most comprehensive cloud platform, offering over 200 services.'
  },
  {
    id: 'cloud-4',
    question: 'What is a Virtual Machine (VM)?',
    options: [
      'A physical server',
      'A software emulation of a computer system that runs on a host machine',
      'A programming language',
      'A type of database'
    ],
    correctAnswer: 1,
    explanation: 'A VM is a software-based emulation of a computer that runs an operating system and applications like a physical computer.'
  },
  {
    id: 'cloud-5',
    question: 'What is Docker?',
    options: [
      'A cloud provider',
      'A platform for building, shipping, and running applications in containers',
      'A programming language',
      'A database'
    ],
    correctAnswer: 1,
    explanation: 'Docker is a platform that uses containers to package applications with all dependencies for consistent deployment.'
  },
  {
    id: 'cloud-6',
    question: 'What is the difference between a container and a VM?',
    options: [
      'No difference',
      'Containers share the host OS kernel and are lighter; VMs include a full OS',
      'VMs are lighter than containers',
      'Containers require more resources'
    ],
    correctAnswer: 1,
    explanation: 'Containers share the host OS kernel, making them lightweight and fast. VMs include a full OS, providing stronger isolation but using more resources.'
  },
  {
    id: 'cloud-7',
    question: 'What is Kubernetes (K8s)?',
    options: [
      'A programming language',
      'An open-source container orchestration platform for automating deployment and scaling',
      'A cloud provider',
      'A database system'
    ],
    correctAnswer: 1,
    explanation: 'Kubernetes is an open-source platform for automating deployment, scaling, and management of containerized applications.'
  },
  {
    id: 'cloud-8',
    question: 'What is serverless computing?',
    options: [
      'Computing without any servers',
      'A model where the cloud provider manages servers and you only pay for execution time',
      'Client-side computing only',
      'Computing without internet'
    ],
    correctAnswer: 1,
    explanation: 'Serverless computing lets you build and run code without managing servers. The provider automatically handles infrastructure.'
  },
  {
    id: 'cloud-9',
    question: 'What is AWS Lambda?',
    options: [
      'A lambda calculus tool',
      'A serverless compute service that runs code in response to events',
      'A programming language',
      'A database service'
    ],
    correctAnswer: 1,
    explanation: 'AWS Lambda is a serverless compute service that runs code in response to events without provisioning or managing servers.'
  },
  {
    id: 'cloud-10',
    question: 'What is Amazon S3?',
    options: [
      'A compute service',
      'A scalable object storage service',
      'A database service',
      'A networking service'
    ],
    correctAnswer: 1,
    explanation: 'Amazon S3 (Simple Storage Service) provides scalable object storage for data backup, archival, and application hosting.'
  },
  {
    id: 'cloud-11',
    question: 'What is a load balancer?',
    options: [
      'A power supply unit',
      'A device/service that distributes incoming traffic across multiple servers',
      'A weight measurement tool',
      'A data compression tool'
    ],
    correctAnswer: 1,
    explanation: 'A load balancer distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed.'
  },
  {
    id: 'cloud-12',
    question: 'What is auto-scaling?',
    options: [
      'Manually adding servers',
      'Automatically adjusting computing resources based on demand',
      'Scaling image sizes',
      'A CSS feature'
    ],
    correctAnswer: 1,
    explanation: 'Auto-scaling automatically adjusts the number of computing resources based on current demand, scaling up or down as needed.'
  },
  {
    id: 'cloud-13',
    question: 'What is a CDN (Content Delivery Network)?',
    options: [
      'A programming network',
      'A distributed network of servers that delivers content from the closest location to users',
      'A social network',
      'A database network'
    ],
    correctAnswer: 1,
    explanation: 'A CDN is a geographically distributed network of servers that delivers web content to users from the nearest server location.'
  },
  {
    id: 'cloud-14',
    question: 'What are the three cloud deployment models?',
    options: [
      'Small, Medium, Large',
      'Public, Private, Hybrid',
      'Local, Remote, Mixed',
      'Free, Paid, Enterprise'
    ],
    correctAnswer: 1,
    explanation: 'Public cloud (shared), Private cloud (dedicated), and Hybrid cloud (combination of both) are the three deployment models.'
  },
  {
    id: 'cloud-15',
    question: 'What is CI/CD?',
    options: [
      'Computer Interface/Computer Design',
      'Continuous Integration/Continuous Deployment - automating code integration and deployment',
      'Cloud Integration/Cloud Deployment',
      'Code Inspection/Code Delivery'
    ],
    correctAnswer: 1,
    explanation: 'CI/CD automates code integration (building, testing) and deployment, enabling frequent, reliable software releases.'
  },
  {
    id: 'cloud-16',
    question: 'What is Infrastructure as Code (IaC)?',
    options: [
      'Writing code on infrastructure',
      'Managing and provisioning infrastructure through code/configuration files instead of manual processes',
      'Coding infrastructure software',
      'A coding bootcamp'
    ],
    correctAnswer: 1,
    explanation: 'IaC manages infrastructure through machine-readable configuration files, enabling version control and automation (e.g., Terraform).'
  },
  {
    id: 'cloud-17',
    question: 'What is Amazon EC2?',
    options: [
      'A storage service',
      'A scalable virtual server (compute) service in the AWS cloud',
      'A database service',
      'A messaging service'
    ],
    correctAnswer: 1,
    explanation: 'EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud, allowing you to scale compute capacity.'
  },
  {
    id: 'cloud-18',
    question: 'What is Azure?',
    options: [
      'A programming language',
      'Microsoft\'s cloud computing platform',
      'A database system',
      'An operating system'
    ],
    correctAnswer: 1,
    explanation: 'Microsoft Azure is a cloud computing platform offering services for computing, analytics, storage, and networking.'
  },
  {
    id: 'cloud-19',
    question: 'What is Google Cloud Platform (GCP)?',
    options: [
      'A search engine',
      'Google\'s suite of cloud computing services',
      'A web browser',
      'An email service'
    ],
    correctAnswer: 1,
    explanation: 'GCP is Google\'s suite of cloud computing services, offering compute, storage, big data, machine learning, and more.'
  },
  {
    id: 'cloud-20',
    question: 'What is a microservices architecture?',
    options: [
      'Using very small servers',
      'An approach where an application is composed of small, independent, loosely coupled services',
      'Micro-sized applications',
      'A miniature computing model'
    ],
    correctAnswer: 1,
    explanation: 'Microservices architecture structures an application as a collection of small, independent services that communicate via APIs.'
  },
  {
    id: 'cloud-21',
    question: 'What is DevOps?',
    options: [
      'A programming language',
      'A culture and set of practices combining development and operations for faster delivery',
      'A type of server',
      'A cloud provider'
    ],
    correctAnswer: 1,
    explanation: 'DevOps combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver continuously.'
  },
  {
    id: 'cloud-22',
    question: 'What is a VPC (Virtual Private Cloud)?',
    options: [
      'A VPN connection',
      'An isolated virtual network within a cloud provider where you control networking',
      'A virtual PC',
      'A private computer'
    ],
    correctAnswer: 1,
    explanation: 'A VPC is a logically isolated virtual network within a cloud provider where you define IP ranges, subnets, and security rules.'
  },
  {
    id: 'cloud-23',
    question: 'What is Terraform?',
    options: [
      'A planet modification tool',
      'An Infrastructure as Code tool for provisioning cloud resources',
      'A testing framework',
      'A monitoring tool'
    ],
    correctAnswer: 1,
    explanation: 'Terraform is an open-source IaC tool by HashiCorp that lets you define and provision cloud infrastructure using declarative configuration.'
  },
  {
    id: 'cloud-24',
    question: 'What is a container registry?',
    options: [
      'A shipping container tracker',
      'A storage service for container images (like Docker Hub or ECR)',
      'A container management tool',
      'A container orchestrator'
    ],
    correctAnswer: 1,
    explanation: 'A container registry stores and distributes container images. Examples include Docker Hub, AWS ECR, and Google Container Registry.'
  },
  {
    id: 'cloud-25',
    question: 'What is cloud-native?',
    options: [
      'Born in the cloud',
      'An approach to building applications that fully exploit cloud computing advantages',
      'Using only cloud storage',
      'A cloud certification'
    ],
    correctAnswer: 1,
    explanation: 'Cloud-native is an approach to building applications that fully leverage cloud computing with containers, microservices, and CI/CD.'
  },
  {
    id: 'cloud-26',
    question: 'What is Amazon RDS?',
    options: [
      'A compute service',
      'A managed relational database service',
      'A storage service',
      'A networking service'
    ],
    correctAnswer: 1,
    explanation: 'Amazon RDS (Relational Database Service) is a managed service for relational databases like MySQL, PostgreSQL, and Oracle.'
  },
  {
    id: 'cloud-27',
    question: 'What is the difference between vertical and horizontal scaling?',
    options: [
      'No difference',
      'Vertical adds more power to existing server; horizontal adds more servers',
      'Horizontal adds power; vertical adds servers',
      'Vertical is cheaper'
    ],
    correctAnswer: 1,
    explanation: 'Vertical scaling (scale up) increases resources of a single server. Horizontal scaling (scale out) adds more server instances.'
  },
  {
    id: 'cloud-28',
    question: 'What is a DNS (Domain Name System)?',
    options: [
      'A type of database',
      'A system that translates domain names to IP addresses',
      'A security protocol',
      'A data network system'
    ],
    correctAnswer: 1,
    explanation: 'DNS translates human-readable domain names (e.g., google.com) into IP addresses that computers use to communicate.'
  },
  {
    id: 'cloud-29',
    question: 'What is an API Gateway?',
    options: [
      'A physical gateway',
      'A service that acts as a single entry point for a set of microservices/APIs',
      'An API documentation tool',
      'A programming interface'
    ],
    correctAnswer: 1,
    explanation: 'An API Gateway acts as a single entry point for API requests, handling routing, authentication, rate limiting, and monitoring.'
  },
  {
    id: 'cloud-30',
    question: 'What is cloud storage?',
    options: [
      'A USB flash drive',
      'A service that stores data on remote servers accessible via the internet',
      'A local hard drive',
      'RAM storage'
    ],
    correctAnswer: 1,
    explanation: 'Cloud storage stores data on remote servers maintained by a cloud provider, accessible over the internet from anywhere.'
  },
  {
    id: 'cloud-31',
    question: 'What is a Dockerfile?',
    options: [
      'A documentation file',
      'A text file with instructions to build a Docker container image',
      'A Docker configuration file',
      'A log file'
    ],
    correctAnswer: 1,
    explanation: 'A Dockerfile is a text document containing all the commands/instructions needed to build a Docker container image.'
  },
  {
    id: 'cloud-32',
    question: 'What is AWS IAM?',
    options: [
      'An instant messaging service',
      'Identity and Access Management - controls who can access AWS resources',
      'An AI service',
      'A monitoring tool'
    ],
    correctAnswer: 1,
    explanation: 'AWS IAM (Identity and Access Management) lets you manage access to AWS resources by creating users, groups, and permission policies.'
  },
  {
    id: 'cloud-33',
    question: 'What is a container pod in Kubernetes?',
    options: [
      'A group of dolphins',
      'The smallest deployable unit containing one or more containers that share resources',
      'A storage unit',
      'A network node'
    ],
    correctAnswer: 1,
    explanation: 'A pod is the smallest deployable unit in Kubernetes, containing one or more containers that share storage and networking.'
  },
  {
    id: 'cloud-34',
    question: 'What is elasticity in cloud computing?',
    options: [
      'Flexible pricing',
      'The ability to automatically scale resources up or down based on demand',
      'Stretchable storage',
      'Flexible deployment'
    ],
    correctAnswer: 1,
    explanation: 'Elasticity is the ability to automatically provision and deprovision resources to match the current demand.'
  },
  {
    id: 'cloud-35',
    question: 'What is a reverse proxy?',
    options: [
      'A proxy that goes backwards',
      'A server that sits in front of web servers, forwarding client requests to backend servers',
      'An inverted firewall',
      'A client-side proxy'
    ],
    correctAnswer: 1,
    explanation: 'A reverse proxy sits in front of backend servers, forwarding client requests, providing load balancing, SSL termination, and caching.'
  },
  {
    id: 'cloud-36',
    question: 'What is AWS CloudFormation?',
    options: [
      'A weather service',
      'An IaC service that lets you model and provision AWS resources using templates',
      'A cloud monitoring tool',
      'A data migration tool'
    ],
    correctAnswer: 1,
    explanation: 'CloudFormation lets you model and provision AWS resources using JSON/YAML templates, implementing Infrastructure as Code.'
  },
  {
    id: 'cloud-37',
    question: 'What is a NoSQL database?',
    options: [
      'A database without SQL support',
      'A non-relational database designed for flexible schemas and horizontal scaling',
      'A SQL replacement',
      'A file-based database'
    ],
    correctAnswer: 1,
    explanation: 'NoSQL databases are non-relational, designed for flexible schemas, horizontal scaling, and specific data models (document, key-value, graph).'
  },
  {
    id: 'cloud-38',
    question: 'What is Redis?',
    options: [
      'A programming language',
      'An in-memory data store used as a cache, message broker, and database',
      'A cloud provider',
      'A web framework'
    ],
    correctAnswer: 1,
    explanation: 'Redis is an open-source, in-memory data structure store used as a database, cache, message broker, and streaming engine.'
  },
  {
    id: 'cloud-39',
    question: 'What is monitoring in cloud operations?',
    options: [
      'Watching security cameras',
      'Tracking the health, performance, and availability of cloud resources and applications',
      'Reading logs manually',
      'Checking emails'
    ],
    correctAnswer: 1,
    explanation: 'Cloud monitoring involves tracking metrics, logs, and health of cloud resources to ensure performance and availability.'
  },
  {
    id: 'cloud-40',
    question: 'What is a Service Level Agreement (SLA)?',
    options: [
      'A software license',
      'A commitment between a service provider and client defining expected service levels',
      'A service learning activity',
      'A security level assessment'
    ],
    correctAnswer: 1,
    explanation: 'An SLA is a formal agreement defining the expected level of service, including uptime guarantees and performance metrics.'
  },
  {
    id: 'cloud-41',
    question: 'What is multi-tenancy?',
    options: [
      'Multiple tenants in a building',
      'A single instance of software serving multiple customers (tenants)',
      'Running multiple applications',
      'Using multiple clouds'
    ],
    correctAnswer: 1,
    explanation: 'Multi-tenancy is an architecture where a single instance of software serves multiple customers, each with isolated data.'
  },
  {
    id: 'cloud-42',
    question: 'What is object storage?',
    options: [
      'Storing physical objects',
      'A storage architecture that manages data as objects with metadata and unique IDs',
      'A database type',
      'File system storage'
    ],
    correctAnswer: 1,
    explanation: 'Object storage manages data as objects (with metadata and unique IDs) rather than files in a hierarchy. S3 is a common example.'
  },
  {
    id: 'cloud-43',
    question: 'What is a message queue?',
    options: [
      'An email inbox',
      'A service that enables asynchronous communication between application components',
      'A chat application',
      'A notification system'
    ],
    correctAnswer: 1,
    explanation: 'A message queue enables asynchronous communication between services by storing messages until they are processed (e.g., SQS, RabbitMQ).'
  },
  {
    id: 'cloud-44',
    question: 'What is blue-green deployment?',
    options: [
      'Color-coded servers',
      'A strategy with two identical environments where traffic is switched from old (blue) to new (green)',
      'Environmental computing',
      'A monitoring dashboard'
    ],
    correctAnswer: 1,
    explanation: 'Blue-green deployment maintains two identical environments. Traffic is switched from the current (blue) to the new (green) release.'
  },
  {
    id: 'cloud-45',
    question: 'What is cloud security?',
    options: [
      'Physical security of data centers',
      'A set of policies, technologies, and controls to protect cloud-based systems and data',
      'Antivirus for cloud',
      'Password management'
    ],
    correctAnswer: 1,
    explanation: 'Cloud security encompasses policies, technologies, and controls that protect cloud infrastructure, data, and applications.'
  },
  {
    id: 'cloud-46',
    question: 'What is a container image?',
    options: [
      'A picture of a container',
      'A lightweight, standalone package containing everything needed to run an application',
      'A screenshot',
      'A backup file'
    ],
    correctAnswer: 1,
    explanation: 'A container image is a lightweight, immutable package containing application code, runtime, libraries, and dependencies.'
  },
  {
    id: 'cloud-47',
    question: 'What is AWS CloudWatch?',
    options: [
      'A clock service',
      'A monitoring and observability service for AWS resources and applications',
      'A security service',
      'A deployment tool'
    ],
    correctAnswer: 1,
    explanation: 'CloudWatch monitors AWS resources and applications, collecting metrics, logs, and setting alarms.'
  },
  {
    id: 'cloud-48',
    question: 'What is the shared responsibility model?',
    options: [
      'Sharing costs between teams',
      'Cloud provider secures infrastructure; customer secures their data and applications',
      'All responsibility is on the customer',
      'All responsibility is on the provider'
    ],
    correctAnswer: 1,
    explanation: 'The shared responsibility model divides security: the provider secures the cloud infrastructure, the customer secures what they put in it.'
  },
  {
    id: 'cloud-49',
    question: 'What is a region in cloud computing?',
    options: [
      'A geographic area on a map',
      'A geographic area containing multiple data centers (availability zones)',
      'A network segment',
      'A department in a company'
    ],
    correctAnswer: 1,
    explanation: 'A cloud region is a geographic area containing multiple isolated data centers (availability zones) for redundancy and low latency.'
  },
  {
    id: 'cloud-50',
    question: 'What is GitOps?',
    options: [
      'A Git hosting service',
      'Using Git as the single source of truth for declarative infrastructure and application deployment',
      'A Git plugin',
      'A version control system'
    ],
    correctAnswer: 1,
    explanation: 'GitOps uses Git repositories as the source of truth for infrastructure and application definitions, with automated deployment.'
  }
];
