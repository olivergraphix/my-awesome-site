// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";
let grayImage = true;



// Step 2: Define your component
const IndexPage = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteDescriptionQuery {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
        `)

    return (

        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <h2>Here you can add anything but how to add a new component?</h2>
            <p>{site.siteMetadata.description}</p>
            <StaticImage

                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/cherry.jpg"
                aspectRatio = {16/9}
                transformOptions = {{grayscale: grayImage}}
            />
        </Layout>

    )
}

// Step 3: Export your component
export default IndexPage