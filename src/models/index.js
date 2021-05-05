// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Rating = {
  "MEH": "MEH",
  "PRETTYGOOD": "PRETTYGOOD",
  "OMNOMNOM": "OMNOMNOM"
};

const { Recipe, RecipeBook } = initSchema(schema);

export {
  Recipe,
  RecipeBook,
  Rating
};