import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddIcon from 'react-icons/lib/md/add';
import SortIcon from 'react-icons/lib/md/sort';

import { buttonPrimary } from '../../utils/colors';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Group from '../../components/Group';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';
import SortModal from '../../components/SortModal';

class Main extends Component {

  state = {
    showModal: false,
  }

  openSortModal = () => {
    this.setState({ showModal: true });
  }

  closeSortModal = () => {
    this.setState({ showModal: false });
  }

  onSortBy = (value) => {
    this.props.onSort(value);
    this.closeSortModal();
  }

  render() {
    const {
      categories,
      posts,
      sortBy,
      sortOptions,
      onVote,
    } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <Header>
          <div />
          <CategoryList data={categories} />
          <Group>
            <div className='header-icon' onClick={this.openSortModal}>
              <SortIcon size={30} color={buttonPrimary} />
            </div>
            <Link to='/posts/edit'>
              <AddIcon size={30} color={buttonPrimary} />
            </Link>
          </Group>
        </Header>
        <Content>
          <List className='list' data={posts} getKey={item => item.id}>
            {(item, index) => (
              <Post pos={++index} onVote={onVote} item={item} />
            )}
          </List>
        </Content>
        {showModal && (
          <SortModal
            isOpen={showModal}
            onRequestClose={this.closeSortModal}
            data={sortOptions}
            selected={sortBy}
            onSelect={this.onSortBy}
          />
        )}
      </div>
    );
  }
}

Main.propTypes = {
  categories: PropTypes.array,
  posts: PropTypes.array,
  sortBy: PropTypes.string,
  sortOptions: PropTypes.arrayOf(PropTypes.string),
  onSort: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
};

Main.defaultProps = {
  categories: [],
  posts: [],
  sortBy: '',
  sortOptions: [],
  onSort: null,
  onVote: null,
};

export default Main;
