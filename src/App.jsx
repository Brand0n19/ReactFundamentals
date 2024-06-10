import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

function App() {
  return (
    <div>
      <Header/>
      <section id="core-concepts">
        <main>
          <h2>Core concepts</h2>
          <ul>
              <CoreConcepts {...CORE_CONCEPTS[0]}/>
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </main>
      </section>
      <main>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton>Components</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>State</TabButton>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
