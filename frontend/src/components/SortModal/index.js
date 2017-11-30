import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SquareIcon from 'react-icons/lib/md/check-box-outline-blank';
import CheckSquareIcon from 'react-icons/lib/md/check-box';

import { buttonPrimary } from '../../utils/colors';

const SortModal = (props) => {
  const {
    isOpen,
    onRequestColse,
    data,
    selected,
    onSelect
  } = props;

  return (
    <Modal
      className="modal option-container"
      overlayClassName="overlay"
      isOpen={isOpen}
      onRequestClose={onRequestColse}
      contentLabel="Sort Posts"
    >
      {data.map(val => (
        <div className="option" key={val} onClick={() => onSelect(val)}>
          {val === selected ? (
            <CheckSquareIcon size={30} color={buttonPrimary} />
          ) : (
            <SquareIcon size={30} color={buttonPrimary} />
          )}
          <div className="option-value">{val}</div>
        </div>
      ))}
    </Modal>
  )
};

SortModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
}

export default SortModal;
