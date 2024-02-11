import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section m-0 p-0">
      <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 410" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="hsla(266, 63%, 26%, 1)" offset="0%"></stop><stop stop-color="hsla(354, 55%, 63%, 1)" offset="50%"></stop><stop stop-color="#ffe259" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,41L60,68.3C120,96,240,150,360,143.5C480,137,600,68,720,61.5C840,55,960,109,1080,157.2C1200,205,1320,246,1440,225.5C1560,205,1680,123,1800,82C1920,41,2040,41,2160,54.7C2280,68,2400,96,2520,88.8C2640,82,2760,41,2880,47.8C3000,55,3120,109,3240,129.8C3360,150,3480,137,3600,116.2C3720,96,3840,68,3960,54.7C4080,41,4200,41,4320,82C4440,123,4560,205,4680,225.5C4800,246,4920,205,5040,191.3C5160,178,5280,191,5400,184.5C5520,178,5640,150,5760,177.7C5880,205,6000,287,6120,321.2C6240,355,6360,342,6480,328C6600,314,6720,301,6840,246C6960,191,7080,96,7200,61.5C7320,27,7440,55,7560,102.5C7680,150,7800,219,7920,232.3C8040,246,8160,205,8280,157.2C8400,109,8520,55,8580,27.3L8640,0L8640,410L8580,410C8520,410,8400,410,8280,410C8160,410,8040,410,7920,410C7800,410,7680,410,7560,410C7440,410,7320,410,7200,410C7080,410,6960,410,6840,410C6720,410,6600,410,6480,410C6360,410,6240,410,6120,410C6000,410,5880,410,5760,410C5640,410,5520,410,5400,410C5280,410,5160,410,5040,410C4920,410,4800,410,4680,410C4560,410,4440,410,4320,410C4200,410,4080,410,3960,410C3840,410,3720,410,3600,410C3480,410,3360,410,3240,410C3120,410,3000,410,2880,410C2760,410,2640,410,2520,410C2400,410,2280,410,2160,410C2040,410,1920,410,1800,410C1680,410,1560,410,1440,410C1320,410,1200,410,1080,410C960,410,840,410,720,410C600,410,480,410,360,410C240,410,120,410,60,410L0,410Z"></path></svg>
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <div className="tags">
              {group.map((tag) => (
                <span className="tag is-medium" key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
