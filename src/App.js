import React from 'react';
import './App.css';
import facebook from "./assets/facebook-logo.png"
import twitter from "./assets/twitterx-logo.png"
import instagram from "./assets/instagram-logo.png"
import elon from "./assets/elon.png"
import Theme from './components/Theme/Theme';

function App() {
  return (
    <div className="App">
      <header> 
            <h1>Elon Musk</h1> 
            <h2>The Real Businessman</h2>
            <Theme />
        </header>
        <div class="container">
            
            <div class="left">
                <img src={elon} alt="" class="elon"/>
                <div class="circle"></div>
            </div>
            <div class="right">
                <h1>Elon Musk</h1>
                <h3>Businessman and former Senior Advisor to the President of the United States</h3>
                <p>Elon Reeve Musk is a businessman. He is known for his leadership of Tesla, SpaceX, X, and the Department of Government Efficiency. Musk has been considered the wealthiest person in the world since 2021; as of May 2025, Forbes estimates his net worth to be US$424.7 billion.</p>
                <div class="social">
                    <a class="facebook" href="https://www.facebook.com/groups/elonmusk1/?locale=zh_HK">
                        <img src={facebook} alt=""/>
                        <h3>Facebook</h3>
                    </a>
                    <a class="instagram" href="https://www.instagram.com/turk.elon.musk/">
                        <img src={instagram} alt=""/>
                        <h3>Instagram</h3>

                    </a>
                    <a class="twitter" href="https://x.com/elonmusk">
                        <img src={twitter} alt=""/>
                        <h3>Twitter X</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
