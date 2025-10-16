import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header: Logo left, Title centered */}
      <header className="app-header">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>React Tutorial</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Main content area */}
      <main className="main-content">
        {/* Left Column: Topics */}
        <aside className="left-column">
          <h2>Topic</h2>
          <ol>
            <li>What is React?</li>
            <li>JSX</li>
            <li>Components</li>
            <li>Props</li>
            <li>State</li>
            <li>Hooks</li>
            <li>Event Handling</li>
            <li>Lifecycle Methods</li>
            <li>Conditional Rendering</li>
            <li>Lists and Keys</li>
          </ol>
        </aside>
        {/* Right Column: Counter */}
        <div className="right-column">
          <div className="counter-circle">
            <p>Counter</p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      </main>

      {/* Footer: Chapters */}
      <footer className="app-footer">
        <div className="chapters-section">
          <h2>Chapter</h2>
          <ol>
            <li>
              <strong>What is React?</strong> – A JavaScript library for building UI using components, enabling fast and scalable single-page applications[web:33].
            </li>
            <li>
              <strong>JSX</strong> – HTML-like syntax blended into JavaScript, making UI code readable and easily maintainable[web:29].
            </li>
            <li>
              <strong>Components</strong> – Reusable functions or classes that represent parts of the UI and handle input (props) and output (rendered elements)[web:33].
            </li>
            <li>
              <strong>Props</strong> – Properties passed from parent to child components for data sharing and reusability[web:30].
            </li>
            <li>
              <strong>State</strong> – Internal data storage within components, managed by hooks such as <code>useState</code> for interactive UIs[web:29].
            </li>
            <li>
              <strong>Hooks</strong> – Functions like <code>useState</code> and <code>useEffect</code> that manage state and side effects in functional components[web:30].
            </li>
            <li>
              <strong>Event Handling</strong> – Built-in system for user interaction in React, e.g., <code>onClick</code> on buttons[web:33].
            </li>
            <li>
              <strong>Lifecycle Methods</strong> – Functions called at different points of a component's existence, managed via class methods or <code>useEffect</code>[web:29].
            </li>
            <li>
              <strong>Conditional Rendering</strong> – Dynamically rendering JSX based on state, using simple JS expressions and ternary operators[web:33].
            </li>
            <li>
              <strong>Lists and Keys</strong> – Generating lists of elements with <code>map()</code> and assigning unique <code>key</code> props for efficient updates[web:33].
            </li>
          </ol>
        </div>
      </footer>
    </>
  );
}

export default App;
