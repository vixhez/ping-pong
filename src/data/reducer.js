import initialState from "./initial";

const player1Reducer = (state) => {
    return {
      ...state,
      player1: state.player1 + 1 
    };
  }
  
  const player2Reducer = (state) => {
    return {
      ...state,
      player2: state.player2 + 1
    };
  }
  
  const server = (state) => {
    const totalScore = state.player1 + state.player2;
  
    if (totalScore % state.alternate === 0 && state.serving === 1) {
      return {
        ...state,
        serving: 2
      }
    } else if (totalScore % state.alternate === 0 && state.serving === 2) {
      return {
        ...state,
        serving: 1
      }
    }
      return state;
  };
  
  const winner = (state) => {
    if (state.player1 >= state.winScore) {
      return {
        ...state,
        winner: 1,
      }
    } else if (state.player2 >= state.winScore) {
      return {
        ...state,
        winner: 2,
      }
    }
    return state;
}; 

const saveReducer = (state, action) => ({
  ...state,
  info: true,
  player1Name: action.player1Name,
  player2Name: action.player2Name,
  winScore: action.winScore,
  alternate: action.alternate,
});

// Current state of the app with action that changes it, returning a valid copy of the new state.
const reducer = (state, action) => {
    switch (action.type) {
      case "PLAYER_1_SCORED": return winner(server(player1Reducer(state)));
      case "PLAYER_2_SCORED": return winner(server(player2Reducer(state)));
      // case "SCORE_RESET": return initialState;
      case "SCORE_RESET": return {
        ...initialState,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winScore: state.winScore,
        alternate: state.alternate,
      }
      case "SAVE_FORM": return saveReducer(state, action);
  
      default: return state;
    }
  }

export default reducer;