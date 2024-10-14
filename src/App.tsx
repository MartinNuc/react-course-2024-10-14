import { AlbumVoting } from "./albums/album-voting";
import "./App.css";
import { UserContextProvider } from "./context/user-context";
import { UserInfoPane } from "./context/user-info-pane";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <UserInfoPane />
        <AlbumVoting />
      </div>
    </UserContextProvider>
  );
}

export default App;
