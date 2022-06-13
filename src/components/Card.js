export default function Card(props){
    return(
        <article className='card'>
        <h2 className='card__title'>{props.name}</h2>
        <p className='card__paragraph'>{props.text}</p>
      </article>
    )
}