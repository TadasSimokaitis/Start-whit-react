import Cards from './Cards';
import Navigation from './Navigation';


export default function Main(){
    return(
        <main>
        <Cards />

        <div className="content">
          <article className='content__article'>
            <section>
              <h2 className='content__title'>Services</h2>
              <p className='content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.</p>
            </section>
            <section>
              <h3 className='content__sub-header'>Sub Header</h3>
              <p className='content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.</p>
            </section>
          </article>
          <Navigation navType='secondary'/>
          
        </div>
      </main>
    )
}