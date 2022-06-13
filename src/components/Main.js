import Cards from './Cards';
import Navigation from './Navigation';
import Content from './Content'


export default function Main(){
    return(
        <main>
        <Cards />

        <div className="content">
          <article className='content__article'>
            <Content name='Content' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.'/>
            <Content name='Sub Header' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.'/>
          </article>
          <Navigation navType='secondary'/>
          
        </div>
      </main>
    )
}