import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://thronesapi.com/api/v2/Characters?title=${query}`
      )

      //console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])
  
  const queryFunction = (q) =>{
    setQuery(q)
  }
  
  return (
    <div className='container'>
      <Header />
      <Search getQuery={queryFunction} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App

// function App() {
//   const [items, setItems] = useState([])
//   const [isLoading, setisLoading] = useState(true)
//   const [query, setQuery] = useState('')

//   useEffect(() => {
//     const fetchItems = async () => {
//       setisLoading(true)
//       const result = await axios(
//         `https://thronesapi.com/api/v2/Characters?fullName=${query}`
//         )
//       setItems(result.data)
//       setisLoading(false)
//     }

//     fetchItems()
//   }, [query])

//   const queryFunction = (q) =>{
//     setQuery(q)
//   }

//   return (
//     <div className='container'>
//       <Header />
//       <Search getQuery={queryFunction} />
//       <CharacterGrid isLoading={isLoading} items={items} />
//     </div>
//   )
// }

// export default App;
