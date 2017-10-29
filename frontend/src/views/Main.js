import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import CategoryList from '../components/CategoryList';
import Content from '../components/Content';

class Main extends Component {
  state = { categories: [] }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <CategoryList data={this.props.categories} />
        <Content>
          Main Screen Content
        </Content>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return { categories: categories.all };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
