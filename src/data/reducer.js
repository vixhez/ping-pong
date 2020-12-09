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
  
    if (totalScore % 5 === 0 && state.serving === 1) {
      return {
        ...state,
        serving: 2
      }
    } else if (totalScore % 5 === 0 && state.serving === 2) {
      return {
        ...state,
        serving: 1
      }
    }
      return state;
  };
  
  const winner = (state) => {
    if (state.player1 === 21) {
      return {
        ...state,
        winner: 1
      }
    } else if (state.player2 === 21) {
      return {
        ...state,
        winner: 2
      }
    }
    return state;
}; 

const reducer = (state, action) => {
    switch (action.type) {
      case "PLAYER_1_SCORED": return winner(server(player1Reducer(state)));
      case "PLAYER_2_SCORED": return winner(server(player2Reducer(state)));
      case "SCORE_RESET": return initialState;
  
      default: return state;
    }
  }

export default reducer;