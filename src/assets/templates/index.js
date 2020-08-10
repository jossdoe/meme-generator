import grave from 'assets/templates/grave.jpg';
import buttons from 'assets/templates/buttons.jpg';
import monster from 'assets/templates/monster.jpg';
import bullies from 'assets/templates/bullies.jpg';
import ipod from 'assets/templates/ipod.jpg';
import batman from 'assets/templates/batman-robin.png';
import bernie from 'assets/templates/bernie.png';
import changemymind from 'assets/templates/change-my-mind.png';
import boyfriend from 'assets/templates/distracted-boyfriend.png';
import drake from 'assets/templates/drake.png';
import draw25 from 'assets/templates/draw-25.png';
import exitramp from 'assets/templates/exit-ramp.png';
import expandingbrain from 'assets/templates/expanding-brain.png';
import fry from 'assets/templates/fry.png';
import isthis from 'assets/templates/is-this.png';
import pablo from 'assets/templates/sad-pablo.png';
import think from 'assets/templates/think-about-it.png';
import tuxedopooh from 'assets/templates/tuxedo-pooh.png';
import scroll from 'assets/templates/scroll-of-truth.png';

const templates = [
  {
    id: 1,
    src: batman,
    text: [
      {
        title: 'Left Bubble',
        textOnPicture: true,
        css: {
          top: '10px',
          left: '0px',
          right: '230px'
        }
      },
      {
        title: 'Right Bubble',
        textOnPicture: true,
        css: {
          top: '10px',
          left: '270px',
          right: '0px'
        }
      }
    ]
  },

  {
    id: 2,
    src: bullies,
    text: [
      {
        title: 'Top Panel',
        textOnPicture: true,
        css: {
          top: '40px',
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
    src: buttons,
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
    src: monster,
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
    src: grave,
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
    src: ipod,
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
    src: bernie,
    text: [
      {
        title: 'Text Bottom',
        textOnPicture: true,
        css: {
          top: '435px',
          left: '10px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 8,
    src: changemymind,
    text: [
      {
        title: 'Text Bottom',
        textOnPicture: true,
        css: {
          top: '280px',
          left: '200px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 9,
    src: boyfriend,
    text: [
      {
        title: 'Boyfriend',
        textOnPicture: true,
        css: {
          top: '280px',
          left: '200px',
          right: '10px'
        }
      },
      {
        title: 'Girlfriend',
        textOnPicture: true,
        css: {
          top: '280px',
          left: '550px',
          right: '10px'
        }
      },
      {
        title: 'Stranger',
        textOnPicture: true,
        css: {
          top: '330px',
          left: '0px',
          right: '320px'
        }
      }
    ]
  },

  {
    id: 10,
    src: drake,
    text: [
      {
        title: 'Top Text',
        textOnPicture: true,
        css: {
          top: '100px',
          left: '255px',
          right: '10px'
        }
      },
      {
        title: 'Girlfriend',
        textOnPicture: true,
        css: {
          top: '350px',
          left: '255px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 11,
    src: draw25,
    text: [
      {
        title: 'Card Text',
        textOnPicture: true,
        css: {
          top: '150px',
          left: '10px',
          right: '220px'
        }
      },
      {
        title: 'Person Caption',
        textOnPicture: true,
        css: {
          top: '250px',
          left: '255px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 12,
    src: exitramp,
    text: [
      {
        title: 'Card Text',
        textOnPicture: true,
        css: {
          top: '80px',
          left: '10px',
          right: '220px'
        }
      },
      {
        title: 'Person Caption',
        textOnPicture: true,
        css: {
          top: '80px',
          left: '130px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 13,
    src: expandingbrain,
    text: [
      {
        title: 'Step #1',
        textOnPicture: true,
        css: {
          top: '60px',
          left: '10px',
          right: '260px'
        }
      },
      {
        title: 'Step #2',
        textOnPicture: true,
        css: {
          top: '240px',
          left: '10px',
          right: '260px'
        }
      },
      {
        title: 'Step #3',
        textOnPicture: true,
        css: {
          top: '410px',
          left: '10px',
          right: '260px'
        }
      },
      {
        title: 'Step #4',
        textOnPicture: true,
        css: {
          top: '580px',
          left: '10px',
          right: '260px'
        }
      }
    ]
  },

  {
    id: 14,
    src: fry,
    text: [
      {
        title: 'Top Caption',
        textOnPicture: true,
        css: {
          top: '10px',
          left: '10px',
          right: '10px'
        }
      },
      {
        title: 'Bottom Caption',
        textOnPicture: true,
        css: {
          bottom: '10px',
          left: '10px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 15,
    src: isthis,
    text: [
      {
        title: 'Person Caption',
        textOnPicture: true,
        css: {
          top: '100px',
          left: '10px',
          right: '300px'
        }
      },
      {
        title: 'Butterfly Caption',
        textOnPicture: true,
        css: {
          top: '80px',
          left: '320px',
          right: '10px'
        }
      },
      {
        title: 'Bottom Caption',
        textOnPicture: true,
        css: {
          bottom: '10px',
          left: '10px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 16,
    src: pablo,
    text: [
      {
        title: 'Top Caption',
        textOnPicture: true,
        css: {
          top: '10px',
          left: '10px',
          right: '10px'
        }
      },
      {
        title: 'Bottom Caption',
        textOnPicture: true,
        css: {
          bottom: '10px',
          left: '10px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 17,
    src: think,
    text: [
      {
        title: 'Top Caption',
        textOnPicture: true,
        css: {
          top: '10px',
          left: '10px',
          right: '10px'
        }
      },
      {
        title: 'Bottom Caption',
        textOnPicture: true,
        css: {
          bottom: '10px',
          left: '10px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 18,
    src: tuxedopooh,
    text: [
      {
        title: 'Top Caption',
        textOnPicture: true,
        css: {
          top: '80px',
          left: '300px',
          right: '10px'
        }
      },
      {
        title: 'Bottom Caption',
        textOnPicture: true,
        css: {
          top: '340px',
          left: '300px',
          right: '10px'
        }
      }
    ]
  },

  {
    id: 19,
    src: scroll,
    text: [
      {
        title: 'Scroll',
        textOnPicture: true,
        css: {
          top: '300px',
          left: '10px',
          right: '240px'
        }
      }
    ]
  }
];

export default templates;
