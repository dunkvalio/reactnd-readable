import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddIcon from 'react-icons/lib/md/add';
import SortIcon from 'react-icons/lib/md/sort';

import { buttonPrimary } from '../../utils/colors';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';
import Group from '../../components/Group';
import SortModal from '../../components/SortModal';

class CategoryView extends Component {

  state = {
    showModal: false,
  };

  openSortModal = () => {
    this.setState({ showModal: true });
  };

  closeSortModal = () => {
    this.setState({ showModal: false });
  };

  onSortBy = value => {
    this.props.onSort(value);
    this.closeSortModal();
  };

  render() {
    const { category, posts, onGoBack, sortOptions, sortBy, onVote } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <Header>
          <BackButton onClick={onGoBack} />
          <Title>{category}</Title>
          <Group>
            <SortIcon
              className="header-icon"
              size={30}
              color={buttonPrimary}
              onClick={this.openSortModal}
            />
            <Link to="/posts/edit">
              <AddIcon size={30} color={buttonPrimary} />
            </Link>
          </Group>
        </Header>
        <Content>
          <List className="list" data={posts} getKey={item => item.id}>
            {(item, index) => (
              <Post pos={++index} item={item} onVote={onVote}/>
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

CategoryView.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default CategoryView;
