import About from './Components/About';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header className="text-center py-10 bg-green-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to Villa Habarana</h1>
      </Header>
      <div className="p-6">
        <Gallery />
        <About />
        <Footer />
        <Header />
      </div>
    </div>
  );
}

export default App;


