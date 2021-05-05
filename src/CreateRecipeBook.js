import React from 'react'
import { Input, Button } from "@chakra-ui/react"
import { useState} from 'react'

import { DataStore } from '@aws-amplify/datastore';
import { RecipeBook } from './models';

export default function CreateRecipeBook() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const newRecipeBook = await DataStore.save(
      new RecipeBook({
      "title": title,
      "description": description,
    })
    );
    
    console.log(newRecipeBook)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Title" onChange={e => setTitle(e.target.value)}/>
      <Input placeholder="Description" onChange={e => setDescription(e.target.value)}/>
      <Button colorScheme="blue" type="submit">Button</Button>
    </form>
  )
}
