import { Doc, DocElement } from "../doc";
import ObfuscatedEmail from "./address";

export default function About() {
    return <Doc>
        <DocElement as='h1'>
            About
        </DocElement>

        <DocElement as='h3'>
            Who are you?
        </DocElement>
        <DocElement>
            I am a hobbyist developer and a professional IT tech.
            I've worked on many projects, most of which are small or
            incomplete. You can find my biggest projects on my
            <DocElement as='a' href='https://www.github.com/thebigsleepjoe'>GitHub</DocElement>.
        </DocElement>
        <DocElement>
            To avoid repeating myself, please visit the
            <DocElement as='a' href='/'>landing page</DocElement>
            &nbsp;if you want to learn more about who I am.
        </DocElement>

        <DocElement as='h3' id="contact">
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
            I am always open to new opportunities.
            Feel free to contact me for job offers,
            questions, or potential freelance projects.
        </DocElement>
        <DocElement>
            Please understand that I do NOT work for free, unless
            it is for an open source project that I am personally
            interested in. 
        </DocElement>

        <DocElement as='h3'>
            About This Website
        </DocElement>
        <DocElement>
            This website is very simple. The tech stack is
            Next.js (and thus React), Tailwind for the bulk of CSS,
            and some small custom CSS animations/styles.
        </DocElement>
    </Doc>
}