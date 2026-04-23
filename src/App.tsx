import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/Logo.png'
import zach from './assets/Zach_Sticker.png'
import CastCrewGrid from './CastCrewGrid'
import { castMembers, crewMembers, creativeMembers, pitMembers } from './data/castCrew'
import { ArrowUp } from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
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
            Merrily We Roll Along tells the story of three “old friends” as their friendship devolves over 20 years. Told in reverse chronological order, we follow Franklin Shepard, a talented composer who sacrifices his relationships to be a Hollywood film producer, his writing partner Charley Kringas, and their friend Mary. It begins in 1976 at the friends’ lowest moment and ends in 1957 when their journeys are just beginning.

            It features music and lyrics by Stephen Sondheim and a book by George Furth. It is based on the 1934 play of the same name by George S. Kaufman and Moss Hart.
          </p>
        </section>

        <section className='md:px-24 lg:px-48 mb-10' id='Cast'>
          <h1 className='font-felt-tip max-md:pl-7'>
            Cast
          </h1>
          <CastCrewGrid members={castMembers} />
        </section>

        <section className='md:px-24 lg:px-48 mb-10' id='Crew'>
          <h1 className='font-felt-tip max-md:pl-7'>
            Crew
          </h1>
          <CastCrewGrid members={crewMembers} />
        </section>

        <section className='md:px-24 lg:px-48 mb-10' id='Creative'>
          <h1 className='font-felt-tip max-md:pl-7'>
            Creative
          </h1>
          <CastCrewGrid members={creativeMembers} />
        </section>

        <section className='md:px-24 lg:px-48 mb-10' id='Pit'>
          <h1 className='font-felt-tip max-md:pl-7'>
            Pit
          </h1>
          <CastCrewGrid members={pitMembers} />
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
        <section className='max-md:pl-7 md:px-24 lg:px-48 mb-10' id='MTI Billing'>
          <h1 className='font-new-order'>MERRILY WE ROLL ALONG</h1>
          <p>Is presented through special arrangement with Music Theatre International (MTI).
            All authorized performance materials are also supplied by MTI. <br />
            <a href='https://www.mtishows.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:text-blue-700 hover:underline'>
              www.mtishows.com
            </a>
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

      <button
        type='button'
        aria-label='Return to top'
        tabIndex={isScrolled ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 cursor-pointer ${isScrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
          }`}
      >
        <ArrowUp />
      </button>
    </>
  )
}

export default App
