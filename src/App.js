import './App.css';
import danki_bg from './resources/danki_bg.webp';
import Header from './Header';

//iniciar: C:\Users\jonat\OneDrive\Documentos\GitHub\DankiCode-FacebookClone\Facebook-Clone\facebookclone>npm start ou no proprio terminal 'npm start'.

//aula terminada em 24:50

function App() {
  return (
    <div className="App">
      <Header />
        <div className='stories'>
            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
              <p>Jonathan Torres</p>
            </div>
        </div>
        <div className='stories'>
            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
              <p>Jonathan Torres</p>
            </div>
        </div>
        <div className='stories'>
            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
              <p>Jonathan Torres</p>
            </div>
        </div>
        <div className='stories'>
            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
              <p>Jonathan Torres</p>
            </div>
        </div>
        <div className='stories'>
            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
              <p>Jonathan Torres</p>
            </div>
        </div>
    </div>  
  );
}

export default App;
