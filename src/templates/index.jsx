import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import CtaWithImage from "../components/ctaWithImage/ctaWithImage"
import Testimonial from "../components/testimonial/testimonial"
import FeaturedPosts from "../components/featured-posts/featuredPosts"
import Hero from "../components/hero/hero"
import Footer from "../components/footer/footer"
import Cta2 from "../components/cta2/cta2"
const IndexPage = ({ data: { wpPage } }) => {
  console.log(wpPage)
  return (
    <>
      <Hero
        heroText={wpPage.heroBanner.heroText}
        heroSubText={wpPage.heroBanner.heroSubtext}
        heroParagraphText={wpPage.heroBanner.heroParagraphText}
        primaryButtonText={wpPage.heroBanner.primaryButtonText}
        primaryButtonSlug={wpPage.heroBanner.primaryButtonSlug}
        secondaryButtonText={wpPage.heroBanner.secondaryButtonText}
        secondaryButtonSlug={wpPage.heroBanner.secondaryButtonSlug}
      />
      <CtaWithImage
        headingText={wpPage.ctaWithImage.headingText}
        paragraphText={wpPage.ctaWithImage.paragraphText}
        buttonText={wpPage.ctaWithImage.buttonText}
        buttonSlug={wpPage.ctaWithImage.buttonSlug}
      />
      <Testimonial />
      <Cta2 myText="Hey" myText2="hey again" myText3="one more time" />
      <FeaturedPosts />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      uri
      title
      content
      heroBanner {
        heroText
        heroSubtext
        heroParagraphText
        primaryButtonText
        primaryButtonSlug
        secondaryButtonText
        secondaryButtonSlug
      }
      ctaWithImage {
        headingText
        paragraphText
        buttonText
        buttonSlug
      }
      ...wpPageSeo
    }
  }
`
