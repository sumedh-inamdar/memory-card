import uniqid from 'uniqid';
import greenCardamom from '../assets/green-cardamom.jpg';
import starAnise from '../assets/star-anise.jpg';
import fenugreek from '../assets/fenugreek.jpg';
import blackPepper from '../assets/black-pepper.jpg';
import turmeric from '../assets/turmeric.jpg';
import cuminSeeds from '../assets/cumin-seeds.jpg';
import coriander from '../assets/coriander.jpg';
import paprika from '../assets/paprika.jpg';
import cinnamon from '../assets/cinnamon.jpg';
import blackCardamom from '../assets/black-cardamom.jpg';
import driedBasil from '../assets/dried-basil.jpg';
import driedRedChilies from '../assets/dried-red-chilies.jpg';

export const spices = [
  { name: 'Dried Red Chilies', src: driedRedChilies, id: uniqid() },
  { name: 'Dried Basil', src: driedBasil, id: uniqid() },
  { name: 'Black Cardamom', src: blackCardamom, id: uniqid() },
  { name: 'Cinnamon', src: cinnamon, id: uniqid() },
  { name: 'Paprika', src: paprika, id: uniqid() },
  { name: 'Coriander', src: coriander, id: uniqid() },
  { name: 'Cumin', src: cuminSeeds, id: uniqid() },
  { name: 'Turmeric', src: turmeric, id: uniqid() },
  { name: 'Black Pepper', src: blackPepper, id: uniqid() },
  { name: 'Fenugreek', src: fenugreek, id: uniqid() },
  { name: 'Star Anise', src: starAnise, id: uniqid() },
  { name: 'Green Cardamom', src: greenCardamom, id: uniqid() }
];
