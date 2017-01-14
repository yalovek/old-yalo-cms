import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  link: {
    display: 'inline-block',
    padding: '15px',
    color: '#fff',
    textDecoration: 'none',
    lineHeight: '20px',

    ':hover': {
      background: 'rgba(255, 255, 255, .1)',
    },
  },

  active: {
    background: 'rgba(255, 255, 255, .1)',
  },
});
