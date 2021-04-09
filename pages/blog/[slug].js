const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
})


export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: "blogPost",
    });

    return {
        paths: data.items.map((item) => ({
            params: {slug: item.fields.slug}
        })),
        fallback: true,
    };
}

export async function getStaticProps({params}) {
    let data = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": params.slug
    });

    return {
        props: {
            blogPost: data.items[0],
        },
    };
}



const SinglePost = ({blogPost}) => {
    let {id, title, slug, date, image, category, excerpt} = blogPost.fields
    let description = image.fields.title
    let file = image.fields.file
    
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
            
        </div>
    );
}

export default SinglePost;