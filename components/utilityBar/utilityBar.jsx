import { useContext } from 'react'
import { MarkdownContext } from '../context/markdownContext'

import classes from './utilityBar.module.css'

export default function UtilityBar() {

  const { markdown, setMarkdown } = useContext(MarkdownContext)

  const clear = () => {
    setMarkdown('')
  }

  const copy = () => {
    navigator.clipboard.writeText(markdown)
  }

  return (
    <div className={classes.utilityBar}>
      <button className={classes.clearBtn} onClick={clear}>
        Clear all
      </button>
      <button className={classes.copyBtn} onClick={copy}>
        Copy
      </button>
    </div>
  )
}