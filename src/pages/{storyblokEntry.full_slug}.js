import * as React from "react"
import { graphql } from "gatsby"

import { StoryblokComponent, storyblokEditable, useStoryblokState } from "gatsby-source-storyblok"

import Layout from "../components/layout"

const StoryblokEntry = ({ data, location, locale, locales, defaultLocale }) => {
  let story = data.storyblokEntry
  story = useStoryblokState(story, {
    resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale,
  })

  const Templates = () => {
    if (story.name === 'Home') {
      return story.content.body.map(blok => <StoryblokComponent blok={blok} key={blok._uid} />)
    }
    return (story.name !== 'Home' ? <StoryblokComponent blok={story.content} key={story.content._uid} /> : null)
  }

  return (
    <Layout location={location} locale={locale} locales={locales} defaultLocale={defaultLocale}>
      <div {...storyblokEditable(story.content)}>
        <Templates blok={story.content} key={story.content._uid} />
      </div>
    </Layout>
  )
}

export default StoryblokEntry

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`