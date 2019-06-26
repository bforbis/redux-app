export interface Article {
  title: string;
  id: number;
}

export interface ReduxState {
  articles: Article[];
}
