import Editor from '../editor/editor'
import Preview from '../preview/preview'

import { MarkdownProvider } from '../context/markdownContext'

import classes from './main.module.css'

export default function main() {
  return (
    <div className={classes.main}>
      <MarkdownProvider>
        <Editor />
        <Preview />
      </MarkdownProvider>
    </div>
  )
}