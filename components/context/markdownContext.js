import React, { createContext, useState } from "react"
export const MarkdownContext = createContext()

const markdownTemplate = `
  # Welcome to the minimal markdown previewer!

  Use it to write your markdown and see it rendered in the preview. </br>
  Perfect for writing about your projects or writing blog posts.
  
  ### And here's some other cool stuff:

  \`\`\` js
    const hello = 'Hello everyone!'

    function printMessage(message) {
      console.log(message)
    }
  
    printMessage(hello)
  \`\`\`

  `

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState(markdownTemplate)

  return (
    <MarkdownContext.Provider 
      value={{ 
        markdown, 
        setMarkdown 
      }}>
      {children}
    </MarkdownContext.Provider>
  )
}