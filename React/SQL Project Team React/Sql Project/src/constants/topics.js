export const SQL_TOPICS = [
  {
    id: 1,
    title: 'DML (Data Manipulation Language)',
    shortTitle: 'DML',
    description: 'Learn commands that modify data in the database',
    content: `DML (Data Manipulation Language) includes INSERT, UPDATE, DELETE, and SELECT statements. These commands allow you to manipulate data stored in database tables.

• INSERT: Adds new records to a table
  Example: INSERT INTO users (name, email) VALUES ('John', 'john@example.com')

• UPDATE: Modifies existing records
  Example: UPDATE users SET email = 'newemail@example.com' WHERE id = 1

• DELETE: Removes records from a table
  Example: DELETE FROM users WHERE id = 1

• SELECT: Retrieves data from one or more tables
  Example: SELECT * FROM users WHERE age > 18

DML commands are essential for data management and are executed frequently in any database-driven application. Always use WHERE clauses to specify which records to modify to avoid unintended changes.`
  },
  {
    id: 2,
    title: 'DDL (Data Definition Language)',
    shortTitle: 'DDL',
    description: 'Learn commands that define database structure',
    content: `DDL (Data Definition Language) includes CREATE, ALTER, DROP, and TRUNCATE statements used to define and manage database structures.

• CREATE: Creates new tables, databases, or indexes
  Example: CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100))

• ALTER: Modifies existing table structure
  Example: ALTER TABLE users ADD COLUMN age INT

• DROP: Removes entire tables or databases
  Example: DROP TABLE users (This removes the table permanently)

• TRUNCATE: Removes all records from a table but keeps the structure
  Example: TRUNCATE TABLE users (Faster than DELETE, cannot be rolled back)

• RENAME: Renames tables or columns
  Example: ALTER TABLE users RENAME TO employees

Key Differences:
- DROP removes table structure and data; TRUNCATE keeps structure
- TRUNCATE is faster than DELETE
- DDL commands auto-commit in most databases`
  },
  {
    id: 3,
    title: 'DQL (Data Query Language)',
    shortTitle: 'DQL',
    description: 'Learn commands that retrieve and query data',
    content: `DQL (Data Query Language) is primarily the SELECT statement used to retrieve data from databases.

• Basic SELECT Syntax:
  SELECT column1, column2 FROM table_name

• WHERE Clause: Filter records based on conditions
  SELECT * FROM users WHERE age > 18 AND city = 'New York'

• ORDER BY: Sort results
  SELECT * FROM users ORDER BY name ASC (ascending) or DESC (descending)

• GROUP BY: Group rows by one or more columns
  SELECT city, COUNT(*) FROM users GROUP BY city

• HAVING: Filter groups after GROUP BY
  SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000

• LIMIT: Restrict number of results
  SELECT * FROM users LIMIT 10

• DISTINCT: Remove duplicate values
  SELECT DISTINCT city FROM users

• JOIN Operations:
  - INNER JOIN: Returns matching records from both tables
  - LEFT JOIN: All records from left table + matches from right
  - RIGHT JOIN: All records from right table + matches from left
  - FULL OUTER JOIN: All records from both tables`
  },
  {
    id: 4,
    title: 'Aggregations',
    shortTitle: 'Aggregations',
    description: 'Learn functions that aggregate data',
    content: `Aggregation functions compute a single result from multiple rows in a table.

• COUNT(): Counts number of rows
  SELECT COUNT(*) FROM users
  SELECT COUNT(email) FROM users WHERE age > 18

• SUM(): Adds up numeric values
  SELECT SUM(salary) FROM employees
  SELECT department, SUM(salary) FROM employees GROUP BY department

• AVG(): Calculates average value
  SELECT AVG(salary) FROM employees
  SELECT AVG(price) FROM products WHERE category = 'Electronics'

• MAX(): Finds maximum value
  SELECT MAX(salary) FROM employees
  SELECT product_name, MAX(price) FROM products

• MIN(): Finds minimum value
  SELECT MIN(salary) FROM employees
  SELECT MIN(date_joined) FROM users

• GROUP_CONCAT(): Concatenates values (MySQL)
  SELECT department, GROUP_CONCAT(employee_name) FROM employees GROUP BY department

Common Patterns:
- Aggregations typically used with GROUP BY clause
- Always use WHERE before GROUP BY to filter rows
- Use HAVING to filter aggregated results
- Aggregate functions ignore NULL values (except COUNT(*))

Example:
SELECT department, COUNT(*) as employees, AVG(salary) as avg_sal, MAX(salary) as max_sal
FROM employees
GROUP BY department
HAVING COUNT(*) > 5
ORDER BY avg_sal DESC`
  },
  {
    id: 5,
    title: 'Joins',
    shortTitle: 'Joins',
    description: 'Combine data from multiple tables',
    content: `Joins are used to combine rows from two or more tables based on a related column.

• INNER JOIN: Returns only matching records from both tables
  SELECT users.name, orders.order_id FROM users
  INNER JOIN orders ON users.id = orders.user_id

• LEFT JOIN (LEFT OUTER JOIN): Returns all records from left table + matches from right
  SELECT users.name, orders.order_id FROM users
  LEFT JOIN orders ON users.id = orders.user_id

• RIGHT JOIN (RIGHT OUTER JOIN): Returns all records from right table + matches from left
  SELECT users.name, orders.order_id FROM users
  RIGHT JOIN orders ON users.id = orders.user_id

• FULL OUTER JOIN: Returns all records from both tables
  SELECT users.name, orders.order_id FROM users
  FULL OUTER JOIN orders ON users.id = orders.user_id

• CROSS JOIN: Cartesian product (all combinations)
  SELECT users.name, products.name FROM users
  CROSS JOIN products

• SELF JOIN: Join table with itself
  SELECT a.name, b.name FROM employees a
  JOIN employees b ON a.manager_id = b.id

Key Points:
- Use aliases to make queries readable
- Always specify join condition in ON clause
- INNER JOIN is most common and fastest
- LEFT JOIN used when you need all records from primary table`
  },
  {
    id: 6,
    title: 'Subqueries',
    shortTitle: 'Subqueries',
    description: 'Queries within queries for complex filtering',
    content: `Subqueries (inner queries) are queries nested inside another query.

• Basic Subquery (in WHERE clause):
  SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 100)

• Subquery in FROM clause:
  SELECT * FROM (SELECT * FROM users WHERE age > 18) AS adults

• Correlated Subquery: References outer query
  SELECT name FROM users u WHERE salary > (SELECT AVG(salary) FROM users WHERE department = u.department)

• EXISTS: Checks if subquery returns any row
  SELECT name FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id)

• Scalar Subquery: Returns single value
  SELECT name, (SELECT COUNT(*) FROM orders WHERE user_id = users.id) as order_count FROM users

• Types of Subqueries:
  - Single row subquery: Returns one row
  - Multiple row subquery: Returns multiple rows
  - Multiple column subquery: Returns multiple columns

Best Practices:
- Use JOIN instead of subqueries when possible
- Subqueries are good for complex logic and readability`
  },
  {
    id: 7,
    title: 'Indexes & Performance',
    shortTitle: 'Indexes',
    description: 'Optimize database query performance',
    content: `Indexes are database structures that improve query performance by enabling faster data retrieval.

• Creating Indexes:
  CREATE INDEX idx_email ON users(email)
  CREATE UNIQUE INDEX idx_username ON users(username)
  CREATE INDEX idx_composite ON users(first_name, last_name)

• Index Types:
  - Primary Key Index: Unique identifier for each row
  - Unique Index: Ensures all values are unique
  - Composite Index: Index on multiple columns
  - Full-text Index: For text searching
  - Spatial Index: For geographic data

• Best Practices:
  - Create indexes on columns used in WHERE, JOIN, and ORDER BY clauses
  - Avoid indexing columns with many NULL values
  - Don't over-index (slows down INSERT/UPDATE/DELETE)
  - Regularly analyze and maintain indexes

• Viewing Index Information:
  SHOW INDEXES FROM users
  EXPLAIN SELECT * FROM users WHERE email = 'test@example.com'

• Performance Tips:
- Monitor query performance regularly
- Index high-cardinality columns (many unique values)
- Avoid function calls in WHERE clause
- Use LIMIT to reduce result set`
  },
  {
    id: 8,
    title: 'Transactions & ACID',
    shortTitle: 'Transactions',
    description: 'Ensure data consistency and reliability',
    content: `Transactions ensure data integrity through ACID properties: Atomicity, Consistency, Isolation, Durability.

• Basic Transaction Syntax:
  BEGIN TRANSACTION (or START TRANSACTION)
  -- SQL statements here
  COMMIT (to save changes)
  -- or ROLLBACK (to undo changes)

• ACID Properties:
  - Atomicity: All or nothing (complete transaction or none)
  - Consistency: Database moves from valid state to valid state
  - Isolation: Transactions don't interfere with each other
  - Durability: Committed changes are permanent

• Isolation Levels:
  - READ UNCOMMITTED: Lowest isolation
  - READ COMMITTED: Medium isolation
  - REPEATABLE READ: High isolation
  - SERIALIZABLE: Highest isolation

• Savepoints (intermediate rollback points):
  BEGIN
  UPDATE users SET status = 'active' WHERE id = 1
  SAVEPOINT sp1
  UPDATE users SET premium = true WHERE id = 1
  ROLLBACK TO sp1 (rolls back to savepoint)
  COMMIT

Key Points:
- Always use transactions for related operations
- Keep transactions short to avoid locks
- Handle rollbacks in application code`
  },
  {
    id: 9,
    title: 'DCL (Data Control Language)',
    shortTitle: 'DCL',
    description: 'Learn commands that control access to data',
    content: `DCL (Data Control Language) includes GRANT and REVOKE statements used to control access and permissions for database users.

• GRANT: Gives user access privileges to the database
  Example: GRANT SELECT, INSERT ON users TO 'john'@'localhost'
  Example: GRANT ALL PRIVILEGES ON database_name.* TO 'admin'@'%'

• REVOKE: Withdraws user access privileges given by the GRANT command
  Example: REVOKE INSERT ON users FROM 'john'@'localhost'
  Example: REVOKE ALL PRIVILEGES ON database_name.* FROM 'admin'@'%'

Key Privileges:
- SELECT: Read data
- INSERT: Add data
- UPDATE: Modify data
- DELETE: Remove data
- ALL PRIVILEGES: Full access

Best Practices:
- Follow the principle of least privilege (only grant what is needed)
- Regularly review user permissions
- Use roles to group privileges and assign roles to users instead of granting individual privileges directly`
  }
];

export const REACT_TOPICS = [
  {
    id: 101,
    title: 'React Components',
    shortTitle: 'Components',
    description: 'Build reusable UI components',
    content: `React Components are the building blocks of React applications. They encapsulate UI logic and state management.

• Functional Components: JavaScript functions returning JSX
  const Welcome = () => <h1>Hello World</h1>

• Class Components: ES6 classes extending React.Component
  class Welcome extends React.Component {
    render() { return <h1>Hello World</h1> }
  }

• Component Composition: Build complex UIs from simple components
  <Header />
  <MainContent />
  <Footer />

• Component Reusability: Same component used multiple times
  <Button label="Click me" />
  <Button label="Submit" />

• Components accept Props (properties) as parameters
  const Greeting = (props) => <h1>Hello {props.name}</h1>

• Component Best Practices:
  - Keep components small and focused
  - Use meaningful component names
  - Extract duplicate logic into separate components
  - Props should be passed from parent to child
  - Avoid deeply nested components`
  },
  {
    id: 102,
    title: 'Hooks (useState, useEffect)',
    shortTitle: 'Hooks',
    description: 'Manage state and side effects in functional components',
    content: `React Hooks allow you to use state and other React features in functional components.

• useState Hook: Add state to functional components
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

• Multiple State Variables:
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)

• useEffect Hook: Handle side effects (API calls, subscriptions, timers)
  useEffect(() => {
    console.log('Component mounted or count changed')
    return () => { console.log('Cleanup') }
  }, [count])

• Dependency Array:
  - Empty []: Effect runs once on mount
  - [variable]: Effect runs when variable changes
  - No array: Effect runs after every render

• Common Use Cases:
  - Fetching data from API
  - Updating document title
  - Setting up timers/subscriptions
  - Cleaning up resources

• Hook Rules:
  - Only call hooks at top level
  - Only call hooks from React functions
  - Create custom hooks for shared logic`
  },
  {
    id: 103,
    title: 'Props & Passing Data',
    shortTitle: 'Props',
    description: 'Pass data between components',
    content: `Props (Properties) are the way to pass data from parent to child components in React.

• Basic Props Usage:
  const Profile = (props) => (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )

• Destructuring Props: Extract specific props
  const Profile = ({ name, age, email }) => (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  )

• Default Props: Provide default values
  const Greeting = ({ name = 'Guest' }) => <h1>Hello {name}</h1>

• Passing Functions as Props (callbacks):
  const Button = ({ onClick, label }) => (
    <button onClick={onClick}>{label}</button>
  )

• Spreading Props:
  const CardWrapper = (props) => <Card {...props} />

• Key Props: Essential for lists
  {items.map(item => <Item key={item.id} {...item} />)}

• Props vs State:
  - Props: Data passed from parent (read-only)
  - State: Data managed inside component (can change)
  - Modifying props requires parent to update`
  },
  {
    id: 104,
    title: 'State Management',
    shortTitle: 'State',
    description: 'Manage component state and data flow',
    content: `State is data that can change over time within a component. It controls the component's behavior and rendering.

• Class Component State:
  class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
    }
  }

• Functional Component State (using useState):
  const Counter = () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    )
  }

• State Best Practices:
  - Keep state as local as possible
  - Avoid duplicating state
  - Never modify state directly
  - Use state for data that affects UI
  - Props for data from parent

• Lifting State Up: Share state between components
  const Parent = () => {
    const [count, setCount] = useState(0)
    return (
      <>
        <Display count={count} />
        <Button onClick={() => setCount(count + 1)} />
      </>
    )
  }

• Complex State (objects):
  const [user, setUser] = useState({name: 'John', email: 'john@example.com'})
  setUser({ ...user, name: 'Jane' })`
  },
  {
    id: 105,
    title: 'Conditional Rendering',
    shortTitle: 'Conditional',
    description: 'Display different content based on conditions',
    content: `Conditional rendering shows different content based on certain conditions.

• Using if/else:
  const Dashboard = ({ isAdmin }) => {
    if (isAdmin) return <AdminPanel />
    return <UserPanel />
  }

• Ternary Operator (inline):
  {isLoggedIn ? <Dashboard /> : <LoginForm />}

• Logical AND (&&) Operator:
  {isReady && <Content />}

• Switch Statement:
  switch(userRole) {
    case 'admin':
      return <AdminDashboard />
    case 'user':
      return <UserDashboard />
    default:
      return <GuestView />
  }

• Preventing Component Rendering:
  const HiddenComponent = ({ shouldRender }) => {
    if (!shouldRender) return null
    return <div>This is hidden</div>
  }

• Conditional Classes:
  <div className={isActive ? 'active' : 'inactive'}>
    Content
  </div>

• Best Practices:
  - Extract conditional logic to separate functions
  - Keep JSX readable and not too complex
  - Use early returns in components`
  },
  {
    id: 106,
    title: 'Handling Events',
    shortTitle: 'Events',
    description: 'Handle user interactions and events',
    content: `React handles events similarly to DOM events but with some differences.

• Basic Event Handling:
  const Button = () => {
    const handleClick = () => console.log('Clicked')
    return <button onClick={handleClick}>Click Me</button>
  }

• Event Object:
  const handleChange = (e) => {
    console.log(e.target.value)
  }

• Common Events:
  - onClick: Click event
  - onChange: Form input changes
  - onSubmit: Form submission
  - onMouseEnter/onMouseLeave: Mouse events
  - onFocus/onBlur: Focus events
  - onKeyDown/onKeyUp: Keyboard events

• Form Handling:
  const Form = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(email)
    }
    return (
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    )
  }

• Event Delegation:
  <ul onClick={(e) => {
    if (e.target.tagName === 'LI') console.log(e.target.textContent)
  }}>

• Preventing Default Behavior:
  onClick={(e) => { e.preventDefault() }}`
  },
  {
    id: 107,
    title: 'Lists & Keys',
    shortTitle: 'Lists',
    description: 'Render lists efficiently with keys',
    content: `Rendering lists efficiently in React requires proper key management.

• Basic List Rendering:
  const items = ['Apple', 'Banana', 'Orange']
  {items.map((item, index) => <li key={index}>{item}</li>)}

• Rendering Objects:
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
  {users.map(user => (
    <li key={user.id}>
      <h3>{user.name}</h3>
    </li>
  ))}

• Key Best Practices:
  - Use unique IDs as keys (NOT array index)
  - Keys help React identify which items changed
  - Bad: <li key={index}> (if list can be reordered)
  - Good: <li key={user.id}>

• Filtering Lists:
  const activeUsers = users.filter(u => u.active)
  const filtered = users.filter(u => u.name.includes(search))

• Sorting Lists:
  const sorted = users.sort((a, b) => a.name.localeCompare(b.name))
  const sorted = users.sort((a, b) => a.age - b.age)

• Performance Tips:
  - Always use keys for dynamic lists
  - Consider virtualizing large lists
  - Memoize list items to prevent unnecessary re-renders
  - Use useMemo for complex filtering/sorting`
  },
  {
    id: 108,
    title: 'Forms & Controlled Components',
    shortTitle: 'Forms',
    description: 'Build and manage form inputs',
    content: `Controlled components let React manage form input values.

• Controlled Input:
  const [email, setEmail] = useState('')
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

• Multiple Form Inputs:
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

• Form Submission:
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  
  <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
  </form>

• Select Dropdowns:
  <select value={category} onChange={(e) => setCategory(e.target.value)}>
    <option value="">Select...</option>
    <option value="react">React</option>
  </select>

• Checkboxes:
  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />

• Radio Buttons:
  <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />

• Form Validation:
  const [errors, setErrors] = useState({})
  const validate = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email required'
    setErrors(newErrors)
  }`
  }
];

export const ALL_TOPICS = [...SQL_TOPICS, ...REACT_TOPICS];
