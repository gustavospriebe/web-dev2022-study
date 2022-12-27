import './App.css';
import Header from './components/Header'
import Journal from './components/Journal'
import data from './data'

function App() {
  const journal = data.map(data => {
    return (
      <Journal
      key={data.id}
      data={data}
      />
    )
  })


  return (
    <div className="App">
      <Header />
      {journal}
    </div>
  );
}

export default App;
