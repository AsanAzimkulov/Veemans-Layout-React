import React from "react";

const AppContext = React.createContext({language: 'ENG', setLanguage: (a:string) => {}});

export default AppContext;