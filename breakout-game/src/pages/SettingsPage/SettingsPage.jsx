import { useRef, useState } from 'react'
import s from './SettingsPage.module.css'

export const SettingsPage = () => {
  //const checkAudioRef = useRef()

  const audioSettingsLocal = JSON.parse(localStorage.getItem('audio'))
  const [AudioValue, setAudio] = useState(audioSettingsLocal.value)
  
  const soundSettingsLocal = JSON.parse(localStorage.getItem('sound'))
  const [soundValue, setSound] = useState(soundSettingsLocal.value)

  const changeSound = () => {
    const soundValue = JSON.parse(localStorage.getItem('sound')) 
    if ( soundValue.value ===  "checked") {
      localStorage.setItem('sound', JSON.stringify({value: ''}))
      setSound('')
      document.location.reload()
    } else {
      localStorage.setItem('sound', JSON.stringify({value: "checked"}))
      setSound("checked")
      document.location.reload()
    }
  }



  const changeAudio = () => {
    const audioValue = JSON.parse(localStorage.getItem('audio')) 
    if ( audioValue.value ===  "checked") {
      localStorage.setItem('audio', JSON.stringify({value: ''}))
      setAudio('')
    } else {
      localStorage.setItem('audio', JSON.stringify({value: "checked"}))
      setAudio("checked")
    }
  }



  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={`row ${s.card}`}>
          <div class="col s12 m12">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Audio</span>
                <p>
                  <label>
                    <input onClick={changeAudio} type="checkbox" checked={AudioValue}/>
                    <span>ON</span>
                  </label>
                </p>
                <br/>
                <span class="card-title">Sound</span>
                <p>
                  <label>
                    <input onClick={changeSound} type="checkbox" checked={soundValue}/>
                    <span>ON</span>
                  </label>
                </p>
              </div>
              <div class="card-action">
                <span class="card-title">Fullscreen: Hotkey - q</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}