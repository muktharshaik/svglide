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
import { AlignCenter } from "./icons/align-center";
import { AlignCenterHorizontal } from "./icons/align-center-horizontal";
import { AlignCenterVertical } from "./icons/align-center-vertical";
import { AlignEndHorizontal } from "./icons/align-end-horizontal";
import { AlignEndVertical } from "./icons/align-end-vertical";
import { AlignHorizontalDistributeCenter } from "./icons/align-horizontal-distribute-center";
import { AlignHorizontalDistributeEnd } from "./icons/align-horizontal-distribute-end";
import { AlignHorizontalDistributeStart } from "./icons/align-horizontal-distribute-start";
import { AlignHorizontalJustifyCenter } from "./icons/align-horizontal-justify-center";
import { AlignHorizontalJustifyEnd } from "./icons/align-horizontal-justify-end";
import { AlignHorizontalJustifyStart } from "./icons/align-horizontal-justify-start";
import { AlignHorizontalSpaceAround } from "./icons/align-horizontal-space-around";
import { AlignHorizontalSpaceBetween } from "./icons/align-horizontal-space-between";
import { AlignJustify } from "./icons/align-justify";
import { AlignLeft } from "./icons/align-left";
import { AlignRight } from "./icons/align-right";
import { AlignStartHorizontal } from "./icons/align-start-horizontal";
import { AlignStartVertical } from "./icons/align-start-vertical";
import { AlignVerticalDistributeCenter } from "./icons/align-vertical-distribute-center";
import { AlignVerticalDistributeEnd } from "./icons/align-vertical-distribute-end";
import { AlignVerticalDistributeStart } from "./icons/align-vertical-distribute-start";
import { AlignVerticalSpaceBetween } from "./icons/align-vertical-space-between";
import { AlignVerticalJustifyCenter } from "./icons/align-vertical-justify-center";
import { AlignVerticalJustifyEnd } from "./icons/align-vertical-justify-end";
import { AlignVerticalJustifyStart } from "./icons/align-vertical-justify-start";
import { AlignVerticalSpaceAround } from "./icons/align-vertical-space-around";

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
  AlignCenter,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalSpaceBetween,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
];

function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold">SVGlide</h1>
      <div className="gap-2 flex items-center flex-wrap container">
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
