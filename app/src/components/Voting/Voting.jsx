import { Component } from 'react'
import SmileCard from '../SmileCard'
import Button from "../Button/Button";
import './Voting.scss';

export default class Voting extends Component {
    state = {
        candidates: [],
        votes: {},
    }

     handleVote = (id) => {
        this.setState({
            votes: {
                ...this.state.votes,
                [id]: this.state.votes[id] + 1,
                // `${id}`: this.state.votes[id] + 1,
            }
        });
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
            .then(res => res.json())
            .then(result => {
                console.log(result);

                const ids = result.map(item => item.id);

                const initialVotes = Object.fromEntries(ids.map(id => [id, 0]));
    console.log(initialVotes);
                this.setState({

                    candidates: result,
                    // TODO: think how to create obj where keys are items from array 'ids'
                    votes: initialVotes
                    //     {
                    //     1: 0,
                    //     2: 0,
                    //     3: 0
                    // }
                })
            });
    }

    handleShowResults = () => {
        const voteCounts = Object.values(this.state.votes);
        const maxVotes = Math.max(...voteCounts);

        const winnerSmile = this.state.candidates.find(item => this.state.votes[item.id] === maxVotes);

        console.log(winnerSmile);
        this.setState({ winner: winnerSmile });
    };

    render() {
        return (
            <div className='main'>
                <h1>Choose the best smile ever:</h1>
                <div className='container'>
                    {!this.state.candidates.length && <div>No candidates yet...</div>}

                    {this.state.candidates.map(item => (
                        <div className='smileCardContainer' key={item.id}>
                            <SmileCard onClick={this.handleClick}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                smile={item.smile}
                                onVote={this.handleVote}
                            />
                            {this.state.votes[item.id]}
                        </div>
                    ))}
                </div>
                <Button onClick={this.handleShowResults} label="Show Results" />
                {this.state.winner ?
                    <div className='winnerContainer'>
                        <h2>WINNER:</h2>
                        <SmileCard
                            id={this.state.winner.id}
                            title={this.state.winner.title}
                            description={this.state.winner.description}
                            smile={this.state.winner.smile}
                        />
                    </div> :
                    <div>to see the result - make your choice</div>
                }
            </div>
        )
    }
}
