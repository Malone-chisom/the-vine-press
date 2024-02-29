import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({Children}) => {
    const [showComponentA, setShowComponentB] = useState();

    return (
        <AppContext.Provider value={{showComponentA, setShowComponentB}}>
            {Children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;