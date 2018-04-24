import React from "react";
import Navbar from "./narbar";
import Section from "./section";
import Jumbo from "./jumbo";

class Score extends React.Component {
    state = {
        score: 0
    };

    handleIncreament = () => {
        this.setState({ score: this.state.score + 1 });
        console.log("here")
    };



    render() {
        return (
            <div className="container">
                <Navbar
                    score={this.state.score}
                />
                <Jumbo />
                <Section
                    score={this.state.score}
                    handleIncreament={this.handleIncreament}
                />
            </div>
        )
    }
}



export default Score;