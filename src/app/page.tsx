import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Doc, DocElement } from './doc';
import { Hero } from './hero';
import {
  faGlasses,
  faHandshake,
  faMoon,
  faRobot,
  faTrowel,
} from '@fortawesome/free-solid-svg-icons';
import { TagDark } from './tag';

export default function Home() {
  return (
    <section>
      <Hero />
      <Doc>
        <DocElement as='h1'>
          <FontAwesomeIcon icon={faHandshake} /> Hello!
        </DocElement>
        <DocElement>
          Welcome to my personal website. This is where I host my portfolio,
          contact info, and make myself look professional with colorful
          gradients and stock images.
        </DocElement>
        <DocElement>
          This page is my <b>programming-focused</b> showcase/portfolio.
          If you're looking for my resume, you can
          <DocElement as='a' href='/about#contact'>email me</DocElement>
          &nbsp;with info (like who you are/are with) and I may send
          you a proper CV.
        </DocElement>
        <DocElement as='hr' />
        <DocElement as='h2'>
          Portfolio
        </DocElement>
        <div className='ml-4'>
          {/* TTT Bots */}
          <DocElement as='h3'>
            <FontAwesomeIcon icon={faRobot} /> TTT Bots
          </DocElement>
          <div className='flex flex-wrap gap-2 -mt-2 max-w-fit'>
            <TagDark color='purple' size='lg'>Lua</TagDark>
            <TagDark color='green' size='lg'>AI</TagDark>
            <TagDark color='red' size='lg'>Modding</TagDark>
          </div>
          <DocElement>
            A bot addon for the popular Garry's Mod gamemode Trouble in
            Terrorist Town (TTT), and its derivative, TTT2. Check it out on
            <DocElement
              as='a'
              href='https://www.github.com/thebigsleepjoe/TTT-Bots-2/'
            >
              GitHub
            </DocElement>.
          </DocElement>

          {/* This website */}
          <DocElement as='h3'>
            <FontAwesomeIcon icon={faMoon} /> bigsleepjoe.com
          </DocElement>
          <div className='flex flex-wrap gap-2 -mt-2 max-w-fit'>
            <TagDark color='blue' size='lg'>Typescript</TagDark>
            <TagDark color='blue' size='lg'>React</TagDark>
            <TagDark color='blue' size='lg'>Next.js</TagDark>
            <TagDark color='green' size='lg'>Tailwind</TagDark>
            <TagDark color='red' size='lg'>GNU/Linux</TagDark>
          </div>
          <DocElement>
            The website you're currently looking at! This is built using
            Next.js, Tailwind, and elbow grease. As of writing, this is being
            hosted on my Raspberry PI 5 via Cloudflare tunnel.
          </DocElement>
          <DocElement>
            The source code for this website can be found on
            <DocElement
              as='a'
              href='https://github.com/thebigsleepjoe/tbsj-website'
            >
              GitHub
            </DocElement>.
          </DocElement>

          {/* Sentiment Analysis */}
          <DocElement as='h3'>
            <FontAwesomeIcon icon={faGlasses} /> YT Comment Analysis
          </DocElement>
          <div className='flex flex-wrap gap-2 -mt-2 max-w-fit'>
            <TagDark color='blue' size='lg'>Typescript</TagDark>
            <TagDark color='green' size='lg'>Python</TagDark>
            <TagDark color='green' size='lg'>AI</TagDark>
            <TagDark color='green' size='lg'>Machine Learning</TagDark>
            <TagDark color='purple' size='lg'>Video</TagDark>
            <TagDark color='purple' size='lg'>Editing</TagDark>
          </div>
          <DocElement>
            I scraped tens of thousands of YouTube comments from over a thousand
            YouTube videos, sorted them by video category, and ran a few data
            processing algorithms on each comment.
          </DocElement>
          <DocElement>
            I then compiled some interesting results and graphs into a video,
            which you can
            <DocElement
              as='a'
              href='https://www.youtube.com/watch?v=z4_qINjfWkY'
            >
              watch here
            </DocElement>, or you can
            <DocElement
              as='a'
              href='https://thebigsleepjoe.github.io/yt-comment-sa-2024/'
            >
              read
            </DocElement>{' '}
            the actual report here.
          </DocElement>

          {/* Sentiment Analysis */}
          <DocElement as='h3'>
            <FontAwesomeIcon icon={faTrowel} /> Pithee Scraper
          </DocElement>
          <div className='flex flex-wrap gap-2 -mt-2 max-w-fit'>
            <TagDark color='green' size='lg'>Python</TagDark>
            <TagDark color='yellow' size='lg'>Web Scraping</TagDark>
            <TagDark color='green' size='lg'>AI</TagDark>
            <TagDark color='red' size='lg'>Data Analysis</TagDark>
          </div>
          <DocElement>
            I wrote a scraper for the website
            <DocElement as='a' href='https://www.pithee.com/'>
              pithee.com
            </DocElement>, which is a crowdsourced joke website by Jacksfilms.
            My scraper uses a login token to grab a bunch of random user posts
            and can collect large amounts of post data in a short amount of
            time. It can also collect winner posts at a much slower rate without
            needing a token.
          </DocElement>
          <DocElement>
            My original intention was to use this data to train a classifier to
            measure if a joke was funny or not. Unfortunately, the
            winning/losing jokes were actually too similar for any classifier I
            tried to actually differentiate them (in a statistically meaningful
            way).
          </DocElement>
        </div>
        <DocElement as='hr' />
        <DocElement as='h2'>
          About Me
        </DocElement>
        <DocElement>
          I go by many names, online I go by <b>thebigsleepjoe</b>, but you can
          call me Joe for short.
        </DocElement>
        <DocElement>
          I am a hobbyist developer and a professional IT tech. I've worked on
          many projects, most of which never see the light of day, but my
          best projects can be found on my GitHub page or in the Portfolio
          section.
        </DocElement>
        <DocElement>
          I am most passionate about AI and machine learning. This passion
          manefests in my modding career: I've made countless mods-- most never
          seeing the light of day--but many focus on adding CPU players (bots)
          to games that don't natively support them.
        </DocElement>
        <DocElement>
          In my spare time I play games, watch/create videos, code, and learn
          about any tech that interests me. I originally got into the tech field
          through playing Roblox as a child. I started by making free asset
          games, and slowly moved onto actually making them myself. They never
          got popular, but I learned a lot from them. With time, I branched out
          to modding games and gained strong experience with various scripting
          languages, like Lua, Python, and JavaScript.
        </DocElement>
      </Doc>
    </section>
  );
}
