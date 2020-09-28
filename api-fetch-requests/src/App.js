import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import roverClient from "./roverClient"

const App = () => {
  const [apod, setApod] = useState({})
  let roverUrl = `mars-photos/api/v1/rovers/curiosity/photos`

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  useEffect(() => {
    roverClient.rover().then(roverData => {
      setRover(roverData.data)
    })
  }, [])

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="800" height="auto" />
          <p>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {JSON.stringify(apod, null, 2)}
          </pre>
        </article>
      )}
      <div>
      <img src={roverUrl} alt="ROVER" width="800" height="auto" />
      </div>
    </div>
  )
}

export default App