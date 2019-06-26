import { connect } from "react-redux";
import React from "react";
import { ReduxState, Article } from "./models";

const mapStateToProps = (state: ReduxState): Props => {
  return {
    articles: state.articles
  };
};

interface Props {
  articles: Article[];
}

function ConnectedList({ articles }: Props): JSX.Element {
  return (
    <ul className="list-group list-group-flush">
      {articles.map(el => {
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>;
      })}
    </ul>
  );
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;
