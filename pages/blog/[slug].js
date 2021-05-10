import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from "styled-components";
import { Section, Main } from "../../Components/shared/Wrappers"
import Navbar from '../../Components/navbar/Navbar'
import Btn from "../../Components/shared/Btn"
import Footer from "../../Components/shared/Footer"

const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
})

export async function getStaticProps({params}) { 
    let data = await client
    .getEntries({
        content_type: "blogPost",
        "fields.slug": params.slug
    })

    return {
        props: {
            blogPost: data.items[0],
        },
        revalidate: 1
    };
}

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: "blogPost",
    })

    return {
        paths: data.items.map((item) => ({
            params: {slug: item.fields.slug}
        })),
        fallback: false,
    };
}


const SinglePost = ({ blogPost }) => {
    let {id, title, slug, date, image, category, excerpt, content} = blogPost.fields
    let description = image.fields.title
    let file = image.fields.file

    // Date formatter
    let formattedDate = new Date(date);
    formattedDate = formattedDate.toString()
    let m = formattedDate.substring(4, 7)
    let d = formattedDate.substring(8, 10)
    let y = formattedDate.substring(11, 15) 

    if(!blogPost) return <div>404 error</div>

    return (
        <>
        <Section light auto >
            <Main>
                <Navbar />
            </Main>
            {/* <HeroImg alt={description} src={`https:${file.url}`}/> */}
            <HeroImg>
                <img alt={description} src={`https:${file.url}`}/>
            </HeroImg>
            <Intro>
                <h1>{title}</h1> 
                <br/>
                {/* <p>Posted on <span>{m} {d}, {y}</span></p>
                <p>Category: <span>{category}</span></p> */}
                <br/>
            </Intro>
            
            <Main alignLeft>
                <Content>{ documentToReactComponents(content, {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: node => <img src={node.data.target.fields.file.url} width={100} height={150} />
                    }
                }) }</Content>
                <PreFooter>
                    <Btn content="More posts" href="/blog"/>
                </PreFooter>
            </Main>
        </Section>
        <Footer />
    </>
    );
}

export default SinglePost;


const Intro = styled(Main)`
    align-items: flex-start;

    h1, h2, h3 {
        text-align: center;
        margin-top: 3rem;
    }

    span {
        font-size: 16px;
        color: rgba(57, 84, 102, 0.8);
        margin-top: 20px;
    }
` 

const HeroImg = styled.div`
    background: #BE4357;
    padding-bottom: 2px;

    img {
        object-fit: cover;
        width: 100%;
        height: 21rem;
        transition: all 0.3s ease;

        &:hover {
            opacity: 0.5;
        }
    }
`

const Content = styled.div`
    p {
        font-size: 22px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    ul {
        list-style-type: disc;
        padding: 30px;

        li {
            margin-bottom: 0px;
        }
    }

    h2, h3, h4 {
        text-align: center;
        margin-top: 6rem;
        margin-bottom: 3rem;
}
`

const PreFooter = styled.div`
    /* flex-direction: column; */
    justify-self: center;
    align-self: center;
    padding: 3rem;
`