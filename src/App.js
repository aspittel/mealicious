import { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { RecipeBook } from './models';

import { ChakraProvider, Text } from "@chakra-ui/react"
import CreateRecipeBook from './CreateRecipeBook';

function App() {
  const [recipeBooks, setRecipeBooks] = useState([])

  useEffect(() => {
    const pullData = async () => {
      const recipeBookData = await DataStore.query(RecipeBook)
      setRecipeBooks(recipeBookData)
    }
    pullData()

    const subscription = DataStore.observe(RecipeBook).subscribe(msg => {
      pullData()
    })

    return subscription.unsubscribe()
  }, [])

  return (
    <ChakraProvider>
      {recipeBooks.map(recipeBook => <Text fontSize="4xl" key={recipeBook.id}>{recipeBook.title}</Text>)}
      <CreateRecipeBook />
    </ChakraProvider>
  );
}

export default App;
