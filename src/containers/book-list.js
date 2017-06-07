import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectBook } from '../actions/index.js';

class BookList extends Component {

  // static propTypes ={
  //   books: React.PropTypes.arrayOf(React.PropTypes.shape({
  //     title: React.PropTypes.string.isRequired,
  //   })).isRequired,
  //   selectBook: PropTypes.func.isRequired,
  // };

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// Anything returned from this function will end up as props on
// the booklist container
function mapDispatchToProps(dispatch) {
  return bindActionCreators( {selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
