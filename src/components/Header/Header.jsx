import {SubHeader} from "../SubHeader";
import './Header.css';

export const Header = ({namePerson = 'no name', fullAge}) =>{
    console.log(namePerson);
    const message = 'Hola soy el header';
    return (
    <header className="Header"> 
        {message} - {10+20} 
        <SubHeader fullAge={fullAge}/>
    </header>
    );
};