import './cardstyle.scss';

export function Card(props) {
    return (
        <div className='cards__card'>
            <span className='cards__card-icon'>{props.icon}</span>
            <h3 className='cards__card-title'>{props.title}</h3>
            <p className='cards__card-text'>{props.text}</p>
            <a href={props.link} className='cards__card-link'>{props.link}</a>
        </div>
    )
}