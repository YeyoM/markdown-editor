import { useContext } from 'react'
import { MarkdownContext } from '../context/markdownContext'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import classes from './preview.module.css'

export default function Preview() {

  const { markdown } = useContext(MarkdownContext)

  const customRenderers = {
    code (code) {
      const { children } = code
      return (
        <SyntaxHighLighter
          style={atomDark}
          language='javascript'
        >
          {children}
        </SyntaxHighLighter>
      )
    }
  }

  return (
    <div className={classes.preview}>
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        components={customRenderers}
      >
        { markdown }
      </ReactMarkdown>
    </div>
  )
}