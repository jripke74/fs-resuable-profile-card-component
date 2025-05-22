import "./App.css";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <div className="flex-container">
        <Card name="Jeff" title="Owner" bio="Fullstack web developer" />
        <Card name="Allen" title="Owner" bio="Fullstack web developer" />
        <Card name="Douglas" title="Owner" bio="Fullstack web developer" />
      </div>
    </>
  );
}

export default App;
