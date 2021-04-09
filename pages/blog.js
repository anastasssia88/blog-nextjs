import styled from 'styled-components'
import { fetchEntries } from '../util/contentfulPosts'

// Components
import Heading1 from '../Components/Heading1'
import Heading2 from '../Components/Heading2'
import Text from '../Components/Text'
import SocialBtns from '../Components/SocialBtns'
import Avatar from '../Components/Avatar'
import Section from '../Components/Section'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import Post from '../Components/blog/Post'
import Post from '../Components/Post'




const blog = ({posts}) => {
    return (
        <>
            <Section light auto>
                    <Navbar />
                    <Heading1 content="Tips & Free French Lessons" />
                    <Text sm mt content="I’m here to help you break speaking barrier and become confident when speaking French. What will help you to speak and understand better? Find answers in my posts. " />
                    {/* <SocialBtns /> */}
            </Section>
            <Section light auto>
                    {/* <Post />
                    <Post />
                    <Post /> */}
                    <div className="posts">
                    {posts.map((p) => {
                        return <Post key={p.date} date={p.date} image={p.image} title={p.title} category={p.category} content={p.content} excerpt={p.excerpt} image={p.image.fields} />
                    })}
                    </div>
            </Section>
            <Footer />
        </>
    );
}

export default blog;

export async function getStaticProps() {
    const res = await fetchEntries()
    const posts = await res.map((p) => {
      return p.fields
    })
  
    return {
      props: {
        posts,
      },
    }
  }