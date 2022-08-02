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

  const save = () => {
    const blob = new Blob([markdown], { type: 'text/plain;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'markdown.md'
    link.click()
  }

  const githubRedirect = () => {
    window.location.href = 'https://github.com/YeyoM/markdown-editor'
  }

  return (
    <div className={classes.utilityBar}>
      <button className={classes.clearBtn} onClick={clear}>
        Clear all
      </button>
      <button className={classes.copyBtn} onClick={copy}>
        Copy
      </button>
      <button className={classes.saveBtn} onClick={save}>
        Save
      </button>
      <button className={classes.githubBtn} onClick={githubRedirect}>
        Github
      </button>
    </div>
  )
}