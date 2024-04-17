function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>Esencia de React</h1>
      <p>
        Conceptos fundamentales de React que necesitaré para la mayoría de
        programas que voy a construir.
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header> </Header>
      <main>
        <h2>Hora de empezar!</h2>
      </main>
    </div>
  );
}

export default App;
