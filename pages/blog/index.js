import styled from 'styled-components'
import { fetchEntries } from '../../util/contentfulPosts'

// Components
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import PostBox from '../../Components/blog/PostBox'
import { Section, Main } from "../../Components/shared/Wrappers"


const blog = ({posts}) => {
    return (
        <>
            <Section light auto>
              <Main>
                <Navbar />

                <Hero>
                  <h2>Productivity & Web development tips</h2>
                  <p>How to speak French with confidence? How to learn French effectively? How do I start learning French? Those are popular questions I get all the time. Find answers to the most popular questions down below in blog posts. </p>
                </Hero>
        
                <div className="posts">
                {posts.map((p) => {
                    return <PostBox key={p.id} date={p.date} image={p.image} title={p.title} category={p.category} content={p.content} excerpt={p.excerpt} image={p.image.fields} link={p.slug} /> 
                })}
                </div>
              </Main>
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
      revalidate: 1
    }
  }



const Hero = styled.section`
    h2 {
    margin-top: 3rem;
    }

    p {
    margin: 1.5rem 0rem;
}
`