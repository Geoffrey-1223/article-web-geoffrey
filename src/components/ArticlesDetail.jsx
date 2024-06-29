import React from 'react'
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Modal from 'react-modal';
import '../css/Modal.css';
const ArticleDetail = (props) => {
    const {
        articleData,
        isOpen,
        onClose,
      } = props;
    return (
        <>
  <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-auto-width"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
     <div className="modal-container">
      <div className='modal-header-wrap'>
          <div className="modal-header-title">
            <h1>Article</h1>
          </div>
          <div className="modal-header">
            <button
                type="button"
                style={{ border: "none", background: "none" }}
                onClick={onClose}
              >
                <i className="material-icons " style={{ color: "#fff" }}>close</i> 
              </button>
          </div>
      </div>

      <div className='modal-content'>
          {articleData ? (
            <>
            <div className="container my-5 py-3">
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img 
                      src={articleData.urlToImage}
                      alt={articleData.title}
                      height="300px" 
                      />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="custom-title">{articleData.title}</h1>
                      <hr />
                      <div className="row">
                          <div className="col-md-4 fw-bold">Author:</div>
                          <div className="col-md-8">{articleData.author}</div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 fw-bold">Source:</div>
                          <div className="col-md-8">{articleData.source.name}</div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 fw-bold">Publish Date:</div>
                          <div className="col-md-8"> {format(new Date(articleData.publishedAt), 'yyyy-MM-dd')}</div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 fw-bold">Description:</div>
                          <div className="col-md-8">{articleData.description}</div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 fw-bold">Content:</div>
                          <div className="col-md-8">{articleData.content}</div>
                      </div>
                      <div className="row">
                          <div className="col-md-4 fw-bold">URL Link:</div>
                          <div className="col-md-8">
                            <a href={articleData.url} target="_blank" rel="noopener noreferrer" className="article-link">
                                {articleData.url}
                            </a>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            
            </>
          ) : (
            <>
             Loading...
            </>
          )}
        </div>
        
      </div>
    </Modal>
        </>
    )
}

ArticleDetail.propTypes = {
    articleData: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
  };

export default ArticleDetail
