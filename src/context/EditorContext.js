import React, { createContext } from 'react';

export const EditorContext = createContext({});

const EditorContextProvider = ({ children }) => {
  return <EditorContext.Provider>{children}</EditorContext.Provider>;
};

export default EditorContextProvider;
