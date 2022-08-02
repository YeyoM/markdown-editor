import React, { createContext, useState } from "react"
export const MarkdownContext = createContext()

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("")

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