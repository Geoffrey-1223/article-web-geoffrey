import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const styles = (styleMode) => {
  if (styleMode === 'fullscreen') {
    return 'modal-fullscreen';
  } if (styleMode === '100-fullscreen') {
    return 'modal-100-fullscreen';
  } if (styleMode === 'small') {
    return 'modal-small';
  } if (styleMode === 'large') {
    return 'modal-large';
  } if (styleMode === 'auto-width') {
    return 'modal-auto-width';
  } if (styleMode === 'medium') {
    return 'modal-medium';
  } if (styleMode === 'medium-small') {
    return 'modal-medium-small';
  } if (styleMode === 'medium-s') {
    return 'modal-medium-s';
  }
  return 'modal-default';
};

const overlayClass = (name) => {
  if (name === 'front') {
    return 'z-index-999';
  }
  return name || '';
};

const CustomModal = (props) => {
  const {
    children,
    isOpen,
    onAfterOpen,
    onRequestClose,
    title,
    onClick,
    styleMode,
    overlayClassName,
    modalContentClassName,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      className={styles(styleMode)}
      overlayClassName="modal-overlay "
      ariaHideApp={false}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div className="fs-subtitle font-weight-bold">{title}</div>
          <button
            type="button"
            className="no-decoration-btn pointer text-right"
            onClick={onClick}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className={`modal-content ${modalContentClassName || ''}`}>
          {children}
        </div>
      </div>
    </Modal>
  );
};

CustomModal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.any,
  onRequestClose: PropTypes.any,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func,
  onAfterOpen: PropTypes.func,
  styleMode: PropTypes.string,
  overlayClassName: PropTypes.string,
  modalContentClassName: PropTypes.string,
};


export default CustomModal;
