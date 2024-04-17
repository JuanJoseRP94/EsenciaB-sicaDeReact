import IconImag from "./assets/react-core-concepts.png";

const reactDescriptions = ["fundamentales", "cruciales", "básicos"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={IconImag} alt="Stylized atom" />
      <h1>Esencia de React</h1>
      <p>
        Conceptos {description} de React que necesitaré para la mayoría de
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
