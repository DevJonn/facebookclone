import danki_bg from './resources/danki_bg.jpg';
import agumon_bg from './resources/agumon_bg.png';

export default function(){
            return(
    <div className='stories'>
                <div className='storiesCard' style={{backgroundImage: `url(${agumon_bg})`}}>
                <p>Jonathan Torres</p>
                </div>
                        
            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Jonathan Torres</p>
                </div>

            <div className='storiesCard' style={{backgroundImage: `url(${agumon_bg})`}}>
                <p>Jonathan Torres</p>
                </div>

            <div className='storiesCard' style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Jonathan Torres</p>
                </div>

            <div className='storiesCard' style={{backgroundImage: `url(${agumon_bg})`}}>
                <p>Jonathan Torres</p>
                </div>
        </div>
            

        );
}