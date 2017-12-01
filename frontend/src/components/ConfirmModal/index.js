import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Group from '../Group';

const ConfirmModal = props => {
  const { isOpen, onRequestClose, message, onConfirm } = props;
  return (
    <Modal
      className="modal option-container"
      overlayClassName="overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sort Posts"
    >
      <h3 className='flex text-centered'>{message}</h3>
      <Group>
        <button onClick={onRequestClose} className="form-button-primary">
          Cancel
        </button>
        <button onClick={onConfirm} className="form-button-primary">
          Confirm
        </button>
      </Group>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
};

export default ConfirmModal;
