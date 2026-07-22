import { Question } from '../types';

export const pythonQuestions: Question[] = [
  {
    id: 'py-1',
    question: 'What is the output of `print(type([]))`?',
    options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"],
    correctAnswer: 1,
    explanation: 'In Python, [] creates a list, so type([]) returns <class \'list\'>.'
  },
  {
    id: 'py-2',
    question: 'Which keyword is used to define a function in Python?',
    options: ['function', 'func', 'def', 'define'],
    correctAnswer: 2,
    explanation: 'The `def` keyword is used to define functions in Python.'
  },
  {
    id: 'py-3',
    question: 'What is a list comprehension in Python?',
    options: [
      'A way to understand lists',
      'A concise way to create lists using a single line of code',
      'A method to sort lists',
      'A list documentation tool'
    ],
    correctAnswer: 1,
    explanation: 'List comprehension provides a concise way to create lists, e.g., [x**2 for x in range(10)].'
  },
  {
    id: 'py-4',
    question: 'What is the difference between a list and a tuple in Python?',
    options: [
      'No difference',
      'Lists are mutable, tuples are immutable',
      'Tuples are mutable, lists are immutable',
      'Lists can only hold strings'
    ],
    correctAnswer: 1,
    explanation: 'Lists are mutable (can be modified), while tuples are immutable (cannot be changed after creation).'
  },
  {
    id: 'py-5',
    question: 'What does the `__init__` method do in a Python class?',
    options: [
      'Deletes the object',
      'Initializes the object\'s attributes when created',
      'Imports modules',
      'Prints the object'
    ],
    correctAnswer: 1,
    explanation: '__init__ is the constructor method that initializes the object\'s attributes when a new instance is created.'
  },
  {
    id: 'py-6',
    question: 'What is a decorator in Python?',
    options: [
      'A CSS styling tool',
      'A function that modifies the behavior of another function',
      'A way to add comments',
      'A type of variable'
    ],
    correctAnswer: 1,
    explanation: 'A decorator is a function that takes another function and extends its behavior without explicitly modifying it, using @decorator syntax.'
  },
  {
    id: 'py-7',
    question: 'What does `pip` stand for in Python?',
    options: [
      'Python Installation Program',
      'Pip Installs Packages',
      'Python Interface Protocol',
      'Package Import Program'
    ],
    correctAnswer: 1,
    explanation: 'pip is a recursive acronym for "Pip Installs Packages" and is the standard package manager for Python.'
  },
  {
    id: 'py-8',
    question: 'What is the output of `print(2 ** 3)`?',
    options: ['6', '8', '5', '23'],
    correctAnswer: 1,
    explanation: '** is the exponentiation operator in Python. 2 ** 3 = 2³ = 8.'
  },
  {
    id: 'py-9',
    question: 'What is a virtual environment in Python?',
    options: [
      'A virtual machine',
      'An isolated environment for managing project-specific dependencies',
      'A cloud server',
      'A type of IDE'
    ],
    correctAnswer: 1,
    explanation: 'A virtual environment is an isolated Python environment that allows you to manage dependencies for different projects separately.'
  },
  {
    id: 'py-10',
    question: 'Which data structure uses key-value pairs in Python?',
    options: ['List', 'Tuple', 'Dictionary', 'Set'],
    correctAnswer: 2,
    explanation: 'Dictionaries store data as key-value pairs, e.g., {"name": "John", "age": 30}.'
  },
  {
    id: 'py-11',
    question: 'What does `self` refer to in a Python class?',
    options: [
      'The class itself',
      'The current instance of the class',
      'A global variable',
      'The parent class'
    ],
    correctAnswer: 1,
    explanation: '`self` refers to the current instance of the class and is used to access instance attributes and methods.'
  },
  {
    id: 'py-12',
    question: 'What is the purpose of `try-except` in Python?',
    options: [
      'To loop through code',
      'To handle exceptions and errors gracefully',
      'To test code speed',
      'To import modules'
    ],
    correctAnswer: 1,
    explanation: 'try-except blocks handle exceptions gracefully, preventing the program from crashing when errors occur.'
  },
  {
    id: 'py-13',
    question: 'What is a lambda function in Python?',
    options: [
      'A named function',
      'A small anonymous function defined with the lambda keyword',
      'A function from the math library',
      'A recursive function'
    ],
    correctAnswer: 1,
    explanation: 'Lambda functions are small anonymous functions defined with the lambda keyword, e.g., lambda x: x * 2.'
  },
  {
    id: 'py-14',
    question: 'What does the `with` statement do in Python?',
    options: [
      'Creates a loop',
      'Simplifies resource management by ensuring proper cleanup (context manager)',
      'Imports modules',
      'Defines a class'
    ],
    correctAnswer: 1,
    explanation: 'The `with` statement simplifies resource management (like file handling) by ensuring proper setup and cleanup.'
  },
  {
    id: 'py-15',
    question: 'What is the Global Interpreter Lock (GIL) in Python?',
    options: [
      'A security feature',
      'A mutex that allows only one thread to execute Python bytecode at a time',
      'A global variable lock',
      'A file locking mechanism'
    ],
    correctAnswer: 1,
    explanation: 'The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time, limiting true multi-threading.'
  },
  {
    id: 'py-16',
    question: 'What is the difference between `append()` and `extend()` for lists?',
    options: [
      'No difference',
      '`append()` adds a single element; `extend()` adds each element of an iterable individually',
      '`extend()` adds a single element; `append()` adds multiple',
      '`append()` returns a new list'
    ],
    correctAnswer: 1,
    explanation: 'append() adds its argument as a single element. extend() iterates over its argument and adds each element.'
  },
  {
    id: 'py-17',
    question: 'What is a generator in Python?',
    options: [
      'A function that generates random numbers',
      'A function that uses yield to return values lazily one at a time',
      'A class that creates objects',
      'A module for generating data'
    ],
    correctAnswer: 1,
    explanation: 'Generators are functions that use yield to produce a sequence of values lazily, one at a time, saving memory.'
  },
  {
    id: 'py-18',
    question: 'What does `*args` do in a function definition?',
    options: [
      'Creates a pointer',
      'Allows a function to accept any number of positional arguments',
      'Multiplies arguments',
      'Makes arguments optional'
    ],
    correctAnswer: 1,
    explanation: '*args allows a function to accept any number of positional arguments, which are passed as a tuple.'
  },
  {
    id: 'py-19',
    question: 'What does `**kwargs` do in a function definition?',
    options: [
      'Creates keyword shortcuts',
      'Allows a function to accept any number of keyword arguments',
      'Powers arguments',
      'Makes all arguments required'
    ],
    correctAnswer: 1,
    explanation: '**kwargs allows a function to accept any number of keyword arguments, which are passed as a dictionary.'
  },
  {
    id: 'py-20',
    question: 'What is the purpose of `__name__ == "__main__"` in Python?',
    options: [
      'Names the program',
      'Checks if the script is being run directly (not imported)',
      'Creates the main function',
      'Sets the module name'
    ],
    correctAnswer: 1,
    explanation: 'This idiom checks if the script is being run directly. When imported, __name__ is set to the module name, not "__main__".'
  },
  {
    id: 'py-21',
    question: 'What is `NumPy` primarily used for?',
    options: [
      'Web development',
      'Numerical computing with support for large multi-dimensional arrays',
      'Database management',
      'GUI development'
    ],
    correctAnswer: 1,
    explanation: 'NumPy is a library for numerical computing that provides support for large, multi-dimensional arrays and mathematical functions.'
  },
  {
    id: 'py-22',
    question: 'What is `pandas` used for in Python?',
    options: [
      'Image processing',
      'Data manipulation and analysis with DataFrames',
      'Machine learning',
      'Web scraping only'
    ],
    correctAnswer: 1,
    explanation: 'pandas provides data structures (like DataFrames) and tools for data manipulation and analysis.'
  },
  {
    id: 'py-23',
    question: 'What does `enumerate()` do?',
    options: [
      'Counts the elements in a list',
      'Returns an iterator of tuples containing index and value pairs',
      'Numbers the lines of code',
      'Creates a numbered list'
    ],
    correctAnswer: 1,
    explanation: 'enumerate() adds a counter to an iterable, returning tuples of (index, value) pairs.'
  },
  {
    id: 'py-24',
    question: 'What is a Python `set`?',
    options: [
      'An ordered collection',
      'An unordered collection of unique elements',
      'A type of list',
      'A configuration object'
    ],
    correctAnswer: 1,
    explanation: 'A set is an unordered collection of unique elements. Duplicates are automatically removed.'
  },
  {
    id: 'py-25',
    question: 'What is inheritance in Python OOP?',
    options: [
      'Copying code between files',
      'A class deriving properties and methods from another class',
      'Importing modules',
      'Creating backup copies of classes'
    ],
    correctAnswer: 1,
    explanation: 'Inheritance allows a child class to inherit attributes and methods from a parent class, promoting code reuse.'
  },
  {
    id: 'py-26',
    question: 'What does `map()` do in Python?',
    options: [
      'Creates a geographic map',
      'Applies a function to every item of an iterable and returns a map object',
      'Maps variables to values',
      'Creates a dictionary'
    ],
    correctAnswer: 1,
    explanation: 'map() applies a given function to each item of an iterable and returns a map object (iterator).'
  },
  {
    id: 'py-27',
    question: 'What is the difference between `is` and `==` in Python?',
    options: [
      'No difference',
      '`is` checks identity (same object); `==` checks equality (same value)',
      '`==` checks identity; `is` checks equality',
      '`is` is faster than `==`'
    ],
    correctAnswer: 1,
    explanation: '`is` checks if two variables point to the same object in memory, while `==` checks if values are equal.'
  },
  {
    id: 'py-28',
    question: 'What is slicing in Python?',
    options: [
      'Cutting strings into characters',
      'Extracting a portion of a sequence using [start:stop:step] syntax',
      'Dividing code into functions',
      'Splitting files'
    ],
    correctAnswer: 1,
    explanation: 'Slicing extracts a portion of a sequence (list, string, tuple) using [start:stop:step] notation.'
  },
  {
    id: 'py-29',
    question: 'What is `Flask` in Python?',
    options: [
      'A data science library',
      'A lightweight web framework',
      'A testing tool',
      'A database ORM'
    ],
    correctAnswer: 1,
    explanation: 'Flask is a lightweight WSGI web application framework used for building web applications and APIs.'
  },
  {
    id: 'py-30',
    question: 'What does the `@staticmethod` decorator do?',
    options: [
      'Makes a method faster',
      'Defines a method that doesn\'t access instance or class state',
      'Makes a method private',
      'Prevents method overriding'
    ],
    correctAnswer: 1,
    explanation: '@staticmethod defines a method that doesn\'t receive an implicit first argument (no self or cls), behaving like a regular function.'
  },
  {
    id: 'py-31',
    question: 'What is the `range()` function used for?',
    options: [
      'Measuring distance',
      'Generating a sequence of numbers',
      'Creating arrays',
      'Setting variable limits'
    ],
    correctAnswer: 1,
    explanation: 'range() generates a sequence of numbers, commonly used in for loops. It takes start, stop, and step parameters.'
  },
  {
    id: 'py-32',
    question: 'What is `f-string` formatting in Python?',
    options: [
      'A file string type',
      'String formatting using f"..." with embedded expressions in {}',
      'A function string',
      'A format for JSON strings'
    ],
    correctAnswer: 1,
    explanation: 'F-strings (f"...") allow embedding expressions directly inside string literals using curly braces, e.g., f"Hello {name}".'
  },
  {
    id: 'py-33',
    question: 'What does `zip()` do in Python?',
    options: [
      'Compresses files',
      'Combines multiple iterables element-wise into tuples',
      'Unzips archives',
      'Sorts elements'
    ],
    correctAnswer: 1,
    explanation: 'zip() takes multiple iterables and returns an iterator of tuples, pairing elements from each iterable by position.'
  },
  {
    id: 'py-34',
    question: 'What is a Python package?',
    options: [
      'A compressed file',
      'A directory containing modules and an __init__.py file',
      'A single Python file',
      'An executable program'
    ],
    correctAnswer: 1,
    explanation: 'A Python package is a directory containing Python modules and typically an __init__.py file that marks it as a package.'
  },
  {
    id: 'py-35',
    question: 'What is the purpose of `assert` in Python?',
    options: [
      'To print values',
      'To test if a condition is true, raising AssertionError if false',
      'To assign values',
      'To import modules'
    ],
    correctAnswer: 1,
    explanation: 'assert tests a condition and raises an AssertionError if the condition is False. Used for debugging and testing.'
  },
  {
    id: 'py-36',
    question: 'What is `Django` in Python?',
    options: [
      'A machine learning library',
      'A high-level web framework that follows the MVT pattern',
      'A data visualization tool',
      'A testing framework'
    ],
    correctAnswer: 1,
    explanation: 'Django is a high-level Python web framework that encourages rapid development following the Model-View-Template (MVT) pattern.'
  },
  {
    id: 'py-37',
    question: 'What does `filter()` do in Python?',
    options: [
      'Removes duplicates',
      'Filters elements of an iterable based on a function that returns True/False',
      'Sorts elements',
      'Transforms elements'
    ],
    correctAnswer: 1,
    explanation: 'filter() constructs an iterator from elements of an iterable for which a function returns True.'
  },
  {
    id: 'py-38',
    question: 'What is multiple inheritance in Python?',
    options: [
      'Creating multiple objects',
      'A class inheriting from more than one parent class',
      'Multiple instances of a class',
      'Importing multiple modules'
    ],
    correctAnswer: 1,
    explanation: 'Multiple inheritance allows a class to inherit from more than one parent class, combining their attributes and methods.'
  },
  {
    id: 'py-39',
    question: 'What is `pickle` used for in Python?',
    options: [
      'Data visualization',
      'Serializing and deserializing Python objects to/from byte streams',
      'Encrypting data',
      'Parsing HTML'
    ],
    correctAnswer: 1,
    explanation: 'pickle serializes (pickles) Python objects into byte streams and deserializes (unpickles) them back into objects.'
  },
  {
    id: 'py-40',
    question: 'What does the `pass` statement do?',
    options: [
      'Passes a variable to a function',
      'Acts as a placeholder that does nothing',
      'Skips to the next iteration',
      'Ends the program'
    ],
    correctAnswer: 1,
    explanation: 'pass is a null operation — it does nothing. It\'s used as a placeholder in empty code blocks.'
  },
  {
    id: 'py-41',
    question: 'What is type hinting in Python?',
    options: [
      'Forcing variable types',
      'Adding annotations to indicate expected types without enforcement',
      'Converting types automatically',
      'A way to create new types'
    ],
    correctAnswer: 1,
    explanation: 'Type hints (PEP 484) allow you to annotate expected types for function parameters and return values, improving code readability.'
  },
  {
    id: 'py-42',
    question: 'What is `asyncio` in Python?',
    options: [
      'A synchronization tool',
      'A library for writing asynchronous code using async/await',
      'An audio processing library',
      'A file I/O library'
    ],
    correctAnswer: 1,
    explanation: 'asyncio is a library for writing concurrent code using the async/await syntax for asynchronous I/O operations.'
  },
  {
    id: 'py-43',
    question: 'What is the difference between a shallow copy and a deep copy?',
    options: [
      'No difference',
      'Shallow copy copies references; deep copy copies the object and all nested objects',
      'Deep copy copies references; shallow copy copies all objects',
      'Shallow copy is faster but creates more memory'
    ],
    correctAnswer: 1,
    explanation: 'Shallow copy creates a new object but references nested objects. Deep copy creates a completely independent copy of all nested objects.'
  },
  {
    id: 'py-44',
    question: 'What is a `classmethod` in Python?',
    options: [
      'A regular method',
      'A method bound to the class rather than its instance, receiving cls as first parameter',
      'A private method',
      'A static method'
    ],
    correctAnswer: 1,
    explanation: '@classmethod defines a method bound to the class, not the instance. It receives the class (cls) as its first parameter.'
  },
  {
    id: 'py-45',
    question: 'What does `__str__` method do in a Python class?',
    options: [
      'Converts to integer',
      'Returns a human-readable string representation of the object',
      'Creates a new string',
      'Compares strings'
    ],
    correctAnswer: 1,
    explanation: '__str__ returns a human-readable string representation of the object, called by str() and print().'
  },
  {
    id: 'py-46',
    question: 'What is a context manager in Python?',
    options: [
      'A variable manager',
      'An object that manages resources using __enter__ and __exit__ methods',
      'A class manager',
      'A memory manager'
    ],
    correctAnswer: 1,
    explanation: 'Context managers handle resource setup and cleanup using __enter__ and __exit__ methods, typically used with the `with` statement.'
  },
  {
    id: 'py-47',
    question: 'What is `pytest` used for?',
    options: [
      'Web development',
      'Testing Python code with a simple and scalable framework',
      'Data analysis',
      'Package management'
    ],
    correctAnswer: 1,
    explanation: 'pytest is a testing framework that makes it easy to write simple and scalable tests for Python code.'
  },
  {
    id: 'py-48',
    question: 'What does `yield` do in Python?',
    options: [
      'Returns a value and terminates the function',
      'Produces a value and suspends the function, maintaining its state',
      'Creates a new variable',
      'Imports a module'
    ],
    correctAnswer: 1,
    explanation: 'yield produces a value and suspends the generator function\'s execution, maintaining its state for the next call.'
  },
  {
    id: 'py-49',
    question: 'What is `PEP 8`?',
    options: [
      'A Python version',
      'Python\'s official style guide for writing clean, readable code',
      'A Python package',
      'A Python error code'
    ],
    correctAnswer: 1,
    explanation: 'PEP 8 is the official style guide for Python code, providing conventions for formatting, naming, and structuring code.'
  },
  {
    id: 'py-50',
    question: 'What is monkey patching in Python?',
    options: [
      'A debugging technique',
      'Dynamically modifying a class or module at runtime',
      'A testing pattern',
      'A code optimization technique'
    ],
    correctAnswer: 1,
    explanation: 'Monkey patching is dynamically modifying or extending a class or module at runtime, often used in testing.'
  }
];
