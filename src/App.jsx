import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Modal from './Modal'

function App() {
  const [title, setTitle] = useState(['경기도', '강원도', '제주도']);
  const [clickup, setClickup] = useState(0)
  const [modal, setModal] = useState(false)

  return (
    <div className='App'>
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'20px'}}>React Blog</h4>
      </div>
      <div className="list">
        <h4 onClick={()=>{
          setModal(!modal)
        }}>{title[0]}<span onClick={()=>{
          setClickup(clickup + 1);
        }}>👍</span> {clickup}</h4>
        <p>6월 12일 발행</p>
        <button onClick={()=>{
          let copy = [...title]
          copy[0] = '충청도'
          setTitle(copy)
        }}>제목 변경</button>
      </div>
        <div className="list">
        <h4>{title[1]}</h4>
        <p>6월 12일 발행</p>
      </div>
        <div className="list">
        <h4>{title[2]}</h4>
        <p>6월 12일 발행</p>
      </div>
        <div style={{textAlign: 'center', paddingTop: '20px'}}>
          <button onClick={()=>{
            let copy = [...title]
            copy.sort()
            setTitle(copy)
          }}>제목 정렬</button>
        </div>
          
        {
          modal===true && <Modal />
        }

    </div>
  );
}

export default App
