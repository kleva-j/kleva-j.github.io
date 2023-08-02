import { useState } from 'react';

import logo from '@/assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="App-header min-h-screen flex bg-[#282c34] flex-col items-center justify-center text-white">
        <img src={logo} className="h-[40vmin] pointer-events-none animate-spin-slow" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="text-[#61dafb]" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="text-[#61dafb]"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
