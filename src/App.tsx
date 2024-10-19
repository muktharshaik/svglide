import { Activity } from "./icons/activity";
import { Airplay } from "./icons/airplay";
import { AlertCircle } from "./icons/alert-circle";
import { AArowDown } from "./icons/a-arrow-down";
import { AArowUp } from "./icons/a-arrow-up";
import { ALargeSmall } from "./icons/a-large-small";
import { Box } from "./components/box/box";
import { Accesibility } from "./icons/accesibility";
import { AirVent } from "./icons/air-vent";
import { AlarmClock } from "./icons/alarm-clock";
import { AlarmClockCheck } from "./icons/alarm-clock-check";
import { AlarmClockMinus } from "./icons/alarm-clock-minus";
import { AlarmClockOff } from "./icons/alarm-clock-off";
import { AlarmClockPlus } from "./icons/alarm-clock-plus";

const Icons = [
  Activity,
  Airplay,
  AlertCircle,
  AArowDown,
  AArowUp,
  ALargeSmall,
  Accesibility,
  AirVent,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
];

function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="gap-2 flex items-center">
        {Icons.map((Icon, index) => (
          <Box key={index}>
            <Icon />
          </Box>
        ))}
      </div>
    </main>
  );
}

export default App;
