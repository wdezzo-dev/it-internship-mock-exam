import { Question } from '../types';

export const agileQuestions: Question[] = [
  {
    id: 'agile-1',
    question: 'What is Agile methodology?',
    options: [
      'A waterfall approach',
      'An iterative approach to project management and software development emphasizing flexibility',
      'A documentation standard',
      'A testing framework'
    ],
    correctAnswer: 1,
    explanation: 'Agile is an iterative approach to software development that delivers work in small increments, emphasizing collaboration and adaptability.'
  },
  {
    id: 'agile-2',
    question: 'What is Scrum?',
    options: [
      'A rugby term only',
      'An Agile framework for managing work with sprints, roles, and ceremonies',
      'A programming language',
      'A testing method'
    ],
    correctAnswer: 1,
    explanation: 'Scrum is an Agile framework that uses sprints (fixed-length iterations), defined roles, and ceremonies to deliver software incrementally.'
  },
  {
    id: 'agile-3',
    question: 'What is a Sprint in Scrum?',
    options: [
      'Running fast',
      'A fixed time period (1-4 weeks) during which a specific set of work is completed',
      'A type of meeting',
      'A deployment process'
    ],
    correctAnswer: 1,
    explanation: 'A Sprint is a time-boxed iteration (typically 1-4 weeks) during which the team works on a set of planned user stories.'
  },
  {
    id: 'agile-4',
    question: 'What are the three roles in Scrum?',
    options: [
      'Manager, Developer, Tester',
      'Product Owner, Scrum Master, Development Team',
      'Designer, Developer, DevOps',
      'Lead, Senior, Junior'
    ],
    correctAnswer: 1,
    explanation: 'The three Scrum roles are Product Owner (what to build), Scrum Master (process facilitator), and Development Team (builders).'
  },
  {
    id: 'agile-5',
    question: 'What is the Product Backlog?',
    options: [
      'A list of bugs',
      'An ordered list of all desired work/features for the product',
      'A deployment checklist',
      'A code review list'
    ],
    correctAnswer: 1,
    explanation: 'The Product Backlog is a prioritized list of all features, enhancements, and fixes that constitute the requirements for the product.'
  },
  {
    id: 'agile-6',
    question: 'What is a User Story?',
    options: [
      'A biography',
      'A short description of a feature from the end user\'s perspective',
      'A test case',
      'A bug report'
    ],
    correctAnswer: 1,
    explanation: 'A User Story describes a feature from the user\'s perspective: "As a [user], I want [feature] so that [benefit]."'
  },
  {
    id: 'agile-7',
    question: 'What is the Daily Standup (Daily Scrum)?',
    options: [
      'A long team meeting',
      'A brief daily meeting where team members share progress, plans, and blockers',
      'A code review session',
      'A deployment meeting'
    ],
    correctAnswer: 1,
    explanation: 'The Daily Standup is a brief (15-min) meeting where team members answer: What did I do? What will I do? What blocks me?'
  },
  {
    id: 'agile-8',
    question: 'What is Sprint Planning?',
    options: [
      'Planning a race',
      'A meeting where the team decides what work to complete in the upcoming Sprint',
      'Planning the product roadmap',
      'Planning team vacations'
    ],
    correctAnswer: 1,
    explanation: 'Sprint Planning is a ceremony where the team selects items from the Product Backlog to work on during the Sprint and creates a plan.'
  },
  {
    id: 'agile-9',
    question: 'What is a Sprint Retrospective?',
    options: [
      'A code review',
      'A meeting at the end of a Sprint to reflect on what went well and what to improve',
      'A deployment review',
      'A bug triage meeting'
    ],
    correctAnswer: 1,
    explanation: 'The Sprint Retrospective is a meeting where the team reflects on the Sprint to identify improvements for the next Sprint.'
  },
  {
    id: 'agile-10',
    question: 'What is a Sprint Review?',
    options: [
      'A performance review',
      'A meeting where the team demonstrates completed work to stakeholders for feedback',
      'A code review',
      'A document review'
    ],
    correctAnswer: 1,
    explanation: 'The Sprint Review is where the team demonstrates completed work to stakeholders and gathers feedback at the end of a Sprint.'
  },
  {
    id: 'agile-11',
    question: 'What is a Kanban board?',
    options: [
      'A whiteboard',
      'A visual tool showing work items in columns representing workflow stages',
      'A spreadsheet',
      'A project plan'
    ],
    correctAnswer: 1,
    explanation: 'A Kanban board visualizes work items as cards moving through columns (e.g., To Do, In Progress, Done) representing workflow stages.'
  },
  {
    id: 'agile-12',
    question: 'What is the Definition of Done (DoD)?',
    options: [
      'When a developer says it\'s done',
      'A shared agreement of criteria that must be met before a work item is considered complete',
      'When all bugs are fixed',
      'When the code compiles'
    ],
    correctAnswer: 1,
    explanation: 'The DoD is a shared understanding of what criteria must be met for a user story or task to be considered complete.'
  },
  {
    id: 'agile-13',
    question: 'What is velocity in Agile?',
    options: [
      'How fast developers type',
      'The amount of work a team completes during a Sprint, measured in story points',
      'The speed of deployments',
      'Network speed'
    ],
    correctAnswer: 1,
    explanation: 'Velocity is the average amount of work (measured in story points) a team completes per Sprint, used for planning.'
  },
  {
    id: 'agile-14',
    question: 'What are Story Points?',
    options: [
      'Points scored in a game',
      'A relative measure of effort, complexity, and uncertainty for a user story',
      'Lines of code',
      'Hours of work'
    ],
    correctAnswer: 1,
    explanation: 'Story Points are a relative unit of measure for estimating the effort, complexity, and uncertainty of a user story.'
  },
  {
    id: 'agile-15',
    question: 'What is the Agile Manifesto?',
    options: [
      'A legal document',
      'A declaration of four values and twelve principles for Agile software development',
      'A programming standard',
      'A project plan template'
    ],
    correctAnswer: 1,
    explanation: 'The Agile Manifesto (2001) declares four core values and twelve principles guiding Agile software development.'
  },
  {
    id: 'agile-16',
    question: 'Which is an Agile Manifesto value?',
    options: [
      'Documentation over working software',
      'Individuals and interactions over processes and tools',
      'Following a plan over responding to change',
      'Contract negotiation over customer collaboration'
    ],
    correctAnswer: 1,
    explanation: 'The manifesto values: Individuals & interactions, Working software, Customer collaboration, and Responding to change (over their counterparts).'
  },
  {
    id: 'agile-17',
    question: 'What is the difference between Scrum and Kanban?',
    options: [
      'No difference',
      'Scrum uses fixed sprints with roles; Kanban uses continuous flow with WIP limits',
      'Kanban uses sprints',
      'Scrum has no structure'
    ],
    correctAnswer: 1,
    explanation: 'Scrum uses time-boxed sprints with defined roles and ceremonies. Kanban uses continuous flow with work-in-progress (WIP) limits.'
  },
  {
    id: 'agile-18',
    question: 'What is WIP (Work In Progress) limit?',
    options: [
      'A word count limit',
      'A constraint on the number of work items in a stage at any time to improve flow',
      'A sprint time limit',
      'A team size limit'
    ],
    correctAnswer: 1,
    explanation: 'WIP limits cap the number of work items allowed in each workflow stage, preventing overload and improving flow and quality.'
  },
  {
    id: 'agile-19',
    question: 'What is a burndown chart?',
    options: [
      'A fire chart',
      'A graph showing the amount of work remaining vs. time in a Sprint',
      'A performance chart',
      'A budget chart'
    ],
    correctAnswer: 1,
    explanation: 'A burndown chart graphically shows remaining work versus time, helping the team track progress toward the Sprint goal.'
  },
  {
    id: 'agile-20',
    question: 'What is pair programming?',
    options: [
      'Two people sharing a computer',
      'Two developers working together at one workstation, one coding and one reviewing',
      'Programming in pairs of files',
      'Two projects running simultaneously'
    ],
    correctAnswer: 1,
    explanation: 'Pair programming involves two developers working together: one writes code (driver) while the other reviews (navigator).'
  },
  {
    id: 'agile-21',
    question: 'What is Test-Driven Development (TDD)?',
    options: [
      'Testing after development',
      'Writing tests before writing the code that makes them pass',
      'Testing during deployment',
      'Testing in production'
    ],
    correctAnswer: 1,
    explanation: 'TDD is a practice where you write a failing test first, then write the minimum code to pass it, then refactor.'
  },
  {
    id: 'agile-22',
    question: 'What is Continuous Integration (CI)?',
    options: [
      'Integrating teams',
      'Frequently merging code changes into a shared repository with automated builds and tests',
      'Continuous meetings',
      'Non-stop coding'
    ],
    correctAnswer: 1,
    explanation: 'CI is the practice of frequently integrating code changes into a shared repository, automatically building and testing each change.'
  },
  {
    id: 'agile-23',
    question: 'What is Continuous Deployment (CD)?',
    options: [
      'Deploying continuously without testing',
      'Automatically deploying every code change that passes all tests to production',
      'Continuous documentation',
      'Deploying once a year'
    ],
    correctAnswer: 1,
    explanation: 'Continuous Deployment automatically deploys every change that passes the automated testing pipeline to production.'
  },
  {
    id: 'agile-24',
    question: 'What is refactoring?',
    options: [
      'Rewriting everything from scratch',
      'Restructuring existing code without changing its external behavior to improve quality',
      'Adding new features',
      'Fixing bugs'
    ],
    correctAnswer: 1,
    explanation: 'Refactoring improves the internal structure of code without changing its external behavior, making it cleaner and more maintainable.'
  },
  {
    id: 'agile-25',
    question: 'What is a Product Owner responsible for?',
    options: [
      'Writing code',
      'Maximizing product value by managing the Product Backlog and priorities',
      'Managing the team',
      'Running servers'
    ],
    correctAnswer: 1,
    explanation: 'The Product Owner maximizes product value by managing the Product Backlog, defining priorities, and representing stakeholder needs.'
  },
  {
    id: 'agile-26',
    question: 'What is a Scrum Master responsible for?',
    options: [
      'Being the boss',
      'Facilitating Scrum processes, removing impediments, and coaching the team',
      'Writing requirements',
      'Deploying code'
    ],
    correctAnswer: 1,
    explanation: 'The Scrum Master is a servant-leader who facilitates Scrum processes, removes impediments, and coaches the team on Agile practices.'
  },
  {
    id: 'agile-27',
    question: 'What is an Epic in Agile?',
    options: [
      'An amazing feature',
      'A large body of work that can be broken down into smaller user stories',
      'A critical bug',
      'A deployment milestone'
    ],
    correctAnswer: 1,
    explanation: 'An Epic is a large user story that is too big to complete in one Sprint and needs to be broken down into smaller stories.'
  },
  {
    id: 'agile-28',
    question: 'What is acceptance criteria?',
    options: [
      'Hiring criteria',
      'Conditions that a user story must satisfy to be accepted as complete',
      'Code review standards',
      'Performance benchmarks'
    ],
    correctAnswer: 1,
    explanation: 'Acceptance criteria are specific conditions that a user story must meet for it to be considered done and accepted by the Product Owner.'
  },
  {
    id: 'agile-29',
    question: 'What is a spike in Agile?',
    options: [
      'A sudden increase in bugs',
      'A time-boxed research task to explore a solution or reduce uncertainty',
      'A performance spike',
      'A traffic surge'
    ],
    correctAnswer: 1,
    explanation: 'A spike is a time-boxed investigation or research task to gain knowledge, reduce uncertainty, or explore technical approaches.'
  },
  {
    id: 'agile-30',
    question: 'What is technical debt?',
    options: [
      'Money owed for technology',
      'The cost of shortcuts or poor code that must be addressed later',
      'Server costs',
      'License fees'
    ],
    correctAnswer: 1,
    explanation: 'Technical debt is the implied cost of rework caused by choosing quick/easy solutions instead of better approaches that take longer.'
  },
  {
    id: 'agile-31',
    question: 'What is a minimum viable product (MVP)?',
    options: [
      'The cheapest product',
      'A version with just enough features to satisfy early customers and provide feedback',
      'A product with minimum bugs',
      'A fully featured product'
    ],
    correctAnswer: 1,
    explanation: 'An MVP is a product with enough features to attract early adopters and validate the product idea with minimal effort.'
  },
  {
    id: 'agile-32',
    question: 'What is backlog grooming (refinement)?',
    options: [
      'Cleaning up code',
      'Reviewing and updating Product Backlog items to ensure they are ready for upcoming sprints',
      'Deleting old tickets',
      'Organizing files'
    ],
    correctAnswer: 1,
    explanation: 'Backlog refinement involves reviewing, re-prioritizing, and adding detail to Product Backlog items to prepare them for Sprint Planning.'
  },
  {
    id: 'agile-33',
    question: 'What is a cross-functional team?',
    options: [
      'A team from different companies',
      'A team with all the skills needed to deliver a product without external dependencies',
      'A team that works across time zones',
      'A team that uses multiple programming languages'
    ],
    correctAnswer: 1,
    explanation: 'A cross-functional team has all necessary skills (development, testing, design) to deliver work without depending on external teams.'
  },
  {
    id: 'agile-34',
    question: 'What is the Waterfall methodology?',
    options: [
      'An Agile method',
      'A linear sequential approach where each phase must complete before the next begins',
      'A rapid development method',
      'A testing approach'
    ],
    correctAnswer: 1,
    explanation: 'Waterfall is a linear sequential methodology where phases (requirements, design, implementation, testing, deployment) follow in order.'
  },
  {
    id: 'agile-35',
    question: 'What is the main difference between Agile and Waterfall?',
    options: [
      'No difference',
      'Agile is iterative and adaptive; Waterfall is linear and sequential',
      'Waterfall is faster',
      'Agile has more documentation'
    ],
    correctAnswer: 1,
    explanation: 'Agile delivers work iteratively with flexibility to change. Waterfall follows a rigid linear sequence of phases.'
  },
  {
    id: 'agile-36',
    question: 'What is a code review?',
    options: [
      'Reviewing code documentation',
      'A practice where peers examine code changes for quality, bugs, and adherence to standards',
      'A performance review',
      'An automated test'
    ],
    correctAnswer: 1,
    explanation: 'Code review is the practice of having peers examine code changes to find defects, improve quality, and share knowledge.'
  },
  {
    id: 'agile-37',
    question: 'What is Git?',
    options: [
      'A programming language',
      'A distributed version control system for tracking changes in source code',
      'A project management tool',
      'A testing framework'
    ],
    correctAnswer: 1,
    explanation: 'Git is a distributed version control system that tracks changes in files, enabling collaboration and version history management.'
  },
  {
    id: 'agile-38',
    question: 'What is a Git branch?',
    options: [
      'A tree branch',
      'An independent line of development that diverges from the main codebase',
      'A file copy',
      'A deployment environment'
    ],
    correctAnswer: 1,
    explanation: 'A Git branch is an independent line of development, allowing parallel work on features without affecting the main codebase.'
  },
  {
    id: 'agile-39',
    question: 'What is a Pull Request (PR)?',
    options: [
      'Pulling data from a server',
      'A request to merge code changes into a branch after review',
      'Requesting access',
      'Downloading code'
    ],
    correctAnswer: 1,
    explanation: 'A Pull Request proposes code changes for review and discussion before merging into the target branch.'
  },
  {
    id: 'agile-40',
    question: 'What is the purpose of a Sprint Goal?',
    options: [
      'A personal goal',
      'A short statement describing what the team aims to achieve during the Sprint',
      'A performance target',
      'A deadline'
    ],
    correctAnswer: 1,
    explanation: 'The Sprint Goal is a concise statement that provides the team with a clear objective and purpose for the Sprint.'
  },
  {
    id: 'agile-41',
    question: 'What is Extreme Programming (XP)?',
    options: [
      'Extreme coding competitions',
      'An Agile methodology emphasizing technical practices like TDD, pair programming, and CI',
      'Programming under pressure',
      'Late-night coding'
    ],
    correctAnswer: 1,
    explanation: 'XP is an Agile methodology that emphasizes technical excellence through practices like TDD, pair programming, and continuous integration.'
  },
  {
    id: 'agile-42',
    question: 'What is a Definition of Ready (DoR)?',
    options: [
      'When hardware is set up',
      'Criteria that a user story must meet before it can be brought into a Sprint',
      'A deployment checklist',
      'A hiring criterion'
    ],
    correctAnswer: 1,
    explanation: 'The Definition of Ready defines criteria that backlog items must meet before they can be selected for Sprint Planning.'
  },
  {
    id: 'agile-43',
    question: 'What is a release plan?',
    options: [
      'A press release',
      'A high-level plan that maps features to future sprints or releases',
      'A deployment script',
      'A marketing plan'
    ],
    correctAnswer: 1,
    explanation: 'A release plan is a high-level timeline showing which features will be delivered in upcoming releases or sprints.'
  },
  {
    id: 'agile-44',
    question: 'What is the Fibonacci sequence used for in Agile?',
    options: [
      'Mathematical calculations',
      'Estimating story points (1, 2, 3, 5, 8, 13, 21) to reflect increasing uncertainty',
      'Counting sprints',
      'Numbering user stories'
    ],
    correctAnswer: 1,
    explanation: 'Fibonacci numbers are used for story point estimation because the gaps between numbers grow, reflecting increasing uncertainty in larger stories.'
  },
  {
    id: 'agile-45',
    question: 'What is planning poker?',
    options: [
      'A card game',
      'An estimation technique where team members simultaneously reveal story point estimates',
      'Planning team activities',
      'A scheduling tool'
    ],
    correctAnswer: 1,
    explanation: 'Planning poker is a consensus-based estimation technique where team members independently estimate using cards, then discuss differences.'
  },
  {
    id: 'agile-46',
    question: 'What is a standup meeting?',
    options: [
      'A meeting while standing',
      'A brief daily sync where each team member shares progress, plans, and blockers',
      'An important presentation',
      'A comedy event'
    ],
    correctAnswer: 1,
    explanation: 'A standup is a brief daily meeting (often done standing to keep it short) where team members synchronize on progress and blockers.'
  },
  {
    id: 'agile-47',
    question: 'What is Lean software development?',
    options: [
      'Writing less code',
      'Applying Lean manufacturing principles to software: eliminate waste, deliver fast',
      'Using fewer developers',
      'Minimalist design'
    ],
    correctAnswer: 1,
    explanation: 'Lean development applies manufacturing principles to software: eliminate waste, amplify learning, deliver fast, and build quality in.'
  },
  {
    id: 'agile-48',
    question: 'What is a blocker in Agile?',
    options: [
      'An ad blocker',
      'An impediment that prevents a team member from making progress on their work',
      'A firewall',
      'A code comment'
    ],
    correctAnswer: 1,
    explanation: 'A blocker is any impediment or obstacle that prevents a team member or the team from making progress on their current work.'
  },
  {
    id: 'agile-49',
    question: 'What is Jira?',
    options: [
      'A programming language',
      'A project management tool by Atlassian commonly used for Agile project tracking',
      'A version control system',
      'A cloud provider'
    ],
    correctAnswer: 1,
    explanation: 'Jira is a popular project management and issue tracking tool by Atlassian, widely used for Agile software development.'
  },
  {
    id: 'agile-50',
    question: 'What is the difference between a bug and a feature request?',
    options: [
      'No difference',
      'A bug is unintended behavior to fix; a feature request is new desired functionality',
      'Bugs are more important',
      'Feature requests are bugs'
    ],
    correctAnswer: 1,
    explanation: 'A bug is an unintended defect in existing functionality. A feature request is a proposal for new functionality or enhancement.'
  }
];
