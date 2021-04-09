import styled from 'styled-components'
import { fetchEntries } from '../../util/contentfulPosts'

// Components
import Heading1 from '../../Components/Heading1'
import Text from '../../Components/Text'
import Section from '../../Components/Section'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import PostBox from '../../Components/PostBox'


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
                    <div className="posts">
                    {posts.map((p) => {
                        return <PostBox key={p.id} date={p.date} image={p.image} title={p.title} category={p.category} content={p.content} excerpt={p.excerpt} image={p.image.fields} link={p.slug} /> 
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