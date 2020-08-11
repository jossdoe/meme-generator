import React, { createContext, useReducer } from 'react';

import templates from 'assets/templates';

const initialState = {
  template: templates[0],
  textFields: [...templates[0].text.map(() => 'Your Text')],
  fontFamily: 'Impact',
  fontSize: 18,
  fontColor: 'white',
  showModal: false
};

const editorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEMPLATE':
      const newTemplate =
        templates.find((item) => item.id === parseInt(action.id)) ||
        templates[0];
      return {
        ...state,
        template: newTemplate,
        textFields: newTemplate.text.map(() => 'Your Text')
      };

    case 'SET_CUSTOMIMAGE':
      const customTemplate = {
        src: action.value,
        text: [
          {
            title: 'Top',
            textOnPicture: true,
            css: {
              top: '0px',
              left: '0px',
              right: '0px'
            }
          },
          {
            title: 'Bottom',
            textOnPicture: true,
            css: {
              bottom: '0px',
              left: '0px',
              right: '0px'
            }
          }
        ]
      };

      return {
        ...state,
        template: customTemplate,
        textFields: ['Your Text', 'Your Text']
      };

    case 'SET_TEXTFIELD':
      const newFields = [...state.textFields];
      newFields[action.id] = action.value;
      return { ...state, textFields: [...newFields] };

    case 'SET_FONTFAMILY':
      return { ...state, fontFamily: action.value };

    case 'SET_FONTSIZE':
      return { ...state, fontSize: action.value };

    case 'SET_FONTCOLOR':
      return { ...state, fontColor: action.value };

    case 'GENERATE_IMAGE':
      return { ...state, showModal: true };

    case 'CLOSE_OVERLAY':
      return { ...state, showModal: false };

    default:
      return { ...state };
  }
};

export const EditorContext = createContext({ ...initialState });

const EditorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
