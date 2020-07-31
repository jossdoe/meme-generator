import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';

const gridImg = [
  {
    id: 1,
    src: img1,
    text: [
      {
        title: 'Blue Button',
        textOnPicture: true,
        css: {
          top: '60px',
          left: '0px',
          right: '100px'
        }
      },
      {
        title: 'Red Button',
        textOnPicture: true,
        css: {
          top: '40px',
          left: '110px',
          right: '0px'
        }
      }
    ]
  },

  {
    id: 2,
    src: img5,
    text: [
      {
        title: 'Top Panel',
        textOnPicture: true,
        css: {
          top: '40px',
          bottom: null,
          left: '0px',
          right: '0px'
        }
      },
      {
        title: 'Bottom Panel',
        textOnPicture: true,
        css: {
          bottom: '40px',
          left: '0px',
          right: '100px'
        }
      }
    ]
  },

  {
    id: 3,
    src: img3,
    text: [
      {
        title: 'Left Button',
        textOnPicture: true,
        css: {
          top: '60px',
          left: '0px',
          right: '100px'
        }
      },
      {
        title: 'Right Button',
        textOnPicture: true,
        css: {
          top: '30px',
          left: '80px',
          right: '0px'
        }
      }
    ]
  },

  {
    id: 4,
    src: img4,
    text: [
      {
        title: 'Ball Caption',
        textOnPicture: true,
        css: {
          top: '50px',
          left: '100px',
          right: '0px'
        }
      },
      {
        title: 'Monster Caption',
        textOnPicture: true,
        css: {
          bottom: '10px',
          left: '0px',
          right: '140px'
        }
      }
    ]
  },

  {
    id: 5,
    src: img2,
    text: [
      {
        title: 'Above Image',
        textOnPicture: false,
        css: {
          display: 'none'
        }
      },
      {
        title: 'Grave Stone',
        textOnPicture: true,
        css: {
          bottom: '160px',
          left: '0px',
          right: '15px'
        }
      }
    ]
  },

  {
    id: 6,
    src: img6,
    text: [
      {
        title: 'Above Image',
        textOnPicture: false,
        css: {
          display: 'none'
        }
      },
      {
        title: 'iPod Caption',
        textOnPicture: true,
        css: {
          bottom: '180px',
          left: '0px',
          right: '15px'
        }
      }
    ]
  },

  {
    id: 7,
    src: img7,
    text: [
      {
        title: 'Above Image',
        textOnPicture: false,
        css: {
          display: 'none'
        }
      }
    ]
  },

  {
    id: 8,
    src: img8,
    text: [
      {
        title: 'Above Image',
        textOnPicture: false,
        css: {
          display: 'none'
        }
      }
    ]
  }
];

export default gridImg;
