import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';


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

    console.dir(data)
    return {
        paths: data.items.map((item) => ({
            params: {slug: item.fields.slug}
        })),
        fallback: false,
    };
}


const SinglePost = ({ blogPost }) => {
    console.log(blogPost.fields)
    let {id, title, slug, date, image, category, excerpt, content} = blogPost.fields
    let description = image.fields.title
    let file = image.fields.file

    if(!blogPost) return <div>404 error</div>

    return (
        <div>
            <h1>{title}</h1> 
            <p>ID: {id}</p>
            <p>slug: {slug}</p>
            <br/>
            <p>date: {date}</p>
            <p>excerpt: {excerpt}</p>
            <p>category: {category}</p>
            <br/>

            <p>Img description: {description}</p>
            <img alt={description} src={`https:${file.url}`} />
            <div>{ documentToReactComponents(content, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: node => <img src={node.data.target.fields.file.url} width={100} height={150} />
                }
            }) }</div>
            
        </div>
    );
}

export default SinglePost;