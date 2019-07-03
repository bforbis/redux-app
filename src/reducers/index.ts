import { TodoAction } from "../actions";
import { ADD_ARTICLE } from "../constants";
import { ReduxState } from "../models";

const initialState: ReduxState = {
  articles: []
};

function rootReducer(
  state: ReduxState = initialState,
  action: TodoAction
): ReduxState {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
