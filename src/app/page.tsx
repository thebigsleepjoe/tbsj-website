import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Doc, DocElement } from "./doc";
import { Hero } from "./hero";
import {
  faAudioDescription,
  faGlasses,
  faHandshake,
  faHeadphones,
  faMoon,
  faRobot,
  faRocket,
  faTrowel,
} from "@fortawesome/free-solid-svg-icons";
import { TagDark } from "./tag";

export default function Home() {
  return (
    <section>
      <Hero />
      <Doc>
        <DocElement as="h1">
          <FontAwesomeIcon icon={faHandshake} /> Hello!
        </DocElement>
        <DocElement>
          Welcome to my personal website. This is where I host my portfolio,
          contact info, and link to my blog.
        </DocElement>
        <DocElement>
          For employers: this is largely my <b>programming-focused</b>{" "}
          showcase/portfolio. It is not intended to showcase my IT skillset. If
          you're looking for my resume, you can
          <DocElement as="a" href="/about#contact">
            email me
          </DocElement>
          &nbsp;with info (like who you are) and I may send you a proper CV.
        </DocElement>
        <DocElement>
          I also maintain a blog on Substack, where I post a wide range of
          articles (usually) bimonthly. The topics range from politics, to
          technology, to personal reflections.
          <DocElement as="a" href="https://thebsj.substack.com">
            here
          </DocElement>
          .
        </DocElement>
        <DocElement as="hr" />
        <DocElement as="h2">Programming Portfolio</DocElement>
        <div className="ml-4">
          {/* Chrysalis Space Capitalism */}
          <DocElement as="h3">
            <FontAwesomeIcon icon={faRocket} /> Chrysalis
          </DocElement>
          <div className="flex flex-wrap gap-2 -mt-2 max-w-fit">
            <TagDark color="purple" size="lg">
              Lua
            </TagDark>
            <TagDark color="purple" size="lg">
              Game Development
            </TagDark>
            <TagDark color="purple" size="lg">
              Simulation
            </TagDark>
            <DocElement>
              A game that is currently deep in development, intended to sell on
              Steam likely between 2027-2028. It is an eco-political management
              sandbox game, where the player manages fleets, economic policy,
              and attempts to hold together their economy and nation.
            </DocElement>
          </div>

          {/* TTT Bots */}
          <DocElement as="h3">
            <FontAwesomeIcon icon={faRobot} /> TTT Bots
          </DocElement>
          <div className="flex flex-wrap gap-2 -mt-2 max-w-fit">
            <TagDark color="purple" size="lg">
              Lua
            </TagDark>
            <TagDark color="purple" size="lg">
              Modding
            </TagDark>
          </div>
          <DocElement>
            My game-bot addon with 58,000+ lifetime users for Trouble in
            Terrorist Town (TTT), and its derivative, TTT2. Check it out on
            <DocElement
              as="a"
              href="https://www.github.com/thebigsleepjoe/TTT-Bots-2/"
            >
              GitHub
            </DocElement>
            .
          </DocElement>

          {/* Necesse Ambience */}
          <DocElement as="h3">
            <FontAwesomeIcon icon={faHeadphones} /> Necesse Ambience
          </DocElement>
          <div className="flex flex-wrap gap-2 -mt-2 max-w-fit">
            <TagDark color="blue" size="lg">
              Java
            </TagDark>
            <TagDark color="blue" size="lg">
              LWJGL
            </TagDark>
            <TagDark color="purple" size="lg">
              Modding
            </TagDark>
            <TagDark color="indigo" size="lg">
              Video Editing
            </TagDark>
          </div>
          <DocElement>
            A mod that brings custom-picked sounds into the game world of
            Necesse. This adds footsteps, animal sounds, and global ambience
            which is dynamically muffled when you move indoors.
            <DocElement
              as="a"
              href="https://www.github.com/thebigsleepjoe/NecesseAmbience/"
            >
              GitHub
            </DocElement>
            .
          </DocElement>

          {/* This website */}
          <DocElement as="h3">
            <FontAwesomeIcon icon={faMoon} /> bigsleepjoe.com
          </DocElement>
          <div className="flex flex-wrap gap-2 -mt-2 max-w-fit">
            <TagDark color="yellow" size="lg">
              Typescript
            </TagDark>
            <TagDark color="yellow" size="lg">
              React
            </TagDark>
            <TagDark color="yellow" size="lg">
              Next.js
            </TagDark>
            <TagDark color="yellow" size="lg">
              Tailwind
            </TagDark>
            <TagDark color="gray" size="lg">
              GNU/Linux
            </TagDark>
          </div>
          <DocElement>
            The website you're currently looking at! This is built using
            Next.js, Tailwind, and elbow grease.
          </DocElement>
          <DocElement>
            The source code for this website can be found on
            <DocElement
              as="a"
              href="https://github.com/thebigsleepjoe/tbsj-website"
            >
              GitHub
            </DocElement>
            .
          </DocElement>

          {/* Sentiment Analysis */}
          <DocElement as="h3">
            <FontAwesomeIcon icon={faGlasses} /> YT Comment Analysis
          </DocElement>
          <div className="flex flex-wrap gap-2 -mt-2 max-w-fit">
            <TagDark color="yellow" size="lg">
              Typescript
            </TagDark>
            <TagDark color="green" size="lg">
              Python
            </TagDark>
            <TagDark color="green" size="lg">
              AI
            </TagDark>
            <TagDark color="green" size="lg">
              Machine Learning
            </TagDark>
            <TagDark color="indigo" size="lg">
              Video Editing
            </TagDark>
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
              as="a"
              href="https://www.youtube.com/watch?v=z4_qINjfWkY"
            >
              watch here
            </DocElement>
            , or you can
            <DocElement
              as="a"
              href="https://thebigsleepjoe.github.io/yt-comment-sa-2024/"
            >
              read
            </DocElement>{" "}
            the actual report here.
          </DocElement>

          {/* Sentiment Analysis */}
          <DocElement as="h3">
            <FontAwesomeIcon icon={faTrowel} /> Pithee Scraper
          </DocElement>
          <div className="flex flex-wrap gap-2 -mt-2 max-w-fit">
            <TagDark color="green" size="lg">
              Python
            </TagDark>
            <TagDark color="green" size="lg">
              Web Scraping
            </TagDark>
            <TagDark color="green" size="lg">
              AI
            </TagDark>
            <TagDark color="green" size="lg">
              Data Analysis
            </TagDark>
          </div>
          <DocElement>
            I wrote a scraper for the website
            <DocElement as="a" href="https://www.pithee.com/">
              pithee.com
            </DocElement>
            , which is a crowdsourced joke website by Jacksfilms. My scraper
            uses a login token to grab a bunch of random user posts and can
            collect large amounts of post data in a short amount of time. It can
            also collect winner posts at a much slower rate without needing a
            token.
          </DocElement>
          <DocElement>
            My original intention was to use this data to train a classifier to
            measure if a joke was funny or not. Unfortunately, the
            winning/losing jokes were actually too similar for any classifier I
            tried to actually differentiate them (in a statistically meaningful
            way).
          </DocElement>
        </div>
      </Doc>
    </section>
  );
}
