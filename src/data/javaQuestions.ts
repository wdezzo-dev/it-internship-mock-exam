import { Question } from '../types';

export const javaQuestions: Question[] = [
  {
    id: 'java-1',
    question: 'What is the JVM (Java Virtual Machine)?',
    options: [
      'A physical computer',
      'A runtime environment that executes Java bytecode on any platform',
      'A code editor',
      'A database engine'
    ],
    correctAnswer: 1,
    explanation: 'JVM is a virtual machine that provides a runtime environment to execute Java bytecode, enabling platform independence.'
  },
  {
    id: 'java-2',
    question: 'What is the difference between JDK, JRE, and JVM?',
    options: [
      'They are all the same',
      'JDK includes JRE and development tools; JRE includes JVM and libraries; JVM executes bytecode',
      'JVM includes JDK and JRE',
      'JRE includes JDK'
    ],
    correctAnswer: 1,
    explanation: 'JDK (Development Kit) ⊃ JRE (Runtime Environment) ⊃ JVM (Virtual Machine). JDK adds dev tools, JRE adds libraries.'
  },
  {
    id: 'java-3',
    question: 'What is the `public static void main(String[] args)` method?',
    options: [
      'A constructor',
      'The entry point of a Java application',
      'A utility method',
      'A lifecycle method'
    ],
    correctAnswer: 1,
    explanation: 'The main method is the entry point where the JVM starts executing a Java application.'
  },
  {
    id: 'java-4',
    question: 'What is Object-Oriented Programming (OOP)?',
    options: [
      'Programming with numbers only',
      'A paradigm based on objects containing data and methods',
      'A functional programming style',
      'Programming without variables'
    ],
    correctAnswer: 1,
    explanation: 'OOP is a programming paradigm based on the concept of objects that contain data (fields) and code (methods).'
  },
  {
    id: 'java-5',
    question: 'What are the four pillars of OOP?',
    options: [
      'Variables, Functions, Classes, Objects',
      'Encapsulation, Inheritance, Polymorphism, Abstraction',
      'Create, Read, Update, Delete',
      'Input, Process, Output, Storage'
    ],
    correctAnswer: 1,
    explanation: 'The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction.'
  },
  {
    id: 'java-6',
    question: 'What is the difference between `==` and `.equals()` in Java?',
    options: [
      'No difference',
      '`==` compares references; `.equals()` compares values',
      '`.equals()` compares references; `==` compares values',
      '`==` is for numbers, `.equals()` is for strings'
    ],
    correctAnswer: 1,
    explanation: '`==` compares object references (memory addresses), while `.equals()` compares the actual content/values of objects.'
  },
  {
    id: 'java-7',
    question: 'What is an interface in Java?',
    options: [
      'A user interface',
      'A contract that defines methods a class must implement',
      'A type of class',
      'A graphical component'
    ],
    correctAnswer: 1,
    explanation: 'An interface is a contract that defines abstract methods that implementing classes must provide.'
  },
  {
    id: 'java-8',
    question: 'What is the difference between an abstract class and an interface?',
    options: [
      'No difference',
      'Abstract classes can have method implementations; interfaces traditionally cannot (before Java 8)',
      'Interfaces can have constructors',
      'Abstract classes support multiple inheritance'
    ],
    correctAnswer: 1,
    explanation: 'Abstract classes can have implemented methods and constructors. Interfaces define contracts (before Java 8, only abstract methods).'
  },
  {
    id: 'java-9',
    question: 'What is a constructor in Java?',
    options: [
      'A method that destroys objects',
      'A special method called when an object is created to initialize it',
      'A static method',
      'A method that returns a value'
    ],
    correctAnswer: 1,
    explanation: 'A constructor is a special method with the same name as the class, called when an object is created to initialize its state.'
  },
  {
    id: 'java-10',
    question: 'What is the `final` keyword used for in Java?',
    options: [
      'Ending a program',
      'Making variables constant, methods non-overridable, and classes non-inheritable',
      'Finalizing objects',
      'Cleaning up resources'
    ],
    correctAnswer: 1,
    explanation: '`final` makes variables immutable, prevents method overriding, and prevents class inheritance.'
  },
  {
    id: 'java-11',
    question: 'What is the difference between `ArrayList` and `LinkedList`?',
    options: [
      'No difference',
      'ArrayList uses dynamic array (fast access); LinkedList uses doubly-linked list (fast insert/delete)',
      'LinkedList is faster for everything',
      'ArrayList cannot grow in size'
    ],
    correctAnswer: 1,
    explanation: 'ArrayList provides fast random access (O(1)) but slow insertion/deletion. LinkedList provides fast insertion/deletion but slow access.'
  },
  {
    id: 'java-12',
    question: 'What is method overloading?',
    options: [
      'Calling a method too many times',
      'Defining multiple methods with the same name but different parameters',
      'Overriding a parent method',
      'Making a method do too much'
    ],
    correctAnswer: 1,
    explanation: 'Method overloading is defining multiple methods with the same name but different parameter lists (number, type, or order).'
  },
  {
    id: 'java-13',
    question: 'What is method overriding?',
    options: [
      'Same as overloading',
      'Providing a specific implementation of a method in a subclass that is already defined in its parent class',
      'Removing a method',
      'Adding parameters to a method'
    ],
    correctAnswer: 1,
    explanation: 'Method overriding allows a subclass to provide a specific implementation of a method already defined in its parent class.'
  },
  {
    id: 'java-14',
    question: 'What is the `static` keyword in Java?',
    options: [
      'Makes variables unchangeable',
      'Indicates a member belongs to the class rather than instances',
      'Makes methods faster',
      'Creates static web pages'
    ],
    correctAnswer: 1,
    explanation: '`static` means the member belongs to the class itself, not to any specific instance. It can be accessed without creating an object.'
  },
  {
    id: 'java-15',
    question: 'What is exception handling in Java?',
    options: [
      'Preventing all errors',
      'A mechanism to handle runtime errors using try-catch-finally blocks',
      'A debugging tool',
      'A logging framework'
    ],
    correctAnswer: 1,
    explanation: 'Exception handling uses try-catch-finally blocks to handle runtime errors gracefully without crashing the program.'
  },
  {
    id: 'java-16',
    question: 'What is the difference between checked and unchecked exceptions?',
    options: [
      'No difference',
      'Checked exceptions must be handled at compile time; unchecked occur at runtime',
      'Unchecked exceptions must be handled at compile time',
      'Checked exceptions are less severe'
    ],
    correctAnswer: 1,
    explanation: 'Checked exceptions (IOException) must be handled or declared. Unchecked exceptions (RuntimeException) don\'t require explicit handling.'
  },
  {
    id: 'java-17',
    question: 'What is a HashMap in Java?',
    options: [
      'A sorted map',
      'A data structure that stores key-value pairs with O(1) average lookup',
      'A type of list',
      'A thread-safe map'
    ],
    correctAnswer: 1,
    explanation: 'HashMap is a hash table implementation of the Map interface that stores key-value pairs with constant-time average operations.'
  },
  {
    id: 'java-18',
    question: 'What is the `this` keyword in Java?',
    options: [
      'Refers to the parent class',
      'Refers to the current object instance',
      'Creates a new object',
      'Refers to the main method'
    ],
    correctAnswer: 1,
    explanation: '`this` refers to the current object instance. It\'s used to distinguish instance variables from parameters with the same name.'
  },
  {
    id: 'java-19',
    question: 'What is garbage collection in Java?',
    options: [
      'Deleting files',
      'Automatic memory management that reclaims memory from unused objects',
      'Cleaning up code',
      'Removing unused imports'
    ],
    correctAnswer: 1,
    explanation: 'Garbage collection is Java\'s automatic memory management process that identifies and frees memory occupied by unreferenced objects.'
  },
  {
    id: 'java-20',
    question: 'What is the `super` keyword used for?',
    options: [
      'Making a method better',
      'Referring to the parent class\'s members and constructor',
      'Creating superclasses',
      'Accessing static methods'
    ],
    correctAnswer: 1,
    explanation: '`super` refers to the parent class. It\'s used to call the parent\'s constructor, methods, or access parent\'s fields.'
  },
  {
    id: 'java-21',
    question: 'What are generics in Java?',
    options: [
      'Generic methods without specific behavior',
      'Type parameters that allow classes and methods to work with different types safely',
      'A type of variable',
      'A design pattern'
    ],
    correctAnswer: 1,
    explanation: 'Generics enable type parameterization, allowing classes/methods to work with different types while maintaining type safety at compile time.'
  },
  {
    id: 'java-22',
    question: 'What is the Collections Framework in Java?',
    options: [
      'A set of collection classes only',
      'A unified architecture of interfaces and classes for storing and manipulating groups of objects',
      'A database framework',
      'A web framework'
    ],
    correctAnswer: 1,
    explanation: 'The Collections Framework provides a unified architecture of interfaces (List, Set, Map) and implementations for data structures.'
  },
  {
    id: 'java-23',
    question: 'What is multithreading in Java?',
    options: [
      'Running multiple programs',
      'Executing multiple threads concurrently within a single program',
      'Using multiple processors',
      'Running multiple JVMs'
    ],
    correctAnswer: 1,
    explanation: 'Multithreading allows concurrent execution of two or more threads within a program, enabling parallel task execution.'
  },
  {
    id: 'java-24',
    question: 'What is the `synchronized` keyword used for?',
    options: [
      'Synchronizing clocks',
      'Ensuring only one thread can access a block of code or method at a time',
      'Syncing data to disk',
      'Synchronizing databases'
    ],
    correctAnswer: 1,
    explanation: '`synchronized` ensures that only one thread can execute a block of code or method at a time, preventing race conditions.'
  },
  {
    id: 'java-25',
    question: 'What is the Stream API in Java?',
    options: [
      'A file streaming API',
      'A functional-style API for processing sequences of elements with operations like map, filter, reduce',
      'A network streaming API',
      'An audio/video API'
    ],
    correctAnswer: 1,
    explanation: 'The Stream API (Java 8+) provides a functional approach to processing collections with operations like filter, map, and reduce.'
  },
  {
    id: 'java-26',
    question: 'What is a lambda expression in Java?',
    options: [
      'A Greek variable',
      'A concise way to represent an anonymous function (functional interface implementation)',
      'A mathematical formula',
      'A type of loop'
    ],
    correctAnswer: 1,
    explanation: 'Lambda expressions provide a concise way to implement functional interfaces using the -> syntax, e.g., (x) -> x * 2.'
  },
  {
    id: 'java-27',
    question: 'What is the difference between `String`, `StringBuilder`, and `StringBuffer`?',
    options: [
      'All are the same',
      'String is immutable; StringBuilder is mutable and not thread-safe; StringBuffer is mutable and thread-safe',
      'StringBuilder is immutable',
      'StringBuffer is not thread-safe'
    ],
    correctAnswer: 1,
    explanation: 'String is immutable. StringBuilder is mutable and faster (not synchronized). StringBuffer is mutable and thread-safe (synchronized).'
  },
  {
    id: 'java-28',
    question: 'What is an enum in Java?',
    options: [
      'A number type',
      'A special data type that defines a fixed set of constants',
      'An enumeration loop',
      'A counter variable'
    ],
    correctAnswer: 1,
    explanation: 'An enum is a special data type that defines a set of named constants, like days of the week or compass directions.'
  },
  {
    id: 'java-29',
    question: 'What is the `Optional` class in Java?',
    options: [
      'An optional feature',
      'A container that may or may not contain a non-null value, helping avoid NullPointerException',
      'An optional parameter',
      'An optional import'
    ],
    correctAnswer: 1,
    explanation: 'Optional is a container that may or may not hold a value, providing methods to handle null values gracefully.'
  },
  {
    id: 'java-30',
    question: 'What is JDBC?',
    options: [
      'Java Database Creator',
      'Java Database Connectivity - an API for connecting to databases',
      'Java Data Binding Component',
      'Java Dynamic Byte Code'
    ],
    correctAnswer: 1,
    explanation: 'JDBC (Java Database Connectivity) is an API that defines how Java applications interact with databases.'
  },
  {
    id: 'java-31',
    question: 'What is Spring Boot?',
    options: [
      'A boot loader for Java',
      'A framework that simplifies creating production-ready Spring applications',
      'A startup tool',
      'A testing framework'
    ],
    correctAnswer: 1,
    explanation: 'Spring Boot simplifies the creation of production-ready Spring applications with auto-configuration and embedded servers.'
  },
  {
    id: 'java-32',
    question: 'What is the Singleton design pattern?',
    options: [
      'A class with one method',
      'A pattern that ensures a class has only one instance with a global access point',
      'A single variable pattern',
      'A one-time use class'
    ],
    correctAnswer: 1,
    explanation: 'Singleton ensures that a class has only one instance and provides a global point of access to it.'
  },
  {
    id: 'java-33',
    question: 'What is dependency injection?',
    options: [
      'Adding dependencies to pom.xml',
      'A technique where objects receive their dependencies from external sources rather than creating them',
      'Injecting code at runtime',
      'A security vulnerability'
    ],
    correctAnswer: 1,
    explanation: 'Dependency injection is a technique where objects receive their dependencies from external sources, promoting loose coupling.'
  },
  {
    id: 'java-34',
    question: 'What is the difference between `Comparable` and `Comparator`?',
    options: [
      'No difference',
      'Comparable defines natural ordering within the class; Comparator defines external custom ordering',
      'Comparator is built-in; Comparable is external',
      'Comparable is for strings only'
    ],
    correctAnswer: 1,
    explanation: 'Comparable defines natural ordering (compareTo in the class itself). Comparator defines custom external ordering (compare method).'
  },
  {
    id: 'java-35',
    question: 'What is autoboxing in Java?',
    options: [
      'Automatic packaging',
      'Automatic conversion between primitive types and their wrapper classes',
      'Automatically creating objects',
      'Compressing data'
    ],
    correctAnswer: 1,
    explanation: 'Autoboxing is the automatic conversion between primitive types (int) and their wrapper classes (Integer) by the compiler.'
  },
  {
    id: 'java-36',
    question: 'What are annotations in Java?',
    options: [
      'Code comments',
      'Metadata that provides data about the program but isn\'t part of the program itself',
      'Variable labels',
      'Error messages'
    ],
    correctAnswer: 1,
    explanation: 'Annotations are metadata markers (like @Override, @Deprecated) that provide information to the compiler and runtime.'
  },
  {
    id: 'java-37',
    question: 'What is the `volatile` keyword in Java?',
    options: [
      'Makes variables dangerous',
      'Ensures a variable\'s value is always read from main memory, not cached by threads',
      'Makes variables temporary',
      'Deletes variables after use'
    ],
    correctAnswer: 1,
    explanation: '`volatile` ensures that a variable is always read from and written to main memory, guaranteeing visibility across threads.'
  },
  {
    id: 'java-38',
    question: 'What is the Factory design pattern?',
    options: [
      'A manufacturing system',
      'A pattern that provides an interface for creating objects without specifying their exact class',
      'A code generator',
      'A build tool'
    ],
    correctAnswer: 1,
    explanation: 'Factory pattern provides an interface for creating objects without specifying the exact class, delegating instantiation to subclasses.'
  },
  {
    id: 'java-39',
    question: 'What is Maven in Java?',
    options: [
      'A Java IDE',
      'A build automation and dependency management tool',
      'A testing framework',
      'A web server'
    ],
    correctAnswer: 1,
    explanation: 'Maven is a build automation tool that manages project dependencies, compilation, testing, and packaging using a pom.xml file.'
  },
  {
    id: 'java-40',
    question: 'What is the `try-with-resources` statement?',
    options: [
      'Trying to access resources',
      'Automatically closes resources (like streams) when the try block finishes',
      'Retrying failed operations',
      'Loading resources from files'
    ],
    correctAnswer: 1,
    explanation: 'Try-with-resources automatically closes resources that implement AutoCloseable when the try block exits, preventing resource leaks.'
  },
  {
    id: 'java-41',
    question: 'What is polymorphism in Java?',
    options: [
      'Having multiple classes',
      'The ability of an object to take many forms, typically through inheritance',
      'Creating multiple objects',
      'Using multiple data types'
    ],
    correctAnswer: 1,
    explanation: 'Polymorphism allows objects to be treated as instances of their parent class, with the actual method being determined at runtime.'
  },
  {
    id: 'java-42',
    question: 'What is encapsulation in Java?',
    options: [
      'Wrapping code in comments',
      'Bundling data and methods together and restricting direct access to internal state',
      'Creating capsule-shaped objects',
      'Compressing code'
    ],
    correctAnswer: 1,
    explanation: 'Encapsulation bundles data (fields) and methods that operate on that data, restricting direct access via access modifiers.'
  },
  {
    id: 'java-43',
    question: 'What are access modifiers in Java?',
    options: [
      'File permissions',
      'Keywords (public, private, protected, default) that control access to classes, methods, and variables',
      'User authentication methods',
      'Database access controls'
    ],
    correctAnswer: 1,
    explanation: 'Access modifiers (public, private, protected, package-private) control the visibility and accessibility of classes, methods, and fields.'
  },
  {
    id: 'java-44',
    question: 'What is the Observer design pattern?',
    options: [
      'Monitoring system performance',
      'A pattern where an object notifies its dependents of state changes',
      'Debugging code',
      'Watching variables'
    ],
    correctAnswer: 1,
    explanation: 'Observer pattern defines a one-to-many dependency where when one object changes state, all its dependents are notified.'
  },
  {
    id: 'java-45',
    question: 'What is the difference between `HashSet` and `TreeSet`?',
    options: [
      'No difference',
      'HashSet is unordered with O(1) operations; TreeSet is sorted with O(log n) operations',
      'TreeSet is faster',
      'HashSet maintains insertion order'
    ],
    correctAnswer: 1,
    explanation: 'HashSet is unordered with constant-time operations. TreeSet maintains elements in sorted order with logarithmic-time operations.'
  },
  {
    id: 'java-46',
    question: 'What is JUnit used for?',
    options: [
      'Building user interfaces',
      'Unit testing Java applications',
      'Managing dependencies',
      'Deploying applications'
    ],
    correctAnswer: 1,
    explanation: 'JUnit is the most widely used testing framework for Java, providing annotations and assertions for writing unit tests.'
  },
  {
    id: 'java-47',
    question: 'What is the `transient` keyword?',
    options: [
      'A temporary variable',
      'Prevents a field from being serialized',
      'Makes a variable change constantly',
      'A type of modifier'
    ],
    correctAnswer: 1,
    explanation: '`transient` marks a field to be excluded during serialization, so it won\'t be saved when the object is serialized.'
  },
  {
    id: 'java-48',
    question: 'What is a functional interface in Java?',
    options: [
      'An interface with many methods',
      'An interface with exactly one abstract method, usable with lambda expressions',
      'An interface for functions only',
      'A deprecated interface type'
    ],
    correctAnswer: 1,
    explanation: 'A functional interface has exactly one abstract method and can be used as the target for lambda expressions (e.g., Runnable, Comparator).'
  },
  {
    id: 'java-49',
    question: 'What is the `var` keyword in Java (10+)?',
    options: [
      'Same as JavaScript var',
      'Local variable type inference that lets the compiler determine the type',
      'A global variable declaration',
      'A mutable variable'
    ],
    correctAnswer: 1,
    explanation: '`var` (Java 10+) enables local variable type inference, allowing the compiler to infer the type from the assigned value.'
  },
  {
    id: 'java-50',
    question: 'What is the MVC (Model-View-Controller) pattern?',
    options: [
      'A Java-specific pattern',
      'An architectural pattern separating data (Model), UI (View), and logic (Controller)',
      'A testing pattern',
      'A database pattern'
    ],
    correctAnswer: 1,
    explanation: 'MVC separates an application into Model (data/logic), View (UI/presentation), and Controller (handles input and updates model).'
  }
];
