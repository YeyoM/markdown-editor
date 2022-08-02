import React, { createContext, useState } from "react"
export const MarkdownContext = createContext()

const markdownTemplate = `
# Welcome to the minimal markdown previewer!

---

Use it to write your markdown and see it rendered in real time. Perfect for writing about your projects or writing blog posts. 
For more info check out the repo [here](https://github.com/YeyoM/markdown-editor). Made with ❤️ by [YeyoM](https://github.com/YeyoM)

## Getting Started:

1. Write your markdown in the left
2. See the preview in the right
3. That's it, like for real!

- If you want to learn the markdown syntax, check out the [markdown guide](https://www.markdownguide.org/cheat-sheet/)

## Cool features

**Code snippets** - You can write code snippets in your markdown and it will be rendered in the preview. <br/>
To do this, just use the following syntax:

\`\`\` js
  const hello = 'Hello everyone!'

  function printMessage(message) {
    console.log(message)
  }
  
  printMessage(hello)
\`\`\`

**HTML tags** - You can write HTML tags in your markdown and it will be rendered in the preview. <br/>
Just write your HTML as normal and it will be rendered.

<div align="center">A centered div</div>
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