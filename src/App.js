import './App.css';
import {FaFacebook, FaSearch, FaAlignJustify } from 'react-icons/fa';

//iniciar: C:\Users\jonat\OneDrive\Documentos\GitHub\DankiCode-FacebookClone\Facebook-Clone\facebookclone>npm start ou no proprio terminal 'npm start'.

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='headerLeft'>

          <div className='logo-fb'>
            <FaFacebook/>
          </div>

          <div className='search-fb'>
            <FaSearch/>
          </div>

          <div className='menu-fb'>
            <FaAlignJustify/>
          </div>

        </div>


      <div className='headerRigth'>
        <div className='plus-btn'>
            +
        </div>
      </div>


      </div>      
    </div>
  );
}

export default App;
