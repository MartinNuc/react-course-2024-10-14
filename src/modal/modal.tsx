import { PropsWithChildren, useState } from "react";
import { createPortal } from "react-dom";

export function Modal({children}: PropsWithChildren) {

  const [open, setOpen] = useState(true);

  if (!open) {
    return null;
  }

  return createPortal(<div style={{
    position: "fixed",
    padding: '15px',
    background: 'white',
    border: '1px solid black',
    width: '400px',
    left: 'calc(50% - 200px)',
    top: '50%'
  }}>
    <button onClick={() => setOpen(false)}>X</button>
    {children}
  </div>, document.body);
}