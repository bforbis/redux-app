export interface Article {
  title: string;
  id: string;
}

export interface ReduxState {
  articles: Article[];
}
