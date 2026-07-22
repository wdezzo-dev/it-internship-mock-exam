import { Question } from '../types';

export const databaseQuestions: Question[] = [
  {
    id: 'db-1',
    question: 'What SQL clause is used to filter records?',
    options: ['ORDER BY', 'WHERE', 'GROUP BY', 'HAVING'],
    correctAnswer: 1,
    explanation: 'The WHERE clause filters records based on specified conditions, e.g., `SELECT * FROM users WHERE age > 18`.'
  },
  {
    id: 'db-2',
    question: 'What is the difference between WHERE and HAVING?',
    options: [
      'No difference',
      'WHERE filters rows before grouping; HAVING filters groups after GROUP BY',
      'HAVING filters rows before GROUP BY',
      'WHERE is only for NULL values'
    ],
    correctAnswer: 1,
    explanation: 'WHERE filters individual rows before aggregation. HAVING filters aggregated groups after GROUP BY is applied.'
  },
  {
    id: 'db-3',
    question: 'Which SQL statement is used to extract data from a database?',
    options: ['GET', 'EXTRACT', 'SELECT', 'PULL'],
    correctAnswer: 2,
    explanation: 'SELECT is the SQL statement used to query and retrieve data from one or more tables.'
  },
  {
    id: 'db-4',
    question: 'What does `SELECT * FROM users` return?',
    options: [
      'Only user IDs',
      'All columns and all rows from the users table',
      'Only the first row',
      'Column names only'
    ],
    correctAnswer: 1,
    explanation: '`SELECT *` selects all columns, and without a WHERE clause, it returns all rows from the table.'
  },
  {
    id: 'db-5',
    question: 'What is a primary key?',
    options: [
      'Any column in a table',
      'A column (or set) that uniquely identifies each row, cannot be NULL, must be unique',
      'A foreign key',
      'The first column'
    ],
    correctAnswer: 1,
    explanation: 'A primary key uniquely identifies each row. It must contain unique values and cannot be NULL.'
  },
  {
    id: 'db-6',
    question: 'What is a foreign key?',
    options: [
      'A key from another country',
      'A column that references the primary key of another table, creating a relationship',
      'An alternate key',
      'A secondary password'
    ],
    correctAnswer: 1,
    explanation: 'A foreign key establishes a link between two tables by referencing the primary key of another table.'
  },
  {
    id: 'db-7',
    question: 'What does the JOIN clause do?',
    options: [
      'Deletes tables',
      'Combines rows from two or more tables based on a related column',
      'Creates a new table',
      'Updates data'
    ],
    correctAnswer: 1,
    explanation: 'JOIN combines rows from multiple tables based on a related column between them (like matching customer_id).'
  },
  {
    id: 'db-8',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    options: [
      'No difference',
      'INNER JOIN returns only matching rows; LEFT JOIN returns all left table rows plus matching right rows',
      'LEFT JOIN returns only matching rows',
      'INNER JOIN is slower'
    ],
    correctAnswer: 1,
    explanation: 'INNER JOIN returns only rows with matches in both tables. LEFT JOIN returns all rows from the left table, with NULLs for non-matches.'
  },
  {
    id: 'db-9',
    question: 'Which aggregate function returns the number of rows?',
    options: ['SUM()', 'COUNT()', 'AVG()', 'TOTAL()'],
    correctAnswer: 1,
    explanation: 'COUNT() returns the number of rows. Example: `SELECT COUNT(*) FROM users` returns total user count.'
  },
  {
    id: 'db-10',
    question: 'What does GROUP BY do?',
    options: [
      'Groups tables together',
      'Groups rows with the same values into summary rows, used with aggregate functions',
      'Sorts data',
      'Filters rows'
    ],
    correctAnswer: 1,
    explanation: 'GROUP BY groups rows with identical values in specified columns, typically used with aggregate functions (COUNT, SUM, AVG).'
  },
  {
    id: 'db-11',
    question: 'Write a query to get the average salary per department',
    options: [
      'SELECT AVG(salary) FROM employees',
      'SELECT department, AVG(salary) FROM employees GROUP BY department',
      'SELECT department FROM employees WHERE AVG(salary)',
      'SELECT AVG(salary) GROUP BY department'
    ],
    correctAnswer: 1,
    explanation: 'Use GROUP BY with the aggregate AVG() function: `SELECT department, AVG(salary) FROM employees GROUP BY department`.'
  },
  {
    id: 'db-12',
    question: 'What is normalization in databases?',
    options: [
      'Making all data the same',
      'Organizing data to reduce redundancy and improve data integrity through normal forms',
      'Deleting old data',
      'Converting data types'
    ],
    correctAnswer: 1,
    explanation: 'Normalization organizes data into tables to minimize redundancy and dependency (1NF, 2NF, 3NF, BCNF).'
  },
  {
    id: 'db-13',
    question: 'What is 1NF (First Normal Form)?',
    options: [
      'Tables must have primary keys',
      'Each column contains atomic (indivisible) values, no repeating groups',
      'All tables must be related',
      'No foreign keys allowed'
    ],
    correctAnswer: 1,
    explanation: '1NF requires atomic values in each column and no repeating groups. Each cell must contain a single value.'
  },
  {
    id: 'db-14',
    question: 'What is 3NF (Third Normal Form)?',
    options: [
      'Three tables minimum',
      'In 2NF and no transitive dependencies (non-key columns don\'t depend on other non-key columns)',
      'Three columns minimum',
      'Three primary keys'
    ],
    correctAnswer: 1,
    explanation: '3NF requires 2NF compliance plus no transitive dependencies: non-key attributes must depend only on the primary key.'
  },
  {
    id: 'db-15',
    question: 'What is an index in a database?',
    options: [
      'A table of contents',
      'A data structure that speeds up data retrieval at the cost of storage and write performance',
      'A primary key',
      'A unique constraint'
    ],
    correctAnswer: 1,
    explanation: 'An index is a data structure (often B-tree) that speeds up SELECT queries but slows down INSERT/UPDATE and uses extra storage.'
  },
  {
    id: 'db-16',
    question: 'When should you NOT create an index?',
    options: [
      'On columns used in WHERE clauses',
      'On small tables or columns with low cardinality (few unique values)',
      'On foreign keys',
      'On primary keys'
    ],
    correctAnswer: 1,
    explanation: 'Avoid indexes on small tables, columns with few unique values (boolean), or tables with frequent heavy writes.'
  },
  {
    id: 'db-17',
    question: 'What does ACID stand for in databases?',
    options: [
      'Automated, Controlled, Isolated, Durable',
      'Atomicity, Consistency, Isolation, Durability',
      'Advanced Computing In Databases',
      'Access, Create, Insert, Delete'
    ],
    correctAnswer: 1,
    explanation: 'ACID properties ensure reliable transactions: Atomicity (all or nothing), Consistency, Isolation, Durability.'
  },
  {
    id: 'db-18',
    question: 'What is Atomicity in ACID?',
    options: [
      'Data is atomic (indivisible)',
      'A transaction is all or nothing - either all operations complete or none do',
      'Transactions are atomic size',
      'Only one transaction at a time'
    ],
    correctAnswer: 1,
    explanation: 'Atomicity means a transaction is indivisible - all operations succeed, or if any fail, the entire transaction is rolled back.'
  },
  {
    id: 'db-19',
    question: 'What is a transaction in SQL?',
    options: [
      'A financial operation',
      'A unit of work (one or more SQL statements) treated as a single atomic unit',
      'A database backup',
      'A data migration'
    ],
    correctAnswer: 1,
    explanation: 'A transaction groups SQL statements that either all succeed (COMMIT) or all fail (ROLLBACK) together.'
  },
  {
    id: 'db-20',
    question: 'What does COMMIT do in SQL?',
    options: [
      'Cancels a transaction',
      'Permanently saves all changes made in the current transaction',
      'Creates a backup',
      'Starts a new transaction'
    ],
    correctAnswer: 1,
    explanation: 'COMMIT permanently saves all changes made during the current transaction to the database.'
  },
  {
    id: 'db-21',
    question: 'What does ROLLBACK do in SQL?',
    options: [
      'Saves changes',
      'Undoes all changes made in the current transaction, restoring previous state',
      'Deletes the database',
      'Creates a backup'
    ],
    correctAnswer: 1,
    explanation: 'ROLLBACK undoes all changes made in the current transaction, returning the database to its pre-transaction state.'
  },
  {
    id: 'db-22',
    question: 'What is a deadlock in a database?',
    options: [
      'A broken lock',
      'When two or more transactions wait for each other to release locks, creating a circular dependency',
      'A security feature',
      'A password expiration'
    ],
    correctAnswer: 1,
    explanation: 'A deadlock occurs when transactions form a circular wait for each other\'s locks. The DBMS detects and resolves it (by killing one).'
  },
  {
    id: 'db-23',
    question: 'What is the difference between DELETE and TRUNCATE?',
    options: [
      'No difference',
      'DELETE removes specific rows (logged, can use WHERE); TRUNCATE removes all rows (faster, minimal logging)',
      'TRUNCATE can filter rows',
      'DELETE is faster'
    ],
    correctAnswer: 1,
    explanation: 'DELETE removes rows individually with full logging, can use WHERE. TRUNCATE removes all rows with minimal logging, much faster.'
  },
  {
    id: 'db-24',
    question: 'What is a view in a database?',
    options: [
      'A graphical display',
      'A virtual table based on a saved SQL query, not storing data itself',
      'A user interface',
      'A report'
    ],
    correctAnswer: 1,
    explanation: 'A view is a virtual table based on a saved SELECT query. It doesn\'t store data but presents data from underlying tables.'
  },
  {
    id: 'db-25',
    question: 'What is a stored procedure?',
    options: [
      'A saved file',
      'A precompiled SQL code block stored in the database that can be called with parameters',
      'A backup procedure',
      'A maintenance script'
    ],
    correctAnswer: 1,
    explanation: 'A stored procedure is precompiled SQL code saved in the database, callable with parameters, improving performance and security.'
  },
  {
    id: 'db-26',
    question: 'What is the difference between a stored procedure and a function?',
    options: [
      'No difference',
      'Functions must return a value; procedures don\'t have to return values',
      'Procedures are faster',
      'Functions can modify data'
    ],
    correctAnswer: 1,
    explanation: 'Functions must return a value and can be used in SELECT. Procedures may or may not return values and are called with EXECUTE.'
  },
  {
    id: 'db-27',
    question: 'What is SQL injection?',
    options: [
      'Injecting SQL code',
      'A security attack where malicious SQL code is inserted through application inputs',
      'A way to speed up queries',
      'Adding new tables'
    ],
    correctAnswer: 1,
    explanation: 'SQL injection is a security vulnerability where attackers insert malicious SQL through application inputs to manipulate the database.'
  },
  {
    id: 'db-28',
    question: 'How can you prevent SQL injection?',
    options: [
      'Stronger passwords',
      'Using parameterized queries (prepared statements) instead of string concatenation',
      'Encrypting the database',
      'Using a firewall only'
    ],
    correctAnswer: 1,
    explanation: 'Parameterized queries separate SQL code from user input, preventing malicious input from being executed as SQL.'
  },
  {
    id: 'db-29',
    question: 'What is a NoSQL database?',
    options: [
      'A database without SQL support',
      'A non-relational database designed for flexible schemas and horizontal scaling',
      'A SQL replacement',
      'A file-based database'
    ],
    correctAnswer: 1,
    explanation: 'NoSQL databases (MongoDB, Cassandra, Redis) are non-relational, offering flexible schemas and horizontal scaling for specific use cases.'
  },
  {
    id: 'db-30',
    question: 'When would you choose NoSQL over SQL?',
    options: [
      'Always choose NoSQL',
      'When you need flexible schemas, horizontal scaling, or handle unstructured/semi-structured data',
      'For financial systems',
      'When data is highly structured'
    ],
    correctAnswer: 1,
    explanation: 'Choose NoSQL for flexible schemas, horizontal scaling, unstructured data, or when rapid development is needed.'
  },
  {
    id: 'db-31',
    question: 'What type of NoSQL database is MongoDB?',
    options: ['Key-value store', 'Document database', 'Column-family store', 'Graph database'],
    correctAnswer: 1,
    explanation: 'MongoDB is a document database that stores data in JSON-like documents (BSON), offering flexible schemas.'
  },
  {
    id: 'db-32',
    question: 'What is the purpose of the DISTINCT keyword in SQL?',
    options: [
      'Making data unique',
      'Removing duplicate rows from the query result',
      'Creating unique indexes',
      'Filtering NULL values'
    ],
    correctAnswer: 1,
    explanation: 'DISTINCT removes duplicate rows from the result set: `SELECT DISTINCT city FROM customers`.'
  },
  {
    id: 'db-33',
    question: 'What does ORDER BY do in SQL?',
    options: [
      'Orders data randomly',
      'Sorts the result set by one or more columns in ascending (ASC) or descending (DESC) order',
      'Orders tables',
      'Creates indexes'
    ],
    correctAnswer: 1,
    explanation: 'ORDER BY sorts results: `SELECT * FROM users ORDER BY name ASC, age DESC` sorts by name ascending, then age descending.'
  },
  {
    id: 'db-34',
    question: 'What is a subquery?',
    options: [
      'A smaller query',
      'A query nested inside another query, used to provide results for the outer query',
      'A quick query',
      'A backup query'
    ],
    correctAnswer: 1,
    explanation: 'A subquery is a query inside another query, used to filter, compare, or provide data for the outer query.'
  },
  {
    id: 'db-35',
    question: 'What is a CTE (Common Table Expression)?',
    options: [
      'A table of contents',
      'A temporary named result set defined with WITH clause, used within a single query',
      'A permanent table',
      'A view'
    ],
    correctAnswer: 1,
    explanation: 'A CTE (WITH clause) creates a temporary named result set for the duration of a single query, improving readability.'
  },
  {
    id: 'db-36',
    question: 'What does the UNION operator do?',
    options: [
      'Joins tables horizontally',
      'Combines results of two SELECT statements vertically, removing duplicates',
      'Creates a union of databases',
      'Merges columns'
    ],
    correctAnswer: 1,
    explanation: 'UNION combines result sets vertically (appending rows). Use UNION ALL to keep duplicates.'
  },
  {
    id: 'db-37',
    question: 'What is a database schema?',
    options: [
      'A database backup',
      'The logical structure defining tables, columns, data types, constraints, and relationships',
      'A security policy',
      'A user account'
    ],
    correctAnswer: 1,
    explanation: 'A schema defines the logical structure: tables, columns, data types, constraints, indexes, and relationships.'
  },
  {
    id: 'db-38',
    question: 'What are constraints in a database?',
    options: [
      'Performance limits',
      'Rules enforcing data integrity: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK',
      'Storage limits',
      'Speed limits'
    ],
    correctAnswer: 1,
    explanation: 'Constraints enforce data integrity: NOT NULL (no nulls), UNIQUE (no duplicates), PRIMARY KEY, FOREIGN KEY, CHECK (custom rules).'
  },
  {
    id: 'db-39',
    question: 'What is denormalization?',
    options: [
      'The opposite of normalization',
      'Intentionally adding redundancy to improve read performance at the cost of update complexity',
      'Removing all tables',
      'Deleting indexes'
    ],
    correctAnswer: 1,
    explanation: 'Denormalization adds redundancy to optimize read performance. Common in data warehouses and read-heavy applications.'
  },
  {
    id: 'db-40',
    question: 'What is database sharding?',
    options: [
      'Breaking a database',
      'Horizontally partitioning data across multiple database instances for scalability',
      'Encrypting data',
      'Backing up data'
    ],
    correctAnswer: 1,
    explanation: 'Sharding splits data horizontally across multiple servers (shards), enabling horizontal scaling for large datasets.'
  },
  {
    id: 'db-41',
    question: 'What is database replication?',
    options: [
      'Copying the database software',
      'Copying data from one database to others for redundancy, high availability, and read scaling',
      'Backing up data',
      'Duplicating queries'
    ],
    correctAnswer: 1,
    explanation: 'Replication copies data between database servers for high availability, disaster recovery, and read scaling.'
  },
  {
    id: 'db-42',
    question: 'What is the difference between master-slave and master-master replication?',
    options: [
      'No difference',
      'Master-slave: one writes, others read. Master-master: all can write',
      'Master-master is more common',
      'Master-slave allows writes everywhere'
    ],
    correctAnswer: 1,
    explanation: 'Master-slave: one primary for writes, replicas for reads. Master-master: all nodes can accept writes (more complex conflict handling).'
  },
  {
    id: 'db-43',
    question: 'What is the CAP theorem?',
    options: [
      'A SQL theorem',
      'A distributed system can only guarantee 2 of 3: Consistency, Availability, Partition tolerance',
      'A database design theorem',
      'A security theorem'
    ],
    correctAnswer: 1,
    explanation: 'CAP theorem states distributed systems can provide at most 2 of: Consistency (all nodes see same data), Availability, Partition tolerance.'
  },
  {
    id: 'db-44',
    question: 'What is a connection pool?',
    options: [
      'A swimming pool',
      'A cache of reusable database connections, reducing overhead of creating new ones',
      'A group of databases',
      'A network connection'
    ],
    correctAnswer: 1,
    explanation: 'A connection pool maintains reusable database connections, improving performance by avoiding the overhead of creating new connections.'
  },
  {
    id: 'db-45',
    question: 'What is an ORM (Object-Relational Mapping)?',
    options: [
      'A database type',
      'A technique mapping database tables to programming language objects, allowing DB operations through code',
      'A query language',
      'A backup tool'
    ],
    correctAnswer: 1,
    explanation: 'ORM maps tables to classes and rows to objects, enabling database operations using your programming language (e.g., Prisma, SQLAlchemy).'
  },
  {
    id: 'db-46',
    question: 'What is database migration?',
    options: [
      'Moving to a new server',
      'Version-controlled, incremental changes to database schema over time',
      'Backing up data',
      'Importing data'
    ],
    correctAnswer: 1,
    explanation: 'Migrations are version-controlled schema changes that evolve the database over time, allowing rollback and team collaboration.'
  },
  {
    id: 'db-47',
    question: 'What is the difference between CHAR and VARCHAR?',
    options: [
      'No difference',
      'CHAR is fixed-length (padded with spaces); VARCHAR is variable-length (uses only needed space)',
      'VARCHAR is fixed-length',
      'CHAR is for characters only'
    ],
    correctAnswer: 1,
    explanation: 'CHAR(n) stores fixed-length strings padded to n characters. VARCHAR(n) stores variable-length strings up to n characters.'
  },
  {
    id: 'db-48',
    question: 'What is the LIKE operator in SQL?',
    options: [
      'A social feature',
      'A pattern matching operator used with wildcards in WHERE clauses (% for any, _ for single char)',
      'A comparison operator',
      'A join operator'
    ],
    correctAnswer: 1,
    explanation: 'LIKE matches patterns: `%` matches any sequence, `_` matches a single character. Example: `WHERE name LIKE \'John%\'`.'
  },
  {
    id: 'db-49',
    question: 'What is the difference between TRUNCATE and DROP?',
    options: [
      'No difference',
      'TRUNCATE removes all data but keeps the table; DROP removes the entire table including its structure',
      'DROP only removes data',
      'TRUNCATE deletes the table'
    ],
    correctAnswer: 1,
    explanation: 'TRUNCATE removes all rows but keeps the table structure. DROP removes the entire table including structure, data, and indexes.'
  },
  {
    id: 'db-50',
    question: 'What is the EXPLAIN statement used for?',
    options: [
      'Explaining SQL syntax',
      'Displaying the execution plan of a query for performance optimization',
      'Documenting queries',
      'Teaching SQL'
    ],
    correctAnswer: 1,
    explanation: 'EXPLAIN shows how the database will execute a query: tables accessed, indexes used, join methods - essential for optimization.'
  }
];
