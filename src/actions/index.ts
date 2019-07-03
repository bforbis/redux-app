import { Action } from "redux";
import { ADD_ARTICLE } from "../constants";
import { Article } from "../models";

export interface TodoAction extends Action {
  payload: Article;
}

export function addArticle(payload: Article): TodoAction {
  return { type: ADD_ARTICLE, payload };
}
