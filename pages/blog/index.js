import styled from 'styled-components'
import { fetchEntries } from '../../util/contentfulPosts'

// Components
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/shared/Footer'
import PostBox from '../../Components/PostBox'
import { Section, Main } from "../../Components/shared/Wrappers"


const blog = ({posts}) => {
    return (
        <>
            <Section light auto>
              <Main>
                <Navbar />

                <Content>
                  <h1>Tips & Tricks for French Learners</h1>
                  <p>How to speak French with confidence? How to learn French effectively? How do I start learning French? Those are popular questions I get all the time. Find answers to the most popular questions down below in blog posts. </p>
                </Content>
        
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

const Content = styled.div`
  padding: 3rem 0rem;

  h1{
      color: #314654;
    }

  p{
    color: #314654;
    font-size: 20px;
    margin: 2rem 0px;
    font-weight: 400;
  }
`