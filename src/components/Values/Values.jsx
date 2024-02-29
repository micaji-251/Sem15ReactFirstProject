import './Values.css';

export const Values = ({ValueSrc}) =>{
    const {icon,Title,description} = ValueSrc;
    return(
        <div>
            <div className='iconContainer'>{icon}</div>
            <p className='valuesTitle'>{Title}</p>
            <p className='valuesDesc'>{description}</p>
        </div>
    )
}