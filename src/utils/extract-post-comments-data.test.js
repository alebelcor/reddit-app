import extractPostCommentsData from 'src/utils/extract-post-comments-data';

it('should extract post comments data', () => {
  expect(
    extractPostCommentsData([
      {
        author: 'john',
        body: 'John says hi',
        created_utc: 1602465100,
        id: '02b749',
        score: 100,
      },
      {
        author: 'jane',
        body: 'Jane says hi',
        created_utc: 1602465000,
        id: 'ace73c',
        score: 70,
        replies: {
          data: {
            children: [
              {
                data: {
                  author: 'mike',
                  body: 'Mike says hi',
                  created_utc: 1602365000,
                  id: 'aa643f',
                  score: 30,
                },
              },
              {
                data: {
                  author: 'rosie',
                  body: 'Rosie says hi',
                  created_utc: 1602265000,
                  id: '1f2d98',
                  score: 20,
                },
              },
              {},
            ],
          },
        },
      },
      {},
    ])
  ).toEqual([
    {
      author: 'john',
      body: '<p>John says hi</p>\n',
      comments: [],
      created: 1602465100000,
      id: '02b749',
      score: 100,
    },
    {
      author: 'jane',
      body: '<p>Jane says hi</p>\n',
      comments: [
        {
          author: 'mike',
          body: '<p>Mike says hi</p>\n',
          comments: [],
          created: 1602365000000,
          id: 'aa643f',
          score: 30,
        },
        {
          author: 'rosie',
          body: '<p>Rosie says hi</p>\n',
          comments: [],
          created: 1602265000000,
          id: '1f2d98',
          score: 20,
        },
      ],
      created: 1602465000000,
      id: 'ace73c',
      score: 70,
    },
  ]);
});
