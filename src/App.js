import Header from "./Header";
import Posts from "./Posts";
import Form from "./Form/index";

function App() {
  return (
    <div className="App">
      <div className="App__Header">
        <Header />
        <Form />
        <Posts />
      </div>
    </div>
  );
}

export default App;
