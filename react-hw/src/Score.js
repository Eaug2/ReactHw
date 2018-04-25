import React from "react";
// import Navbar from "./narbar";
import Section from "./section";
import Jumbo from "./jumbo";
import icons from "./icons.json"
import Wrapper from "./Wrapper";

//Duck Talk
let score = 0;
let highScore = 0;

class Score extends React.Component {
    state = {
        icons,
        score,
        highScore
    };


//initial set up for page
    setUp = (id) => {
        //easier to type icons 
        const icons = this.state.icons;
        //filter for clicked icon
        const clickedIcon = icons.filter(icon => icon.id === id);

        //if clicked icon is already true reset the game to 0
        if (clickedIcon[0].clicked) {
            score = 0;

            //resets all icons to false
            for (let i = 0; i < icons.length; i++) {
                icons[i].clicked = false;
            }

            this.setState({ score });
            this.setState({ icons });

            //if every icon hasn't been clicked
        } else if (this.state.score < 11) {
            //set clicked icon to true
            clickedIcon[0].clicked = true;
            //increase the score by 1
            this.setState({ score: this.state.score + 1 });

            //setting up the highScore
            if (this.state.score > this.state.highScore){
                this.setState({ highScore: this.state.score});
            }
            //randomly sorts the icons from the .json then sets them
            icons.sort(function (a, b) { return 0.5 - Math.random() });
            this.setState({ icons });

        } else {
            clickedIcon[0].clicked = true;
            score = 0;
            highScore = 12;
            this.setState({highScore});

            for (let i = 0; i < icons.length; i++) {
                icons[i].clicked = false;
            }
            icons.sort(function (a, b) { return 0.5 - Math.random() });
            this.setState({ score });
            this.setState({ icons });
            
        }
    };

    render() {
        return (
            <Wrapper>
                <Jumbo 
                score={this.state.score}
                highScore = {this.state.highScore}
                />
                {icons.map(icon => (
                    <Section
                        setUp={this.setUp}
                        id={icon.id}
                        key={icon.id}
                        image={icon.image}
                    />
                ))}
           </Wrapper>
        )
    }
}




export default Score;