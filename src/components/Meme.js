import React from "react";
//import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]); //memesData

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // let url;
  // const [memeUrl, setmemeUrl] = React.useState(
  //   "https://i.imgflip.com/30b1gx.jpg"
  // );
  console.log(allMemes);

  function handleChange(event) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  }

  function getMemeImg() {
    //create a random number which refers to memes id, then display the related image
    //const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    // using state
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main className="main">
      <div className="form">
        <div className="container">
          <input
            type="text"
            className="first-input"
            placeholder="Top text"
            onChange={handleChange}
            name="topText"
          />
          <input
            type="text"
            className="second-input"
            placeholder="Bottom text"
            onChange={handleChange}
            name="bottomText"
          />
          <div className="preButton">
            <button className="button" onClick={getMemeImg}>
              Get a new meme image 🖼
            </button>
          </div>
        </div>
        <div className="preImage">
          <h2 className="imgText1">{meme.topText}</h2>
          <h2 className="imgText2">{meme.bottomText}</h2>
          <img src={meme.randomImage} className="meme--img"></img>
        </div>
      </div>
    </main>
  );
}

export default Meme;
//06464 password pc massimo ufficio
