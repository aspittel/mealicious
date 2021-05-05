/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      name
      description
      image
      recipebookID
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      name
      description
      image
      recipebookID
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      name
      description
      image
      recipebookID
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createRecipeBook = /* GraphQL */ `
  mutation CreateRecipeBook(
    $input: CreateRecipeBookInput!
    $condition: ModelRecipeBookConditionInput
  ) {
    createRecipeBook(input: $input, condition: $condition) {
      id
      title
      description
      Recipes {
        items {
          id
          name
          description
          image
          recipebookID
          rating
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipeBook = /* GraphQL */ `
  mutation UpdateRecipeBook(
    $input: UpdateRecipeBookInput!
    $condition: ModelRecipeBookConditionInput
  ) {
    updateRecipeBook(input: $input, condition: $condition) {
      id
      title
      description
      Recipes {
        items {
          id
          name
          description
          image
          recipebookID
          rating
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipeBook = /* GraphQL */ `
  mutation DeleteRecipeBook(
    $input: DeleteRecipeBookInput!
    $condition: ModelRecipeBookConditionInput
  ) {
    deleteRecipeBook(input: $input, condition: $condition) {
      id
      title
      description
      Recipes {
        items {
          id
          name
          description
          image
          recipebookID
          rating
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
