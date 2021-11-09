import './App.css';
import React, { useEffect, useState } from 'react';
import { create } from './utils'


function App() {
  const [streamsInfo, setStreamsInfo] = useState([
    { id: 1, streamUrl: 'Url1' },
    { id: 2, streamUrl: 'Url2' },
    { id: 3, streamUrl: 'Url3' },
    { id: 4, streamUrl: 'Url4' },
    { id: 5, streamUrl: 'Url5' },
    { id: 6, streamUrl: 'Url6' },
  ]);

  const [previousPlayer, setPreviousPlayer] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState(null)
  const [nextPlayer, setNextPlayer] = useState(null)

  useEffect(() => {
    const previousPlayer = create()
    previousPlayer.load(streamsInfo[0].streamUrl)
    setPreviousPlayer(previousPlayer)

    const currentPlayer = create()
    currentPlayer.load(streamsInfo[1].streamUrl)
    currentPlayer.play() // I know you have to do this in some event listener but bare with me.
    setCurrentPlayer(currentPlayer)

    const nextPlayer = create()
    nextPlayer.load(streamsInfo[2].streamUrl)
    setNextPlayer(nextPlayer)
    console.log({previousPlayer, currentPlayer, nextPlayer})
  }, [])
  
  const previousClicked = () => {
    const lastElement = streamsInfo.pop()
    const newUrlsInfo = [lastElement, ...streamsInfo ]
    setStreamsInfo(newUrlsInfo)

    currentPlayer.pause()
    nextPlayer.delete()
    setNextPlayer(currentPlayer)

    previousPlayer.play()
    setCurrentPlayer(previousPlayer)

    const newPreviousPlayer = create()
    newPreviousPlayer.load(newUrlsInfo[0].streamUrl)
    setPreviousPlayer(newPreviousPlayer)
  }
  const nextClicked = () => {
    const firstElement = streamsInfo.shift()
    const newUrlsInfo = [ ...streamsInfo, firstElement]
    setStreamsInfo(newUrlsInfo)

    previousPlayer.delete()
    currentPlayer.pause()
    setPreviousPlayer(currentPlayer)

    nextPlayer.play()
    setCurrentPlayer(nextPlayer)

    const newNextPlayer = create()
    newNextPlayer.load(streamsInfo[2].streamUrl)
    setNextPlayer(newNextPlayer)

  }
  return (
    <div className="App">
    <header className="App-header">
    </header>
    <main className="App-content">
      <button onClick={previousClicked}>Prev</button>
        <br />
        {previousPlayer &&  previousPlayer.attachHTMLVideoElement()}
        {currentPlayer && currentPlayer.attachHTMLVideoElement()}
        {nextPlayer && nextPlayer.attachHTMLVideoElement()}
      <br />
      <button onClick={nextClicked}>Next</button>
    </main>

    </div>
  );
}

export default App;
