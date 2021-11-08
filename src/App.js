import './App.css';
import React, { useState } from 'react';


function App() {
  const [urlsInfo, setUrlsInfo] = useState([
    { id: 1, streamUrl: 'Url1' },
    { id: 2, streamUrl: 'Url2' },
    { id: 3, streamUrl: 'Url3' },
    { id: 4, streamUrl: 'Url4' },
    { id: 5, streamUrl: 'Url5' },
    { id: 6, streamUrl: 'Url6' },
  ]);
  
  const previousClicked = () => {
    const firstElement = urlsInfo.shift()
    const newUrlsInfo = [ ...urlsInfo, firstElement]
    setUrlsInfo(newUrlsInfo)
  }
  const nextClicked = () => {
    console.log('Next')
    const lastElement = urlsInfo.pop()
    const newUrlsInfo = [lastElement, ...urlsInfo]
    setUrlsInfo(newUrlsInfo)
  }
  return (
    <div className="App">
    <header className="App-header">
    </header>
    <main className="App-content">
      <button onClick={previousClicked}>Prev</button>
      <br />
      {
        urlsInfo.map((urlInfo, index) => {
          if (index === 0
            || index === 1
            || index === 2) {
            return <div key={`${urlInfo.id}-${urlInfo.streamUrl}`}> {urlInfo.streamUrl} </div>
          }
          else {
            return <div key={`${urlInfo.id}-${urlInfo.streamUrl}`}> </div>
          }
        })
        }
      <br />
      <button onClick={nextClicked}>Next</button>
    </main>

    </div>
  );
}

export default App;
