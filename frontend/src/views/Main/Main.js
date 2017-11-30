import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import AddIcon from 'react-icons/lib/md/add';
import SortIcon from 'react-icons/lib/md/sort';
import SquareIcon from 'react-icons/lib/md/check-box-outline-blank';
import CheckSquareIcon from 'react-icons/lib/md/check-box';

import { buttonPrimary } from '../../utils/colors';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Group from '../../components/Group';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';

class Main extends Component {

  state = {
    showModal: false,
  }

  componentDidMount() {
    this.props.onSort(this.props.sortBy);
  }

  openSortModal = () => {
    this.setState({ showModal: true });
  }

  closeSortModal = () => {
    this.setState({ showModal: false });
  }

  onSortBy = (func, value) => () => {
    func(value);
    this.closeSortModal();
  }

  render() {
    const {
      categories,
      posts,
      sortBy,
      sortOptions,
      onSort,
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
          <Modal
            className='modal option-container'
            overlayClassName='overlay'
            isOpen={showModal}
            onRequestClose={this.closeSortModal}
            contentLabel='Sort Posts'
          >
            {sortOptions.map(val => (
              <div
                className='option'
                key={val}
                onClick={this.onSortBy(onSort, val)}
              >
                {val === sortBy
                  ? <CheckSquareIcon size={30} color={buttonPrimary} />
                  : <SquareIcon size={30} color={buttonPrimary} />
                }
                <div className='option-value'>
                  {val}
                </div>
              </div>
            ))}
          </Modal>
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
