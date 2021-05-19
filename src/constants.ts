import {
  MemorizedHeavy,
  MemorizedManyProps,
  MemorizedEveryUpdate,
} from "./pages/Memorized";
import { Heavy, ManyProps, EveryUpdate } from "./pages/NonMemorized";
import PracticePage from "./pages/Practice";

export const PAGES: {
  name: string;
  component: React.ComponentClass;
}[] = [
  {
    name: "Heavy",
    component: Heavy,
  },
  {
    name: "ManyProps",
    component: ManyProps,
  },
  {
    name: "EveryUpdate",
    component: EveryUpdate,
  },
  {
    name: "MemorizedHeavy",
    component: MemorizedHeavy,
  },
  {
    name: "MemorizedManyProps",
    component: MemorizedManyProps,
  },
  {
    name: "MemorizedEveryUpdate",
    component: MemorizedEveryUpdate,
  },
  {
    name: "PracticePage",
    component: PracticePage,
  },
];

export default { PAGES };
