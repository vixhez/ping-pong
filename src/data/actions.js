export const player1Scored = () => {
    return {
        type: "PLAYER_1_SCORED",
    }
};

export const player2Scored = () => {
    return {
        type: "PLAYER_2_SCORED",
    }
}

export const scoreReset = () => {
    return {
        type: "SCORE_RESET",
    }
}

export const saveForm = ({ player1Name, player2Name, winScore, alternate }) => {
    return {
        type: "SAVE_FORM",
        player1Name,
        player2Name,
        winScore: +winScore,
        alternate: +alternate,
    }
}