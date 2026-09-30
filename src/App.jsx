import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ScrollProgress from './components/scroll-progress/scroll-progress.component';
import Home from './pages/home/home.component';

const App = () => (
  <>
    <ScrollProgress />
    <Header />
    <Home />
    <Footer />
  </>
);

export default App;
