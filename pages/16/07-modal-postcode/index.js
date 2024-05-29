import styled from "@emotion/styled";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const Modal = styled.div`
    board: 1px solid
`

export default function App () {

    const [isopen, setIsopen] = useState(false)
    const [address, setAddress] = useState("")

    const onClickModal = () => {
        setIsopen((isopen) => !isopen)
    }

    const handleComplete = (data) => {
        console.log(data)
        setAddress(data.address)
        setIsopen(false)
    }

    const handleCancel = () => {
        setIsopen(false)
    }

    const handleOk = () => {
        setIsopen(false)
    }

    return (
        <div>
            <button onClick={onClickModal}>모달열기</button>
            <span>{address ? address : ""}</span>
            {
                isopen && (
                    <Modal>
                        <DaumPostcodeEmbed onComplete={handleComplete} />
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleOk}>Ok</button>
                    </Modal>
                )
            }
        </div>
    )
}