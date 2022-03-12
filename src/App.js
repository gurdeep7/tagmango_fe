import { Footer } from './compnents/Footer';
import { Home } from './compnents/Home';
import { Navbar } from './compnents/Navbar';

function App() {
  return (
    <>
    {/* importing navbar */}
    <Navbar />
    {/* importing home page */}
    <Home/>
    {/* importing footer */}
    <Footer />
    </>
  );
}

export default App;
