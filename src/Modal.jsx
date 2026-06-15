import React from 'react'

const Modal = (props) => {
  const {title, color, titlenum, setModal, setTitle} = props

  return (
    <div className="modal" style=
    {{ backgroundColor: color }}>

        <h4>제목 : {title[titlenum]}</h4>

        <p>날짜</p>

        <p>상세내용</p>  

        <input type="text" onChange={(e)=>{
          setInput
        }} />

        <button onClick={()=>{
          let copy = [...title]
          copy[titlenum]=input
          setTitle(copy)
          setIinput('')
        }}>제목 수정</button>

        <button onClick={()=>{
          setModal(false)}}>닫기</button>  

    </div>

  )

}

export default Modal