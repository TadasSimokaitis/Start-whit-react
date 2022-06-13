export default function Content(props){
    return(
        <section>
              <h2 className='content__title'>{props.name}</h2>
              <p className='content__paragraph'>{props.text}</p>
            </section>
    )
}