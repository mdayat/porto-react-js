import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Navbar, MemoizedNavbarChildren } from "./components/navbar";
import { Projects } from "./components/projects";

function App() {
  return (
    <div id="home" className="scroll-smooth App text-center">
      <Navbar>
        <MemoizedNavbarChildren />
      </Navbar>

      <main>
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
