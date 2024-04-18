// import { render } from 'react-dom';
// import { css, styled } from 'styled-components';

// interface Size {
//     xs: string
//     sm: string
//     md: string
//     lg: string
//     xl: string
//     xxl: string
//   }

// const size: Size = {
//   xs: '400px', // for small screen mobile
//   sm: '600px', // for mobile screen
//   md: '900px', // for tablets
//   lg: '1280px', // for laptops
//   xl: '1440px', // for desktop / monitors
//   xxl: '1920px', // for big screens
// }

//   export const device = {
//     xs: `(max-width: ${size.xs})`,
//     sm: `(max-width: ${size.sm})`,
//     md: `(max-width: ${size.md})`,
//     lg: `(max-width: ${size.lg})`,
//     xl: `(max-width: ${size.xl})`,
//     xxl: `(max-width: ${size.xxl})`,
//   }

// const media = {
//     xs: (...args: any[]) => css`
//       @media (max-width: ${device.xs}) {
//         ${css(...args)};
//       }
//     `,
//     sm: (...args: any[]) => css`
//       @media (max-width: ${device.sm}) {
//         ${css(...args)};
//       }
//     `,
//     md: (...args: any[]) => css`
//       @media (max-width: ${device.md}) {
//         ${css(...args)};
//       }
//     `,
//     lg: (...args: any[]) => css`
//       @media (max-width: ${device.lg}) {
//         ${css(...args)};
//       }
//     `,
//     xl: (...args: any[]) => css`
//       @media (max-width: ${device.xl}) {
//         ${css(...args)};
//       }
//     `,
//     xxl: (...args: any[]) => css`
//       @media (max-width: ${device.xxl}) {
//         ${css(...args)};
//       }
//     `,
//   }

//   export default media

///////////////////////////////////////

// const customMediaQuery = (maxWidth: number) =>
//   `@media (max-width: ${maxWidth}px)`;

// const media = {
//   custom: customMediaQuery,
//   desktop: customMediaQuery(992),
//   tablet: customMediaQuery(768),
//   phone: customMediaQuery(576),
// };

// const ContentBlock = styled.div`
//   width: 4em;
//   height: 4em;
//   background: white;

//   /* Now we have our methods of raw queries */
//   ${media.desktop} {
//     background: green;
//   }

//   ${media.tablet} {
//     background: yellow;
//   }

//   ${media.phone} {
//     background: blue;
//   }
// `;

// render(<ContentBlock />);
