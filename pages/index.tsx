import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Item from '../components/Item'

import { FiLogIn, FiLogOut  } from 'react-icons/fi'

export default function Home() {
  const [items, setItems] = useState([ 
    { 
      description: '', 
      id: '1'
    }
  ])

  useEffect(() => {
    console.log('tamanho', items.length)
    document.getElementById(items[items.length - 1].id).focus()
  }, [items])

  function handleDescriptionUpdate(event, id) {
    if (items.length >= id) {
      let updatedArray = items
      updatedArray[id - 1].description = event.target.textContent
      setItems(updatedArray) 
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleItemCreation()
    }
    else if (event.key === 'Backspace' && event.target.textContent === '') {
      handleItemDelete(event)
    }
  }

  function handleItemDelete(event) {
    let newArray = items
    console.log(newArray)
    newArray.pop()
    console.log(newArray)
    
    setItems(newArray)
  }

  function handleItemCreation() {
    const newItem = {
      description: '',
      id: (items.length + 1).toString()
    }
    setItems([...items, newItem])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.navbar}>
          <FiLogIn size={25} color={'#fff'} />
          <FiLogOut size={25} color={'#fff'} />
        </nav>
      </header>
      <main>
        <div className={styles.title}>
          <h1>Todo List App</h1>
        </div>
        <div className={styles.list} >
          { items.map(item => 
            <div key={item.id}  className={styles.itemContainer}>
              <div 
                id={item.id}
                className={styles.itemContent}
                contentEditable={true}
                suppressContentEditableWarning={true}
                spellCheck={false}
                onKeyDown={handleKeyPress}
                onBlur={(event) => handleDescriptionUpdate(event, item.id)}
                placeholder="Type '/' for commands"
              >{item.description}
              </div>
            </div>
          )}
        </div>
      </main>     
    </div>
  )
}
