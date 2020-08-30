import styles from '../styles/Item.module.css'
import { useState } from 'react'

interface IItem {
  description: string
  id: number
}

const Item: React.FC<IItem> = ({ description, id }) =>  {  
  return(
    <>
      <div id={id} className={styles.itemContainer}>
        <div 
          className={styles.itemContent}
          contentEditable={true}
          suppressContentEditableWarning={true}
          spellCheck={false}
          placeholder="Type '/' for commands"
        >{description}
        </div>
      </div>
    </>
  )
}

export default Item