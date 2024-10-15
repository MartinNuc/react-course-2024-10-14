import { AlbumVoting } from "./albums/album-voting";
import "./App.css";
import { UserContextProvider } from "./context/user-context";
import { UserInfoPane } from "./context/user-info-pane";
import { ErrorBoundary } from "./error-boundary/error-boundary";
import { ThrowComponent } from "./error-boundary/throw-component";

function App() {
  return (
    <ErrorBoundary>
      <UserContextProvider>
        <div className="App">
          <UserInfoPane />
          <AlbumVoting />
          <ThrowComponent />
        </div>
      </UserContextProvider>
    </ErrorBoundary>
  );
}

export default App;
