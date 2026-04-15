import './App.css'
import logo from './assets/Logo.png'
import zach from './assets/Zach_Sticker.png'
import CastCrewGrid from './CastCrewGrid'

function App() {

  return (
    <div className='app'>
      <img
        src={logo}
        alt="logo"
        className='mx-auto block h-auto w-[88vw] max-w-184 md:w-[46vw] lg:w-[34vw] xl:w-[28vw]'
      />
      <section className='max-md:pl-7 md:px-24 lg:px-48 mb-10' id='Synopsis'>
        <h1 className='font-felt-tip'>
          Synopsis
        </h1>
        <p className='font-new-order'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus efficitur porttitor. Nam sollicitudin ut urna eu tempus. Duis at pellentesque orci. Etiam sit amet egestas tortor. Integer dapibus, libero nec pellentesque lobortis, magna sem dictum arcu, vitae finibus magna risus non odio. Curabitur pharetra nunc eu laoreet pellentesque. Phasellus laoreet nisi metus, in euismod elit fringilla a. Mauris dui lacus, aliquet vel nunc et, bibendum commodo quam. Fusce efficitur lacinia velit vel porta. Pellentesque fermentum, libero vitae pharetra vulputate.
        </p>
      </section>

      <section className='md:px-24 lg:px-48 mb-10' id='Cast'>
        <h1 className='font-felt-tip max-md:pl-7'>
          Cast
        </h1>
        <CastCrewGrid category='cast' />
      </section>

      <section className='md:px-24 lg:px-48 mb-10' id='Crew'>
        <h1 className='font-felt-tip max-md:pl-7'>
          Crew
        </h1>
        <CastCrewGrid category='crew' />
      </section>

      <section className='md:px-24 lg:px-48 mb-10' id='Creative'>
        <h1 className='font-felt-tip max-md:pl-7'>
          Creative
        </h1>
        <CastCrewGrid category='creative' />
      </section>

      <section className='md:px-24 lg:px-48 mb-10' id='Pit'>
        <h1 className='font-felt-tip max-md:pl-7'>
          Pit
        </h1>
        <CastCrewGrid category='pit' />
      </section>

      <section className='max-md:pl-7 md:px-24 lg:px-48 mb-10' id='A Note from Belen'>
        <h1 className='font-felt-tip'>
          A Note from Belen
        </h1>
        <p className='font-new-order mb-5'>
          Picking a show to dedicate our final undergraduate semester to was not easy. We knew it had to be a show that could wrap up and encapsulate four years of BU theater. We debated back and forth for many months, Merrily coming back up frequently. Before Dylan’s introduction to Merrily, I was totally unfamiliar. While I was hesitant at first, I finally listened to the show’s album front to back, and before I knew it, I was openly sobbing on a plane back to Boston. These characters, and the world they live in, became my everything. As the show progresses backwards from 1976, to 1957 we see the story of Frank, Charley, and Mary’s friendship, namely how they struggle through fame and change, all while trying to realize their young adult dreams, which feels especially important at this point in our lives.
        </p>
        <p className='font-new-order mb-5'>
          As graduating seniors, the future has ironically been incredibly present in our minds. From the start of my college career, even without my knowing, Dylan has been intertwined in the web of my life. The first night of freshman year, Dylan ended up in my dorm for an impromptu floor party. After that, we lived on the same floor, shared a class, and didn’t speak for a whole year. However, the universe didn’t let him leave my orbit. We finally crashed into each other for his production of Next To Normal. From that experience forward, I have known his thoughts and feelings as well as my own. Making art with Dylan has been one of the greatest blessings of my life. It is not only joyful but the kind of work that pushes you into new and inspiring places. Being Dylan’s friend, however, has fundamentally changed me forever, and I know that we will be at each other’s side when we reach our It’s A Hit! moment. I will roll it back with you forever.
        </p>
        <p className='font-new-order mb-5'>
          This last semester has been busy, exhausting, and at times overwhelming. But through it all, I knew that at the end of my long days I would be greeted by enough laughter, joy, and creative impulse to fill a whole theater. Spending my evenings and weekends with our team reminded me over and over all of the aspects of theater that I adore and need to survive. Moving into this new and exciting phase of post-grad adulthood, I am not sure how much theater is in my future. However, this process and group of people have left me with memories and friends that I will cherish forever and ever. The bonds we have made and the creative process we have tackled together will stay with me long after this last show.
        </p>
      </section>
      <section className='max-md:pl-7 md:px-24 lg:px-48 mb-10' id='A Note from Dylan'>
        <h1 className='font-felt-tip'>
          A Note from Dylan
        </h1>
        <p className='font-new-order mb-5'>
          The first time I saw Merrily We Roll Along, I was in seventh grade. It was directed by someone who would go on to be one of the greatest mentors in my life, and even then, I remember feeling like I had stumbled into something I wasn’t old enough to fully understand, but somehow already needed. There was something about this show: its ache, its humor, the way it looks at friendship, ambition, and time that stayed with me. Over the years, it became one of those pieces I kept returning to, one I always hoped I might someday get the chance to direct myself. I could have never imagined that I would get to do it now, in the final semester of college, with my best friend by my side.
        </p>
        <p className='font-new-order mb-5'>
          As graduating seniors, the future has ironically been incredibly present in our minds. From the start of my college career, even without my knowing, Dylan has been intertwined in the web of my life. The first night of freshman year, Dylan ended up in my dorm for an impromptu floor party. After that, we lived on the same floor, shared a class, and didn’t speak for a whole year. However, the universe didn’t let him leave my orbit. We finally crashed into each other for his production of Next To Normal. From that experience forward, I have known his thoughts and feelings as well as my own. Making art with Dylan has been one of the greatest blessings of my life. It is not only joyful but the kind of work that pushes you into new and inspiring places. Being Dylan’s friend, however, has fundamentally changed me forever, and I know that we will be at each other’s side when we reach our It’s A Hit! moment. I will roll it back with you forever.
        </p>
        <p className='font-new-order mb-5'>
          This last semester has been busy, exhausting, and at times overwhelming. But through it all, I knew that at the end of my long days I would be greeted by enough laughter, joy, and creative impulse to fill a whole theater. Spending my evenings and weekends with our team reminded me over and over all of the aspects of theater that I adore and need to survive. Moving into this new and exciting phase of post-grad adulthood, I am not sure how much theater is in my future. However, this process and group of people have left me with memories and friends that I will cherish forever and ever. The bonds we have made and the creative process we have tackled together will stay with me long after this last show.
        </p>
      </section>
      <footer className='flex max-md:flex-col items-center max-md:pl-7 md:px-24 lg:px-48 mb-10' id='Credits'>
        <p>
          Program and website designed and developed by
        </p>
        <button
          type='button'
          onClick={() => window.open('https://www.zmarino.com', '_blank')}
          className='group ml-2 cursor-pointer'
        >
          <img
            src={zach}
            alt='Zach Marino'
            className='-rotate-6 w-[44vw] max-w-52 min-w-32 h-auto transition-transform duration-300 ease-out group-hover:scale-[1.04] md:w-[24vw] md:max-w-37.5 md:min-w-24'
          />
        </button>

      </footer>
    </div>
  )
}

export default App
