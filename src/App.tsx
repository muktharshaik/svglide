import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Box } from "./components/box/box";
import { Icons } from "./icons/icons";

const App = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center flex-col gap-10 py-10">
      <h1 className="font-bold">SVGlide</h1>
      <div>
        <p className="text-center">
          A collection of SVG icons with animations built with React and
          TypeScript.
        </p>
        <p className="text-center text-sm">
          Hover over the icons to see the animations and names.
        </p>
        <p className="text-center text-sm">
          Total number of icons: <strong>{Icons.length}</strong>
        </p>
      </div>
      <TooltipProvider>
        <div className="gap-2 flex items-center justify-center flex-wrap container p-4">
          {Icons.map(([Icon, name], index) => (
            <Tooltip key={index} delayDuration={300}>
              <TooltipTrigger asChild>
                <div>
                  <Box>
                    <Icon />
                  </Box>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{name.toString()}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </main>
  );
};

export default App;
