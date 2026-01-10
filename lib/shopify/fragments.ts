const imageFragment = /* GraphQL */ `
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

const priceFragment = /* GraphQL */ `
  fragment price on MoneyV2 {
    amount
    currencyCode
  }
`;

const seoFragment = /* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`;

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        ...price
      }
      minVariantPrice {
        ...price
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            ...price
          }
          compareAtPrice {
            ...price
          }
          image {
            ...image
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${priceFragment}
  ${seoFragment}
`;

const cartFragment = /* GraphQL */ `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        ...price
      }
      totalAmount {
        ...price
      }
      totalTaxAmount {
        ...price
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              ...price
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${productFragment}
`;

export { imageFragment, priceFragment, productFragment, seoFragment, cartFragment };
