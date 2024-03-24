import { TextSection } from "@/components/common/text-sections";
import { MainDivStyle } from "@/css/common";
import { LinkBar } from "@/components/common/link-bar"

export default function about() {
    return (
        <div>
            <heading>
                <LinkBar links={["Find People", "Around Me", "About"]}/>
            </heading>
            <main>
                <div style={MainDivStyle}>
                    <TextSection heading="About">
                        <p>Whether you re seeking fellow students in your area or searching for classmates with similar courses, Gator Brain simplifies the hunt for the perfect study partner.</p>
                        <p>Gator Brain is the essential study companion for University of Florida students, engineered to streamline the process of finding study partners.</p>
                        <p>With our app, students can effortlessly locate peers in their vicinity or discover individuals sharing their class schedules, fostering a collaborative environment for academic success.</p>
                        <p>Powered by cutting-edge technology and driven by the spirit of community, Gator Brain empowers students to unlock their full potential by connecting with like-minded learners.</p>
                        <p>Join the Gator Brain community today and embark on a journey towards academic excellence!</p>
                    </TextSection>
                </div>
            </main>
        </div>
    )
}