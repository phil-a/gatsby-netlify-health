import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const BlogRollTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (

    // <div>
    // <div className="tile is-ancestor">
    //   <div className="tile is-6 is-vertical is-parent">
    //   {posts &&
    //     posts.map(({ node: post }) => (
    //     <div className="tile is-child box">
    //       <div className="flex">
    //         <div className="columns">
    //           <div className="column is-4">
    //             <PreviewCompatibleImage
    //               imageInfo={{
    //                 image: post.frontmatter.featuredimage,
    //                 alt: `featured image thumbnail for post ${post.frontmatter.title}`,
    //                 width:
    //                   post.frontmatter.featuredimage.childImageSharp
    //                     .gatsbyImageData.width,
    //                 height:
    //                   post.frontmatter.featuredimage.childImageSharp
    //                     .gatsbyImageData.height,
    //               }}
    //             />
    //  </div>
    //  <div className="column">
    //       <div>
    //         <Link
    //           className="post-title has-text-primary is-size-4"
    //           to={post.fields.slug}
    //         >
    //           {post.frontmatter.title}
    //         </Link>
    //         <p>
    //           {post.excerpt}
    //         </p>
    //           <Link className="button" to={post.fields.slug}>
    //             Keep Reading →
    //           </Link>
    //       </div>
    //       </div>
    //       </div>
    //       </div>
    //     </div>
    //     ))}
    //   </div>
    // </div>
    // {/* <div class="tile is-ancestor">
    //   <div class="tile is-parent">
    //     <div class="tile is-child box">
    //       <p class="title">Three</p>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
    //       <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
    //       <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
    //     </div>
    //   </div>
    //   <div class="tile is-6 is-vertical is-parent">
    //     <div class="tile is-child box">
    //       <p class="title">One</p>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    //     </div>
    //     <div class="tile is-child box">
    //       <p class="title">Two</p>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    //     </div>
    //   </div>
    // </div> */}
    
    // </div>

    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-4" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                <div>
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
                </div>
                </header>

                <div className="post-body">
                <span className="post-date is-block">
                  {post.frontmatter.date}
                </span>
                <p className="post-meta">
                  <Link
                    className="title is-size-5"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-primary" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
              </div>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        height: 250
                        width: 250
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
