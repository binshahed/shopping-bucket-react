import { useParams } from "@reach/router";
import { useStoreActions, useStoreRehydrated, useStoreState } from "easy-peasy";

const useShoppingItems = () => {
  //URL params
  const { bucketID } = useParams();

  //States
  const isRehydrated = useStoreRehydrated();
  const bucket = useStoreState((state) => state.bucket.items[bucketID]);
  const shoppingItems = useStoreState((state) => state.shoppingItems.items);
  const suggestions = useStoreState((state) => state.suggestions.items);

  //Actions
  const addShoppingIDToBucket = (useStoreActions = useStoreActions(
    (actions) => actions.shoppingItems.addItem
  ));
  const createShoppingItem = (useStoreActions = useStoreActions(
    (actions) => actions.shoppingItems.create
  ));
  const changeSearchTerm =useStoreActions(actions=>actions.suggestions.changeSearchTerm)
  const addSuggestion= useStoreActions(actions=>actions.suggestions.add)
  const setSearchOverlayFocus = useStoreActions(actions=>actions.ui.setSearchOverlayFocus)
};
