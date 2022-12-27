import "./App.css";
import Header from "./componets/Header";
import Main from "./componets/Main";
import Card from "./componets/Cards";
import data from "./data";

// console.log(data);

function App() {
    const card = data.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        );
    });

    return (
        <div className="App">
            <Header />
            <Main />
            <div className="cards">{card}</div>
        </div>
    );
}

export default App;
