

// Define an initial state
const initialState = {
    markdown: 'This is a markdown text',
  };
  
  // Define your reducer function
  const markdownReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_MARKDOWN':
        return {
          ...state,
          markdown: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default markdownReducer;
  