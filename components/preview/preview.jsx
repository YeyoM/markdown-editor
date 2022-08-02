import { useContext } from 'react'
import { MarkdownContext } from '../context/markdownContext'

import ReactMarkdown from 'react-markdown'

import classes from './preview.module.css'

export default function Preview() {

  const { markdown } = useContext(MarkdownContext)

  return (
    <div className={classes.preview}>
      <ReactMarkdown>
        { markdown }
      </ReactMarkdown>
    </div>
  )
}