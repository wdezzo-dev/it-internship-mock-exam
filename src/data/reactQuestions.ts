import { Question } from '../types';

export const reactQuestions: Question[] = [
  {
    id: 'react-1',
    question: 'What is React?',
    options: [
      'A full-stack framework',
      'A JavaScript library for building user interfaces',
      'A database management tool',
      'A CSS framework'
    ],
    correctAnswer: 1,
    explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.'
  },
  {
    id: 'react-2',
    question: 'What is JSX?',
    options: [
      'A new programming language',
      'A syntax extension that allows writing HTML-like code in JavaScript',
      'A JavaScript compiler',
      'A CSS preprocessor'
    ],
    correctAnswer: 1,
    explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside JavaScript code.'
  },
  {
    id: 'react-3',
    question: 'What is the Virtual DOM?',
    options: [
      'The actual browser DOM',
      'A lightweight copy of the real DOM that React uses for efficient updates',
      'A new HTML element',
      'A database'
    ],
    correctAnswer: 1,
    explanation: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to efficiently determine what changes need to be made to the actual DOM.'
  },
  {
    id: 'react-4',
    question: 'What is the purpose of `useState` hook?',
    options: [
      'To fetch data from an API',
      'To add state management to functional components',
      'To handle routing',
      'To style components'
    ],
    correctAnswer: 1,
    explanation: 'useState is a React Hook that lets you add state variables to functional components, returning a state value and a setter function.'
  },
  {
    id: 'react-5',
    question: 'What is the purpose of `useEffect` hook?',
    options: [
      'To create visual effects',
      'To perform side effects in functional components',
      'To define component styles',
      'To handle form submissions'
    ],
    correctAnswer: 1,
    explanation: 'useEffect lets you perform side effects in functional components, such as data fetching, subscriptions, or DOM manipulation.'
  },
  {
    id: 'react-6',
    question: 'What are props in React?',
    options: [
      'CSS properties',
      'Read-only data passed from parent to child components',
      'State variables',
      'Event handlers'
    ],
    correctAnswer: 1,
    explanation: 'Props (properties) are read-only inputs passed from a parent component to a child component to configure its behavior.'
  },
  {
    id: 'react-7',
    question: 'What is the key prop used for in React lists?',
    options: [
      'To style list items',
      'To help React identify which items have changed, added, or removed',
      'To set the order of items',
      'To filter list items'
    ],
    correctAnswer: 1,
    explanation: 'The key prop helps React identify which items in a list have changed, been added, or removed, enabling efficient re-rendering.'
  },
  {
    id: 'react-8',
    question: 'What is the difference between state and props?',
    options: [
      'No difference',
      'State is managed within a component; props are passed from parent',
      'Props are managed within; state is passed from parent',
      'Both are the same but with different names'
    ],
    correctAnswer: 1,
    explanation: 'State is managed internally by a component and can be changed. Props are passed from parent to child and are read-only.'
  },
  {
    id: 'react-9',
    question: 'What is a React component?',
    options: [
      'An HTML element',
      'A reusable piece of UI that can be a function or class',
      'A CSS class',
      'A JavaScript file'
    ],
    correctAnswer: 1,
    explanation: 'A React component is a reusable, self-contained piece of UI that can be either a function or a class returning JSX.'
  },
  {
    id: 'react-10',
    question: 'What is conditional rendering in React?',
    options: [
      'Rendering based on screen size',
      'Rendering different UI elements based on certain conditions',
      'Rendering only on certain browsers',
      'Rendering with animations'
    ],
    correctAnswer: 1,
    explanation: 'Conditional rendering means showing different UI elements based on conditions, using if statements, ternary operators, or && operator.'
  },
  {
    id: 'react-11',
    question: 'What is the `useContext` hook used for?',
    options: [
      'Creating animations',
      'Accessing context values without prop drilling',
      'Managing local storage',
      'Handling HTTP requests'
    ],
    correctAnswer: 1,
    explanation: 'useContext allows you to subscribe to React context and access its value without wrapping components in Context.Consumer.'
  },
  {
    id: 'react-12',
    question: 'What is `useRef` used for?',
    options: [
      'Managing state',
      'Creating a mutable reference that persists across renders',
      'Handling events',
      'Routing between pages'
    ],
    correctAnswer: 1,
    explanation: 'useRef creates a mutable ref object that persists across renders, commonly used to access DOM elements directly.'
  },
  {
    id: 'react-13',
    question: 'What is React Router used for?',
    options: [
      'State management',
      'Client-side routing and navigation between views',
      'API calls',
      'Styling components'
    ],
    correctAnswer: 1,
    explanation: 'React Router enables client-side routing, allowing navigation between different views/pages without full page reloads.'
  },
  {
    id: 'react-14',
    question: 'What is the purpose of `useMemo`?',
    options: [
      'To memorize user input',
      'To memoize expensive computations and avoid recalculation on every render',
      'To store data in memory',
      'To create memos/notes'
    ],
    correctAnswer: 1,
    explanation: 'useMemo memoizes the result of an expensive computation, recalculating only when its dependencies change.'
  },
  {
    id: 'react-15',
    question: 'What is `useCallback` used for?',
    options: [
      'Making API callbacks',
      'Memoizing a function to prevent unnecessary re-creation on re-renders',
      'Handling errors',
      'Creating callback URLs'
    ],
    correctAnswer: 1,
    explanation: 'useCallback returns a memoized version of a callback function that only changes when its dependencies change.'
  },
  {
    id: 'react-16',
    question: 'What is a Higher-Order Component (HOC)?',
    options: [
      'A component at the top of the tree',
      'A function that takes a component and returns a new enhanced component',
      'A component with more features',
      'The root component'
    ],
    correctAnswer: 1,
    explanation: 'A HOC is a function that takes a component and returns a new component with additional props or behavior.'
  },
  {
    id: 'react-17',
    question: 'What is React.Fragment used for?',
    options: [
      'Creating code fragments',
      'Grouping multiple elements without adding extra DOM nodes',
      'Breaking components into pieces',
      'Fragmenting state'
    ],
    correctAnswer: 1,
    explanation: 'React.Fragment lets you group multiple children elements without adding extra nodes to the DOM.'
  },
  {
    id: 'react-18',
    question: 'What is the `useReducer` hook?',
    options: [
      'A hook to reduce component size',
      'An alternative to useState for complex state logic using a reducer function',
      'A hook to reduce re-renders',
      'A performance optimization hook'
    ],
    correctAnswer: 1,
    explanation: 'useReducer is an alternative to useState for managing complex state logic, using a reducer function with dispatch actions.'
  },
  {
    id: 'react-19',
    question: 'What is prop drilling?',
    options: [
      'A drilling animation with props',
      'Passing props through multiple levels of components that don\'t need them',
      'Validating props',
      'Creating prop types'
    ],
    correctAnswer: 1,
    explanation: 'Prop drilling is passing data through multiple intermediate components that don\'t need the data, just to reach a deeply nested component.'
  },
  {
    id: 'react-20',
    question: 'What is React.lazy() used for?',
    options: [
      'Making components slower',
      'Dynamically importing components for code splitting',
      'Delaying state updates',
      'Creating lazy animations'
    ],
    correctAnswer: 1,
    explanation: 'React.lazy() lets you dynamically import components, enabling code splitting to load components only when needed.'
  },
  {
    id: 'react-21',
    question: 'What is the purpose of `Suspense` in React?',
    options: [
      'Creating suspenseful animations',
      'Displaying a fallback while waiting for lazy-loaded components or data',
      'Suspending state updates',
      'Pausing event handlers'
    ],
    correctAnswer: 1,
    explanation: 'Suspense lets you display a fallback UI (like a loading spinner) while waiting for lazy-loaded components to load.'
  },
  {
    id: 'react-22',
    question: 'What is a controlled component in React?',
    options: [
      'A component with restricted access',
      'A form element whose value is controlled by React state',
      'A component that cannot be modified',
      'A component with access control'
    ],
    correctAnswer: 1,
    explanation: 'A controlled component is a form element whose value is driven by React state, with changes handled through event handlers.'
  },
  {
    id: 'react-23',
    question: 'What is an uncontrolled component?',
    options: [
      'A buggy component',
      'A form element that manages its own state through the DOM',
      'A component without props',
      'A component without styling'
    ],
    correctAnswer: 1,
    explanation: 'An uncontrolled component manages its own state internally through the DOM, typically accessed via refs.'
  },
  {
    id: 'react-24',
    question: 'What is the React lifecycle method `componentDidMount` equivalent hook?',
    options: [
      'useState',
      'useEffect with an empty dependency array',
      'useRef',
      'useMemo'
    ],
    correctAnswer: 1,
    explanation: 'useEffect with an empty dependency array [] runs once after the initial render, equivalent to componentDidMount.'
  },
  {
    id: 'react-25',
    question: 'What is the purpose of `React.memo`?',
    options: [
      'Creating memos',
      'Memoizing a component to prevent unnecessary re-renders when props haven\'t changed',
      'Storing data in memory',
      'Creating documentation'
    ],
    correctAnswer: 1,
    explanation: 'React.memo is a higher-order component that memoizes the component, skipping re-renders when props haven\'t changed.'
  },
  {
    id: 'react-26',
    question: 'What is the children prop in React?',
    options: [
      'Child components of a parent',
      'Content passed between opening and closing tags of a component',
      'Nested state variables',
      'Sub-components'
    ],
    correctAnswer: 1,
    explanation: 'The children prop contains the content passed between the opening and closing tags of a component.'
  },
  {
    id: 'react-27',
    question: 'What is the purpose of `ErrorBoundary` in React?',
    options: [
      'Preventing all errors',
      'Catching JavaScript errors in child components and displaying fallback UI',
      'Validating input',
      'Handling network errors'
    ],
    correctAnswer: 1,
    explanation: 'Error boundaries catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing.'
  },
  {
    id: 'react-28',
    question: 'What is the difference between `useEffect` and `useLayoutEffect`?',
    options: [
      'No difference',
      '`useEffect` runs asynchronously after paint; `useLayoutEffect` runs synchronously before paint',
      '`useLayoutEffect` is for CSS only',
      '`useEffect` runs before render'
    ],
    correctAnswer: 1,
    explanation: 'useEffect fires asynchronously after the browser paints, while useLayoutEffect fires synchronously before the browser paints.'
  },
  {
    id: 'react-29',
    question: 'What is a custom hook in React?',
    options: [
      'A built-in React hook',
      'A reusable function that starts with "use" and can use other hooks',
      'A hook from a third-party library',
      'A hook for custom events'
    ],
    correctAnswer: 1,
    explanation: 'Custom hooks are reusable functions prefixed with "use" that encapsulate logic using other hooks.'
  },
  {
    id: 'react-30',
    question: 'What is the `StrictMode` component used for?',
    options: [
      'Enforcing coding standards',
      'Highlighting potential problems and unsafe lifecycles during development',
      'Making code stricter',
      'Preventing errors in production'
    ],
    correctAnswer: 1,
    explanation: 'StrictMode highlights potential problems in an application during development, like deprecated APIs and side effects.'
  },
  {
    id: 'react-31',
    question: 'What is the difference between functional and class components?',
    options: [
      'No difference',
      'Functional components are simpler functions; class components use ES6 classes with lifecycle methods',
      'Class components are faster',
      'Functional components cannot have state'
    ],
    correctAnswer: 1,
    explanation: 'Functional components are simple functions that use hooks for state/effects. Class components use ES6 classes with lifecycle methods.'
  },
  {
    id: 'react-32',
    question: 'What is server-side rendering (SSR) in React?',
    options: [
      'Running React on the server only',
      'Rendering React components on the server and sending HTML to the client',
      'A way to access server databases',
      'Server monitoring with React'
    ],
    correctAnswer: 1,
    explanation: 'SSR renders React components on the server, sending fully rendered HTML to the client for faster initial load and better SEO.'
  },
  {
    id: 'react-33',
    question: 'What is React Context API used for?',
    options: [
      'Creating contexts for testing',
      'Sharing data across components without explicit prop passing',
      'Managing server context',
      'Creating execution contexts'
    ],
    correctAnswer: 1,
    explanation: 'Context API provides a way to share data (like theme, user info) across the component tree without passing props at every level.'
  },
  {
    id: 'react-34',
    question: 'What is the purpose of `React.createPortal`?',
    options: [
      'Creating web portals',
      'Rendering children into a DOM node outside the parent component hierarchy',
      'Creating links between pages',
      'Opening new browser windows'
    ],
    correctAnswer: 1,
    explanation: 'createPortal lets you render children into a DOM node that exists outside the parent component\'s DOM hierarchy (e.g., modals).'
  },
  {
    id: 'react-35',
    question: 'What is reconciliation in React?',
    options: [
      'Error recovery',
      'The process of comparing the new Virtual DOM with the previous one to determine minimal DOM updates',
      'Data synchronization',
      'Component merging'
    ],
    correctAnswer: 1,
    explanation: 'Reconciliation is React\'s diffing algorithm that compares the new Virtual DOM tree with the previous one to make minimal DOM updates.'
  },
  {
    id: 'react-36',
    question: 'What does lifting state up mean?',
    options: [
      'Moving state to a higher component',
      'Moving shared state to the closest common ancestor of components that need it',
      'Increasing state values',
      'Moving state to the server'
    ],
    correctAnswer: 1,
    explanation: 'Lifting state up means moving shared state to the closest common ancestor of components that need to share and synchronize that state.'
  },
  {
    id: 'react-37',
    question: 'What is the purpose of `dangerouslySetInnerHTML`?',
    options: [
      'To create dangerous code',
      'To set HTML content directly from code, bypassing React\'s XSS protection',
      'To inject CSS',
      'To create security vulnerabilities'
    ],
    correctAnswer: 1,
    explanation: 'dangerouslySetInnerHTML is React\'s replacement for innerHTML. It\'s named "dangerous" because it bypasses XSS protection.'
  },
  {
    id: 'react-38',
    question: 'What is the render prop pattern?',
    options: [
      'A prop that renders CSS',
      'A technique where a component receives a function prop that returns React elements',
      'The render method in class components',
      'A way to render lists'
    ],
    correctAnswer: 1,
    explanation: 'Render props is a pattern where a component takes a function as a prop that returns React elements, enabling code reuse.'
  },
  {
    id: 'react-39',
    question: 'What is Next.js?',
    options: [
      'A CSS framework for React',
      'A React framework for production with SSR, SSG, and routing built-in',
      'A state management library',
      'A testing framework for React'
    ],
    correctAnswer: 1,
    explanation: 'Next.js is a React framework that provides server-side rendering, static site generation, routing, and other production features.'
  },
  {
    id: 'react-40',
    question: 'What is the purpose of `useImperativeHandle`?',
    options: [
      'Creating imperative code',
      'Customizing the ref value exposed to parent components',
      'Handling keyboard events',
      'Managing form submissions'
    ],
    correctAnswer: 1,
    explanation: 'useImperativeHandle customizes the instance value that is exposed to parent components when using ref with forwardRef.'
  },
  {
    id: 'react-41',
    question: 'What is a Pure Component in React?',
    options: [
      'A component without side effects',
      'A component that only re-renders when props or state actually change (shallow comparison)',
      'A component without children',
      'A component with no styling'
    ],
    correctAnswer: 1,
    explanation: 'PureComponent implements shouldComponentUpdate with a shallow prop and state comparison, preventing unnecessary re-renders.'
  },
  {
    id: 'react-42',
    question: 'What is event handling in React different from regular HTML?',
    options: [
      'No difference',
      'React uses camelCase events and passes functions instead of strings',
      'React doesn\'t support events',
      'React uses uppercase events'
    ],
    correctAnswer: 1,
    explanation: 'React uses camelCase naming (onClick vs onclick) and passes function references rather than strings as event handlers.'
  },
  {
    id: 'react-43',
    question: 'What is the `useId` hook used for?',
    options: [
      'Generating user IDs',
      'Generating unique IDs for accessibility attributes',
      'Creating database IDs',
      'Managing user authentication'
    ],
    correctAnswer: 1,
    explanation: 'useId generates unique IDs that are consistent between server and client, primarily for accessibility attributes like aria-labelledby.'
  },
  {
    id: 'react-44',
    question: 'What is the purpose of `forwardRef`?',
    options: [
      'Forwarding events',
      'Passing a ref from a parent component to a child component\'s DOM element',
      'Forwarding props',
      'Forwarding state'
    ],
    correctAnswer: 1,
    explanation: 'forwardRef lets a component pass a ref it receives to a child component, giving the parent access to a DOM element inside the child.'
  },
  {
    id: 'react-45',
    question: 'What is code splitting in React?',
    options: [
      'Splitting code into multiple files',
      'Loading only the code needed for the current view to improve performance',
      'Dividing code among team members',
      'Splitting CSS from JavaScript'
    ],
    correctAnswer: 1,
    explanation: 'Code splitting loads only the code needed for the current view, reducing the initial bundle size and improving load times.'
  },
  {
    id: 'react-46',
    question: 'What state management libraries are commonly used with React?',
    options: [
      'jQuery and Bootstrap',
      'Redux, Zustand, MobX, and Recoil',
      'Express and MongoDB',
      'Webpack and Babel'
    ],
    correctAnswer: 1,
    explanation: 'Popular state management libraries for React include Redux, Zustand, MobX, Recoil, and Jotai.'
  },
  {
    id: 'react-47',
    question: 'What is the `useTransition` hook?',
    options: [
      'Creating CSS transitions',
      'Marking state updates as non-urgent to keep the UI responsive',
      'Transitioning between routes',
      'Animating components'
    ],
    correctAnswer: 1,
    explanation: 'useTransition lets you mark state updates as non-urgent transitions, keeping the UI responsive during expensive renders.'
  },
  {
    id: 'react-48',
    question: 'What is hydration in React?',
    options: [
      'Adding water effects',
      'Attaching event listeners and state to server-rendered HTML on the client',
      'Loading data from an API',
      'Optimizing performance'
    ],
    correctAnswer: 1,
    explanation: 'Hydration is the process of attaching React\'s event listeners and state management to server-rendered HTML on the client side.'
  },
  {
    id: 'react-49',
    question: 'What is the purpose of `React.cloneElement`?',
    options: [
      'Deep cloning components',
      'Cloning a React element and merging in new props',
      'Creating component copies',
      'Duplicating state'
    ],
    correctAnswer: 1,
    explanation: 'React.cloneElement clones a React element and allows you to merge in new props, useful for passing additional props to children.'
  },
  {
    id: 'react-50',
    question: 'What is the Compound Component pattern?',
    options: [
      'Using multiple libraries together',
      'A pattern where multiple components work together sharing implicit state',
      'Combining CSS and JS',
      'Creating complex animations'
    ],
    correctAnswer: 1,
    explanation: 'Compound components are a pattern where multiple components work together, sharing implicit state through context to create flexible APIs.'
  }
];
