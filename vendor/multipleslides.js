var splide = new Splide( '.splide', {
  perPage: 3,
  gap    : '2rem',
  breakpoints: {
    640: {
      perPage: 2,
      gap    : '.3rem',
      height : '17rem',
    },
    480: {
      perPage: 2,
      gap    : '.3rem',
      height : '17rem',
    },
  },
} );

splide.mount();