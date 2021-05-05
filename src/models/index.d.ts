import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Rating {
  MEH = "MEH",
  PRETTYGOOD = "PRETTYGOOD",
  OMNOMNOM = "OMNOMNOM"
}



export declare class Recipe {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  readonly recipebookID?: string;
  readonly rating?: Rating | keyof typeof Rating;
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

export declare class RecipeBook {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly Recipes?: (Recipe | null)[];
  constructor(init: ModelInit<RecipeBook>);
  static copyOf(source: RecipeBook, mutator: (draft: MutableModel<RecipeBook>) => MutableModel<RecipeBook> | void): RecipeBook;
}