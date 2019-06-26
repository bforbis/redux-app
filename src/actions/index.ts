import { Action } from "redux";
import { ADD_ARTICLE } from "../constants";

export interface TodoAction extends Action {
  payload: any;
}

export function addArticle(payload: Record<string, any>): TodoAction {
  return { type: ADD_ARTICLE, payload };
}
