import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function About() {
  const [ text, setText ] = useState('')
  const readmePath = 'https://raw.githubusercontent.com/PacoMojica/perceptron/master/README.md'

  fetch(readmePath)
    .then(response => response.text())
    .then(text => setText(text))

  return (
    <ReactMarkdown source={text} />
  )
}

export default About