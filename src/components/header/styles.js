import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  header: {
    padding: 15,
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px',
    background: '#3581d8',
  },

  logo: {
    display: 'inline-block',
    margin: '-10px 0',

    ':hover': {
      opacity: '.7',
    },
  },

  navigation: {
    textAlign: 'right',
    margin: '-15px 0',
  },
});
