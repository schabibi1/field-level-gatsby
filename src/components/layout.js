import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import configuration from '../../gatsby-config'
import Footer from './Footer'
// import Navigation from "../components/Navigation";
import BlogPost from "./BlogPost";
import Feature from "./Feature";
// import FeaturedPosts from "./FeaturedPosts";
import Grid from "./Grid";
// import Page from "./Page";
// import PostsList from "./PostsList";
import Teaser from "./Teaser";
// import Text from "./Text";

const sbConfig = configuration.plugins.find((item) => item.resolve === 'gatsby-source-storyblok')

const components = {
  feature: Feature,
  // "featured-posts": FeaturedPosts,
  grid: Grid,
  // page: Page,
  post: BlogPost,
  // "selected-posts": PostsList,
  teaser: Teaser,
  // text: Text,
}

storyblokInit({
  accessToken: sbConfig.options.accessToken,
  use: [apiPlugin],
  components
});

const Layout = ({ children, location }) => {
  return (
    <div>
      {/* <Navigation
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      /> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout