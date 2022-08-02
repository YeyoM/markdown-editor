import UtilityBar from '../utilityBar/utilityBar'

import classes from './editor.module.css'

export default function Editor() {
  return (
    <div className={classes.editor}>
      <h1>Editor</h1>
      <UtilityBar />
    </div>
  )
}