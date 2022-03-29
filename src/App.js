import './App.css';
import Banner from './container/Banner/Banner';
import Glimpse from './container/glimpse/glimpse';
import Introduction from './container/intro/Intro';
import PersonalAssessment from './container/personalAssessment/PersonalAssessment';
import Programs from './container/Programs/Programs';


function App() {
  return (
    <div>
      <Introduction />
      <PersonalAssessment />
      <Banner />
      <Programs />
      <Glimpse />
    </div>
  );
}

export default App;
