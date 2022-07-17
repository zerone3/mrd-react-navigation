import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CustomForm from './components/CustomForm.jsx';
import AnimalDetailPage from './containers/AnimalDetailPage.jsx';
// Import lagi yang baru di sini
import AnimalListPage from './containers/AnimalListPage.jsx';

import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Salam dari React Router!</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="formulir" element={<CustomForm />} />
        <Route path="animals" element={<AnimalListPage />}>
          <Route path=":animalId" element={<AnimalDetailPage />} />
        </Route>
        {/* Kita menggunakan no match route di sini */}
        {/* route dengan path "*" */}
        <Route
          path="*"
          element={
            <main>
              <h3>404 - Route not found !</h3>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

// Sangat tidak disarankan membuat multi component di App.js
// Hanya untuk pembelajaran belaka yah !
function Home() {
  return (
    <>
      <main>
        <h2>Halo dari Homepage</h2>
        <p>Mari belajar Routing, yuk yuk yuk !</p>
      </main>
      <nav>
        {/* Ini adalah anchor nya untuk Route */}
        <Link to="/about">About</Link>
        {/* Kita tambahkan untuk ke Form */}
        <Link style={{ marginLeft: 2 }} to="/formulir">
          Form
        </Link>
      </nav>
    </>
  );
}

// Sangat tidak disarankan membuat multi component di App.js
// Hanya untuk pembelajaran belaka yah !
function About() {
  return (
    <>
      <main>
        <h2>Siapakah pembuat halaman ini?</h2>
        <p>Duh, ga usah diragukan lagi, orang ga jelas !</p>
      </main>
      <nav>
        {/* Ini adalah anchor nya untuk Route */}
        <Link to="/">Home</Link>
        <Link style={{ marginLeft: 2 }} to="/formulir">
          Form
        </Link>
      </nav>
    </>
  );
}

export default App;
