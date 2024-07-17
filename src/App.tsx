import "./App.css";

import CopyToClipboard from "./components/copy-to-clipboard/copy-to-clipboard";
import { DexLinks } from "./components/dex-links/dex-links";

function App() {
  return (
    <>
      <div className="app">
        <div className="section-1">
          <div className="section-1-cover">
            <div className="ca">
              <CopyToClipboard />
            </div>
            <div className="section-1-logo"></div>
            <div className="section-1-links">
              <DexLinks />
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="section-2-a"></div>
          <div className="section-2-b">
            <div className="section-2-b-text">
              <p style={{ whiteSpace: "pre-line" }}>
                Which Matt Furie creature are you? Burger Dude? Bat Boy? Leotard
                Bird Girl, Mr. Toxic Casual, Long Neck, Wolf Skull with BMX
                bike, Anteater Chola, Lizard Kid with his big brother's
                skateboard? I imagine I'm Chest Face, and I'm chilling with Pepe
                in my driveway looking at the quarter-pipe we just built —
                eating Doritos. Doritos are sooo good.
              </p>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="construction"></div>
          We're working on it.
        </div>
        <div className="section-4"></div>
      </div>
    </>
  );
}

export default App;
