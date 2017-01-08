export default [
  {
    name: 'home',
    components: JSON.stringify([
      {
        name: 'head',
        data: {
          htmlAttributes: {
            lang: 'ru',
          },
          title: 'CouponAd',
          meta: [
            {
              name: 'description',
              content: 'CouponAd',
            },
          ],
        },
      },
      {
        name: 'renderHtml',
        data: {
          dangerouslySetInnerHTML: {
            __html: '<h1>Main</h1>',
          },
        },
      },
    ]),
  },
  {
    name: 'error',
    components: JSON.stringify([
      {
        name: 'head',
        data: {
          htmlAttributes: {
            lang: 'ru',
          },
          title: 'Error',
          meta: [
            {
              name: 'description',
              content: 'CouponAd',
            },
          ],
        },
      },
      {
        name: 'renderHtml',
        data: {
          dangerouslySetInnerHTML: {
            __html: '<h1>Error</h1>',
          },
        },
      },
    ]),
  },
  {
    name: 'news',
    components: JSON.stringify([
      {
        name: 'head',
        data: {
          htmlAttributes: {
            lang: 'ru',
          },
          title: 'News',
          meta: [
            {
              name: 'description',
              content: 'CouponAd',
            },
          ],
        },
      },
      {
        name: 'renderHtml',
        data: {
          dangerouslySetInnerHTML: {
            __html: '<h1>News</h1>',
          },
        },
      },
    ]),
  },
];
