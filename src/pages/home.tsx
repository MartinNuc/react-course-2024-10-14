import { AlbumVoting } from "../albums/album-voting";
import { Modal } from "../modal/modal";

export function Home() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: "200px",
        }}
      >
        <Modal>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            error fugit sunt necessitatibus dignissimos. Incidunt dolore,
            inventore, aut, illo beatae voluptate error assumenda reiciendis
            expedita ipsam impedit velit iure quia?
          </p>
        </Modal>
      </div>

      <AlbumVoting />
    </div>
  );
}
