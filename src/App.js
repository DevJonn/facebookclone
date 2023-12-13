import './App.css';
import danki_bg from './resources/danki_bg.jpg';
import agumon_bg from './resources/agumon_bg.png';
import Stories from './Stories';
import Header from './Header';

//iniciar: C:\Users\jonat\OneDrive\Documentos\GitHub\DankiCode-FacebookClone\Facebook-Clone\facebookclone>npm start ou no proprio terminal 'npm start'.

//aula terminada em 49:00

function App() {
  return (
    <div className="App">
      <Header />
      <Stories/>
      <div className='feed'>
        <div className='feedForm'>
            <img src={agumon_bg} />
            <input type='text'   />
        </div>
      </div>
    </div>  
  );
}

export default App;
