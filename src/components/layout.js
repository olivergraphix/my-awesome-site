import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'
import Nav from "./Nav";
import Header from "./Header";
import "../styles/global.module.css"

const Layout = ({ pageTitle, children, menuLinks }) => {
    const { site } = useStaticQuery(
        graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                  menuLinks {
                    name
                    link
                  }
                }
              }
            }
        `)
    return (



        <div className={styles.container}>
            <title>{pageTitle} | {site.siteMetadata.title}</title>
            <Header headerTitle={site.siteMetadata.title} />
            <Nav menuLinks = {site.siteMetadata.menuLinks} />
            <main id="primary">
                <h1 className={styles.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}



export default Layout