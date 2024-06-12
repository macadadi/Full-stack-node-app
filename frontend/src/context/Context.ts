import { createContext } from "react";
import { MainAppContext } from "types";

const appContext = createContext<MainAppContext>({} as MainAppContext);
export { appContext };
