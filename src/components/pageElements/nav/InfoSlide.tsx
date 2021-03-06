import * as React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { handleFlex } from '../../styled/helpers'
import { graphql, useStaticQuery } from 'gatsby'
import { IFixedObject } from 'gatsby-background-image'
import SocialList from '../footer/SocialList'
import { below } from '../../styled/media'

interface Props {
  on: boolean
}

interface Path {
  name: string
  path: string
}

interface IconNode {
  node: {
    name: string
    childImageSharp: {
      fixed: IFixedObject
    }
  }
}

interface InfoQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      about: string
      paths: Path[]
    }
  }
  icons: {
    edges: IconNode[]
  }
}

const InfoSlide: React.FC<Props> = ({ on }) => {
  const { x, opacity } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
  })
  const {
    site: {
      siteMetadata: { title, description, about },
    },
    icons,
  } = useStaticQuery<InfoQuery>(INFO_QUERY)

  return (
    <StyledInfoSlide
      style={{
        transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`),
        opacity,
      }}
    >
      <Body>
        <p>{about}</p>

        <SocialList onSocialIcons={icons.edges} />
      </Body>
    </StyledInfoSlide>
  )
}

const StyledInfoSlide = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  width: 40%;
  z-index: 2;
  background: ${({ theme }) => theme.colors.white};
  ${handleFlex('column', 'center', 'center')};
  ${below.medium`
    width: 75%;
  `}
`

const Body = styled.div`
  height: 60%;
  width: 100%;
  padding: 3rem 0.5rem;
  ${handleFlex('column', 'center', 'center')};
  p {
    padding: 3rem 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const INFO_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
        about
        paths {
          name
          path
        }
      }
    }

    icons: allFile(filter: { relativeDirectory: { eq: "social" } }) {
      edges {
        node {
          name
          atime(formatString: "YYYY")
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default InfoSlide
