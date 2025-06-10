import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div
      className="App"
      style={{
        background: 'linear-gradient(180deg, #e0c3fc 0%, #8ec5fc 100%)', // Fondo lila degradado
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <header
        className="App-header"
        style={{
          color: '#ff69b4',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ filter: 'hue-rotate(120deg) brightness(1.2)' }}
        />
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            color: '#00ffcc'
          }}
        >
          Hola Bienvenido
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#ffb347', textDecoration: 'underline' }}
        >
          Learn React
        </a>
      </header>
      {/* Flores decorativas abajo */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        padding: '30px 0'
      }}>
        {/* Flor 1 */}
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="10" fill="#ff69b4" />
          <ellipse cx="30" cy="12" rx="7" ry="15" fill="#ffe066" />
          <ellipse cx="30" cy="48" rx="7" ry="15" fill="#ffe066" />
          <ellipse cx="12" cy="30" rx="15" ry="7" fill="#ffe066" />
          <ellipse cx="48" cy="30" rx="15" ry="7" fill="#ffe066" />
        </svg>
        {/* Flor 2 */}
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="10" fill="#43c6ac" />
          <ellipse cx="30" cy="12" rx="7" ry="15" fill="#f8ffae" />
          <ellipse cx="30" cy="48" rx="7" ry="15" fill="#f8ffae" />
          <ellipse cx="12" cy="30" rx="15" ry="7" fill="#f8ffae" />
          <ellipse cx="48" cy="30" rx="15" ry="7" fill="#f8ffae" />
        </svg>
        {/* Flor 3 */}
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="10" fill="#ffb347" />
          <ellipse cx="30" cy="12" rx="7" ry="15" fill="#ff69b4" />
          <ellipse cx="30" cy="48" rx="7" ry="15" fill="#ff69b4" />
          <ellipse cx="12" cy="30" rx="15" ry="7" fill="#ff69b4" />
          <ellipse cx="48" cy="30" rx="15" ry="7" fill="#ff69b4" />
        </svg>
      </div>
    </div>
  );
}

export default App;