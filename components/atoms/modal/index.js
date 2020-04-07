import React from 'react';
import ReactModal from 'react-modal';
import { createGlobalStyle } from 'styled-components';

export default function Modal(props) {
  const {
    children,
    isOpen,
    afterOpenModal,
    afterCloseModal,
    onRequestClose,
  } = props;

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        closeTimeoutMS={500}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: '101',
            transition: 'all 0.5s ease'
          },
          content: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            zIndex: '102',
            backgroundColor: 'transparent',
            padding: 0,
            border: 0,
            borderRadius: 0,
            transition: 'all 0.5s ease'
          }
        }}
      >
        {children}
      </ReactModal>
      {isOpen && <Global/>}
    </>
  )
}


const Global = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`
