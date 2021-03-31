import {MainPage} from './components/Main'
import './styles/index.css'
import { Card } from './components/Card'


function App() {
  const data = [
    {
      title: "Weight Lifting",
      color: "#FFE2DE"
    },
    {
      title: "Running  & Spinning",
      color: "#C4E769"
    },
    {
      title: "Pumping Iron",
      color: "#62D0DF",
    },
    {
      title: "Pumping Iron",
      color: "#0052C1"
    }, 

  ]

  return (
    <div className="App">
      <MainPage/>
      {
        data.map((el, id) => {
          return<Card data={el} key={id}/>
        })
      }

    </div>
  );
}

export default App;
