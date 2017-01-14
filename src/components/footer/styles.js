import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  footer: {
    padding: '15px',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px',
    background: '#151515',
    color: '#c3c3c3',
    fontSize: '.8em',
  },

  logo: {
    display: 'inline-block',
    margin: '-10px 0',

    ':hover': {
      opacity: '.7',
    },
  },

  link: {
    color: '#828282',
    transition: 'color .3s ease 0s',

    ':hover': {
      color: '#fff',
      textDecoration: 'none',
    },
  },

  social_title: {
    display: 'block',
    marginBottom: '10px',
  },
});
