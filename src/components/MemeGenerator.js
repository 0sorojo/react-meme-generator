import React, { Component } from "react";
import "../stylesheets/MemeGeneratorStyle.css";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const rndNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[rndNum].url;
    this.setState({ randomImage: randMemeImg });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="meme-form">
          <div className="fields">
            <div>
              <label className="label">Enter Top Text</label>
              <input
                type="text"
                name="topText"
                value={this.state.topText}
                placeholder="Enter Text"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label className="label">Enter Bottom Text</label>
              <input
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                placeholder="Enter Text"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button className="button">Click To Change Image</button>
        </form>
        <div className="meme">
          <img className="image" src={this.state.randomImage} alt="" />
          <h2 className="top meme-letters">{this.state.topText}</h2>
          <h2 className="bottom meme-letters">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
