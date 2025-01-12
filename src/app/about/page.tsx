import { Doc, DocElement } from '../doc';
import ObfuscatedEmail from './address';

export default function About() {
  return (
    <Doc>
      <DocElement as='h1'>
        About
      </DocElement>

      <DocElement as='h3'>
        Who are you?
      </DocElement>
      <DocElement>
        I go by many names, online I go by{' '}
        <b>thebigsleepjoe</b>, but you can call me Joe for short.
      </DocElement>
      <DocElement>
        I am a hobbyist developer and a professional IT tech. I've worked on
        many projects, most of which never see the light of day, but my best
        projects can be found on my GitHub page or in the Portfolio section.
      </DocElement>
      <DocElement>
        I am most passionate about AI and machine learning. This passion
        manifests in my modding career: I've made countless mods-- most never
        seeing the light of day--but many focus on adding CPU players (bots) to
        games that don't natively support them.
      </DocElement>
      <DocElement>
        In my spare time I play games, watch/create videos, code, and learn
        about any tech that interests me. I originally got into the tech field
        through playing Roblox as a child. I started by making free asset games,
        and slowly moved onto actually making them myself. They never got
        popular, but I learned a lot from them. With time, I branched out to
        modding games and gained strong experience with various scripting
        languages, like Lua, Python, and JavaScript.
      </DocElement>
      <DocElement>
        You can find my biggest projects on my
        <DocElement as='a' href='https://www.github.com/thebigsleepjoe'>
          GitHub
        </DocElement>.
      </DocElement>

      <DocElement as='h3' id='contact'>
        How do I contact you?
      </DocElement>
      <DocElement>
        You can contact me at the below email address:
        <br />
        <DocElement as='a'>
          <ObfuscatedEmail user='website' domain='bigjoe' tld='dev' />
        </DocElement>
      </DocElement>
      <DocElement>
        I am always open to new opportunities. Feel free to contact me for job
        offers, questions, or potential freelance projects.
      </DocElement>
      <DocElement>
        Please understand that I do NOT work for free, unless it is for an open
        source project that I am personally interested in.
      </DocElement>

      <DocElement as='h3'>
        Why the name?
      </DocElement>
      <DocElement>
        I wish there were a deeper meaning, but the name mostly came from a
        random name generator. I do have sleep issues, which is why "bigsleep"
        is in the name. Obviously my name is Joe, so that's why that is there. I
        have never watched "The Big Sleep."
      </DocElement>

      <DocElement as='h3'>
        About This Website
      </DocElement>
      <DocElement>
        This website is very simple. The tech stack is Next.js (and thus React),
        Tailwind for the bulk of CSS, and some small custom CSS
        animations/styles.
      </DocElement>
    </Doc>
  );
}
