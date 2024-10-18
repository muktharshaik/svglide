import { useState } from "react";

import { Activity } from "./icons/activity";
import { Airplay } from "./icons/airplay";
import { AlertCircle } from "./icons/alert-circle";

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <Airplay data-hovered={hovered} />
        <Activity data-hovered={hovered} />
        <AlertCircle data-hovered={hovered} />
      </div>
      <div></div>
    </main>
  );
}

export default App;
