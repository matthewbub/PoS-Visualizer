'use client';
import { experimental_useFormState as useFormState } from 'react-dom'
import { handleFormSubmission } from './actions';

export default function Home() {
  const [state, formAction] = useFormState(handleFormSubmission, {
    textarea: '',
    success: false,
  })

  return (
    <main className="home"> 
      <form action={formAction} className='home__form'>
        <label htmlFor='textarea' className='home__label'>Parts of Speech (PoS) Visualizer</label>
        <textarea id='textarea' name='textarea' className="home__textarea" defaultValue={'In the interconnected world of modern tech, APIs play a pivotal role. Crafted by adept developers, these interfaces connect diverse systems seamlessly. They bridge gaps, facilitate data exchange, and enhance interoperability, making integrations smooth and efficient.'}/>
        <div className="home__button-container">
          <button type="submit" className="home__button">
            PoSify
          </button>
        </div>
      </form>
      
      <aside className='home__aside'>        
        <h2 className="home__title">Output</h2>
        <div>
          {state?.textarea && state?.textarea.length > 0 && (
            <div dangerouslySetInnerHTML={{__html: state?.textarea }} />
          )}
        </div>
      </aside>
    </main>
  )
}
