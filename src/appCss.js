import { css } from 'emotion';

const breakpoints = {
    // Numerical values will result in a min-width query
    small: 600,
    medium: 760,
    large: 992,
    xLarge: 1200,
    // String values will be used as is
    tallPhone: '(max-width: 360px) and (min-height: 740px)'
  }
  
  const viewport = Object.keys(breakpoints).reduce(
    (accumulator, label) => {
      let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
      let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
      accumulator[label] = cls =>
        css`
          @media (${prefix + breakpoints[label] + suffix}) {
            ${cls};
          }
        `
      return accumulator
    },
    {}
  )
  
  export const paragraph = css`
    font-size: 12px;
    ${viewport.medium(css`
      font-size: 14px;
    `)};
    ${viewport.large(css`
      font-size: 16px;
    `)};
  `
  export const width = css`
 
  ${viewport.medium(css`
    width: 760px;
  `)};
  ${viewport.large(css`
    width: 992px;
  `)};
  ${viewport.xLarge(css`
    width: 1200px;
  `)};
  ${viewport.small(css`
    width: 650px;
  `)};
`
export default viewport;