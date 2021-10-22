import "./App.css";
import Card from "./Card";
const arr = [
  {
    id: 1,
    name: "AAA",
    price: 1000,
    img: "https://picsum.photos/id/1049/367/267",
  },
  {
    id: 2,
    name: "BBB",
    price: 2000,
    img: "https://picsum.photos/id/1048/367/267",
  },
  {
    id: 3,
    name: "CCC",
    price: 2000,
    img: "https://picsum.photos/id/1055/367/267",
  },
  {
    id: 4,
    name: "DDD",
    price: 2000,
    img: "https://picsum.photos/id/1057/367/267",
  },
  { id: 5, name: "DDD", price: 2000, img: "https://picsum.photos/200" },
  {
    id: 6,
    name: "EEE",
    price: 2000,
    img: "https://picsum.photos/id/1064/367/267",
  },
  {
    id: 7,
    name: "FFF",
    price: 2000,
    img: "https://picsum.photos/id/106/367/267",
  },
  {
    id: 8,
    name: "GGG",
    price: 2000,
    img: "https://picsum.photos/id/1065/367/267",
  },
  {
    id: 9,
    name: "HHH",
    price: 2000,
    img: "https://picsum.photos/id/1076/367/267",
  },
  {
    id: 10,
    name: "III",
    price: 2000,
    img: "https://picsum.photos/id/1081/367/267",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Cards</h1>
      <Card data={arr} />
    </div>
  );
}

export default App;
