const initState = {
  projects: [
    {id: 1, title: 'Help me find peach', content: 'blah, blah, blah'},
    {id: 2, title: 'Collect all the stars', content: 'blah, blah, blah'},
    {id: 3, title: 'Rush Tesla to Mars', content: 'blah, blah, blah'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project ', action.project);
      return {
        projects: [...state.projects, action.project]
      };
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error)
      return state;
    default:
      return state
  }
};

export default projectReducer