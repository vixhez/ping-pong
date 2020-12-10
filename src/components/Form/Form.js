// const FormField = ({ formLabel }) => (
//     <div class="mb-3">
//         <label for="formInput" className="form-label">{ formLabel }</label>
//         <input type="text" className="form-control" id="formInput">
//         </input>
//     </div>
// );



import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: props.info,
            player1Name: props.player1Name,
            player2Name: props.player2Name,
            winScore: props.winScore,
            alternate: props.alternate,
        };

        this.handleChangePlayer1 = this.handleChangePlayer1.bind(this);
        this.handleChangePlayer2 = this.handleChangePlayer2.bind(this);
        this.handleChangeWinScore = this.handleChangeWinScore.bind(this);
        this.handleChangeAlternate = this.handleChangeAlternate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePlayer1(e) {
        this.setState({ player1Name: e.currentTarget.value })
    }

    handleChangePlayer2(e) {
        this.setState({ player2Name: e.currentTarget.value })
    }

    handleChangeWinScore(e) {
        this.setState({ winScore: e.currentTarget.value })
    }

    handleChangeAlternate(e) {
        this.setState({ alternate: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveForm({ ...this.state });
    }

    render() {
        const { player1Name, player2Name, winScore, alternate } = this.state;

        return (
            <div class="mb-3">
                <form
                    onSubmit={ this.handleSubmit }>
                    <label
                        for="player1"
                        className="form-label">Player 1 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="player1"
                        onChange={ this.handleChangePlayer1 }
                        value={ player1Name }>
                    </input>

                    <label
                        for="player2"
                        className="form-label">Player 2 Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="player2"
                        onChange={ this.handleChangePlayer2 }
                        value={ player2Name }>
                    </input>

                    <label
                        for="winScore"
                        className="form-label">Winning Score</label>
                    <input
                        type="text"
                        className="form-control"
                        id="winScore"
                        onChange={ this.handleChangeWinScore }
                        value={ winScore }>
                    </input>

                    <label
                        for="alternate" className="form-label">Alternate Every...</label>
                    <input
                    type="text"
                    className="form-control"
                    id="alternate"
                    onChange={ this.handleChangeAlternate }
                    value={ alternate }>
                    </input>

                    <button
                        type="submit"
                        class="btn btn-primary">
                            Start Game
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;