import React, { ChangeEvent, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions";
import { Article } from "../models";
import { eventNames } from "cluster";

interface Props {
  addArticle: (article: Article) => void;
}
interface State {
  title: string;
}

function mapDispatchToProps(dispatch: Dispatch): Props {
  return {
    addArticle: (article: Article) => dispatch(addArticle(article))
  };
}

class ConnectedForm extends React.Component<Props> {
  state: State = {
    title: ""
  };

  constructor(props: Props) {
    super(props);
  }

  handleChange(event: ChangeEvent<{ id: string; value: string }>): void {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event: SyntheticEvent): void {
    event.preventDefault();
    const title = this.state.title;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  render(): JSX.Element {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
