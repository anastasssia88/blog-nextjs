import '../styles/resetandnormalize.css'
import '../styles/globals.css'

import { BlogProvider } from "../helpers/BlogContext";


function MyApp({ Component, pageProps }) {
  return (
  <BlogProvider>
    <Component {...pageProps} />
  </BlogProvider>
  )
}

export default MyApp
