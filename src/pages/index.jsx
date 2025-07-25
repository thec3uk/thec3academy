import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'

import { getImage } from 'gatsby-plugin-image'

import '../components/academy/style.scoped.css'
import '../components/academy/academy.css'
import Quote from '../components/academy/quote'
import TwoColumnText from '../components/academy/twoColumnText'
import TextWithImage from '../components/academy/textWithImage'
import Text from '../components/academy/text'
import Testimonial from '../components/academy/testimonial'
import TextWithHexImage from '../components/academy/textHexImage'
import TextWithCTA from '../components/academy/textWithCtas'

import HtmlHexagon from '../components/academy/HtmlHex'
import SEO from '../components/SEO'

const Slices = ({ slices }) => {
  return (
    slices &&
    slices.map((contentSlice, idx) => {
      const componentListObj = {
        quote: Quote,
        '2_column_text': TwoColumnText,
        text: TextWithImage,
        text1: Text,
        team: Testimonial,
        hex_image_with_text: TextWithHexImage,
        text_with_ctas: TextWithCTA,
      }
      const Component = componentListObj[contentSlice.slice_type]
      if (Component === undefined) {
        console.warn('Warning: default case, content is unhandled')
        return <div key={idx}></div>
      }
      return (
        <div key={idx} id={`${idx}`} className="py-12 md:py-32">
          <Component key={idx} data={contentSlice} />
        </div>
      )
    })
  )
}

const AcademyPage = ({ data }) => {
  const page = data.prismicAcademyPage.data
  const body = page.body

  const gImage = getImage(page.hero_image)
  const bgImage = convertToBgImage(gImage)
  return (
    <div id="academy">
      {/*       <div className='w-screen flex justify-center text-center px-4'>
        <h2 className='text-lg py-4 text-purple font-sans'>Applications Are Now Open for Academic Year 2023-2024</h2>
      </div> */}
      <SEO title={page.page_title} />
      <BackgroundImage
        Tag="header"
        className={'w-screen'}
        backgroundColor={'#040e18'}
        {...bgImage}
      >
        <div className="grid h-screen grid-cols-8 grid-rows-4 mx-16 lg:grid-rows-12 md:mx-0">
          <HtmlHexagon
            className="col-start-1 col-end-9 row-start-2 row-end-5 fill-current text-purple-trans lg:col-start-3 lg:col-end-7 lg:row-start-2 lg:row-end-5"
            containerClassName="text-center grid-rows-6 px-16 pt-16"
          >
            <img
              src="/images/LogoWhite.png"
              alt="C3 Logo in White with text"
              className="w-14 mx-auto mt-1 lg:mt-8"
            />
            <h1 className="pt-4 pb-4 text-5xl subpixel-antialiased font-accent text-yellow lg:pt-12 lg:pb-4">
              <span className="text-white lowercase font-title">The C3</span>{' '}
              Academy
            </h1>
            {page.lead_paragraph && (
              <p className="font-sans text-lg leading-5 text-white">
                {page.lead_paragraph.text}
              </p>
            )}
            <div className="flex flex-col px-20 lg:items-center lg:px-8 pt-2">
              {page.ctas.map((cta, idx) => {
                const textColor = idx % 2 === 0 ? 'text-black' : 'text-white'
                const bgColor = idx % 2 === 0 ? 'bg-yellow' : 'bg-purple'
                const hoverTextColor =
                  idx % 2 === 0 ? 'text-white' : 'text-white'
                const hoverBgColor =
                  idx % 2 === 0 ? 'bg-yellow-200' : 'bg-purple-200'
                return (
                  <a
                    className={`cta ${textColor} ${bgColor} hover:${hoverTextColor} hover:${hoverBgColor} px-4 pt-1 pb-2 lg:pt-0 lg:pb-1 shadow font-title lowercase text-2xl lg:text-base mt-0 mb-2`}
                    href={cta.link.url}
                    key={idx}
                  >
                    {cta.text}
                  </a>
                )
              })}
            </div>
          </HtmlHexagon>
        </div>
      </BackgroundImage>
      <main className="bg-grey-100">
        <Slices slices={body} />
      </main>
    </div>
  )
}

export default AcademyPage

export const query = graphql`
  {
    prismicAcademyPage {
      data {
        ctas {
          text
          link {
            url
            target
          }
        }
        hero_image {
          gatsbyImageData
        }
        lead_paragraph {
          text
        }
        body {
          ...quote
          ...twoColumnText
          ...textSlice
          ...testimonialSlice
          ...textHexImageSlice
          ...ctaSlice
          ...text1Slice
        }
      }
    }
  }
`
