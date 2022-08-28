import images from './images';

const bikes = [
  {
    imgUrl: images.velo1,
    title: 'MMR Kendo (2017)',
    price: `${1050} DT`,
    isFav:false,
    tags:["Taille M","Carbons"]
  },
  {
    imgUrl: images.velo2,
    title: 'MMR Kendo (2017)',
    price: `${1050} DT`,
    isFav:true,
    tags:["Taille M","Carbons"]
  },
  {
    imgUrl: images.velo3,
    title: 'BTWIN',
    price: `${800} DT`,
    isFav:false,
    tags:["Taille M","Carbons"]
  },

  {
    imgUrl: images.velo4,
    title: 'Cannondale',
    price: `${750} DT`,
    isFav:false,
    tags:["Taille M","Carbons"]
  },
  {
    imgUrl: images.velo5,
    title: 'Rockrider',
    price: `${570} DT`,
    isFav:true,
    tags:["Taille M","Carbons"]
  },
  {
    imgUrl: images.velo6,
    title: 'Time',
    price: `${1850} DT`,
    isFav:false,
    tags:["Taille M","Carbons"]
  },
];
const circuites=[
  {imgUrl: images.circuit_1,
  title: 'Cércuit Tunnis Hammamet',
  distance: `${85} Km`,
  time:"2h-3h"
},
  {imgUrl: images.circuit_2,
  title: 'Cércuit Tunnis mourouj',
  distance: `${45} Km`,
  time:"2h"
},
  {imgUrl: images.circuit_3,
  title: 'Cércuit Tunnis sousse',
  distance: `${65} Km`,
  time:"3h"
},
  {imgUrl: images.circuit_4,
  title: 'Cércuit Tunnis Hammamet',
  distance: `${85} Km`,
  time:"2h"
}
]
const galleryImages=[images.gallery01,images.gallery02,images.gallery03]
const velosphotos=[images.velo1,images.velo2,images.velo3,images.velo4,images.velo5,images.velo6]

export { bikes, galleryImages,velosphotos,circuites};
