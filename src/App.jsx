import "./App.css";
import BookStore from "./BookStore";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {


  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 1, name: 'Biology', price: 120},
    {id: 1, name: 'Chemistry', price: 140},
    {id: 1, name: 'Math', price: 160}
  ]




  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <BookStore books={books}></BookStore>
    </>
  );
}

export default App;
