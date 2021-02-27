import s from './StartPage.module.css'
import swal from 'sweetalert';
import { data } from './../MainPage/game/dataGame'
import { MainPage } from '../MainPage/MainPage';


export const StartPage = () => {

  const startGame = () =>{ 
    const firstName = document.querySelector('#first_name').value
    const lastName = document.querySelector('#last_name').value


    
    if (!firstName || !lastName) {
      swal("Нou need to fill in the input fields");
    } else {
      data.player.name = firstName 
      data.player.lastName = lastName

      return (
        <MainPage />
      );
    }
    console.log("sfirstName", firstName);
    
  }




  return (
    <div class="row">
      <div class="col s12 m6" className={`col s12 m6 ${s.inputGroup}`}>
        <div class="card   grey lighten-1">
          <div class="card-content white-text">

          <div class="row">
            <div class="input-field col s6">
              <p>Name</p>
              <input  id="first_name" type="text" class="validate"/>
 
            </div>
            <div class="input-field col s6">
              <p>Last Name</p>
              <input id="last_name" type="text" class="validate"/>
            </div>
          </div>

          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn" onClick={startGame}>Start</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}