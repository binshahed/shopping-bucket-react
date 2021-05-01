import { createStore } from "easy-peasy";

import BucketModel from "./bucketModel";
import ItemModel from "./itemModel";
import SuggestionModel from "./suggestionsModel";
import UIModel from "./uiModel";

const store = createStore({
  bucketModel: BucketModel,
  shoppingItems: ItemModel,
  suggestions: SuggestionModel,
  ui: UIModel,
});

export default store;
