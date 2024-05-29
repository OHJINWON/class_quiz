import styled from '@emotion/styled';
import React, { useState } from 'react';

const Modal = styled.div`
    border: 1px solid #000;
`

export default function App () {

    const [isOpen, setIsOpen] = useState(false)
    
    const onClickModal = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <div>
            <button onClick={onClickModal}>모달열기</button>
            <Modal style={{display: isOpen ? "block": "none"}}>
                <p>게시글 등록</p>
                <p>게시글 등록되었습니다.</p>
                <div>
                    <button>Cancel</button>
                    <button>Ok</button>
                </div>
            </Modal>
        </div>
    )
  }