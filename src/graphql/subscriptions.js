/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateRecipeBook = /* GraphQL */ `
  subscription OnCreateRecipeBook {
    onCreateRecipeBook {
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
export const onUpdateRecipeBook = /* GraphQL */ `
  subscription OnUpdateRecipeBook {
    onUpdateRecipeBook {
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
export const onDeleteRecipeBook = /* GraphQL */ `
  subscription OnDeleteRecipeBook {
    onDeleteRecipeBook {
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
