import UtilityBar from '../utilityBar/utilityBar'

import { useContext } from 'react'
import { MarkdownContext } from '../context/markdownContext'

import classes from './editor.module.css'

export default function Editor() {

  const { markdown, setMarkdown } = useContext(MarkdownContext)

  const handleChange = (event) => {
    setMarkdown(event.target.value)
  }

  return (
    <div className={classes.editor}>
      <textarea 
        className={classes.textarea}
        onChange={handleChange}
        value={markdown}
        spellCheck="false"
      />
      <UtilityBar />
    </div>
  )
}