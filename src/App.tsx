import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import MainImage from './components/MainImage/MainImage';
function App(): JSX.Element {
  return (
    <div className="dark:bg-gray-700">
      <div className=" md:pl-16 pl-6 md:pt-9 pt-4">
        <Header title="404 not found" className=""></Header>
      </div>
      <div className="container  max-w-6xl mx-auto md:mt-44">
        <main className="grid grid-cols-1 md:grid-cols-2">
          <MainImage imagePath="assets/images/scarecrow.png" />
          <MainContent title="I have bad news for you" subtitle="The page you are looking for might be removed or is temporarily unavailable" />
        </main>
        <Footer text="created by" username="Chris96u" website="devChallenges.io" />
      </div>
    </div>
  );
}

export default App;
