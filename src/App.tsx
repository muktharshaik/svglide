"use client";

import { useState } from "react";
import { AlarmClock } from "./lib";

export const App = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <main
      style={{
        margin: "0 auto",
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Svglide Playground</h1>

      <div
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <AlarmClock data-hovered={hovered} />
      </div>
    </main>
  );
};
