import React from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import Blog from './Blog';
import './Home.css';
const Home = () => {
  const blogs = [/* Array of blog objects */];
  return (
    <div className='home'>
      <div className='posts'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies tristique nunc, id volutpat arcu blandit in. Vivamus id justo ac ligula fringilla ultricies. Suspendisse et augue eget tortor consectetur venenatis. Maecenas consequat eros sed neque sollicitudin sagittis. Duis et magna eu lectus facilisis accumsan. Etiam in convallis eros. Vestibulum finibus nisi non est tincidunt commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla auctor, lectus sit amet viverra suscipit, arcu diam ultrices nunc, et consequat orci lectus a justo. Aenean rhoncus neque non dui rutrum, eu fermentum justo interdum. Suspendisse in tellus luctus, convallis sapien id, gravida justo. Sed ac purus tellus.

Phasellus consequat, enim a semper tincidunt, enim augue dapibus mauris, sed rhoncus erat enim sit amet ipsum. Ut pretium arcu in odio consectetur fermentum. Proin feugiat dui vitae dui pharetra, nec rhoncus metus efficitur. Maecenas sagittis dui et mi lobortis, ut mollis tellus luctus. Vivamus consequat velit ut nisi volutpat, ut lobortis ipsum porttitor. Vestibulum a est facilisis, efficitur ex sed, rutrum ex. Suspendisse et diam semper, finibus tellus non, egestas ligula. Aliquam erat volutpat.

Praesent at iaculis mi. Vivamus nec tincidunt metus. Ut posuere ligula eu lacus tincidunt lacinia. Nullam et felis malesuada, ultrices turpis id, iaculis turpis. Morbi ut nulla ac turpis euismod cursus vel a mi. Integer bibendum, ex a aliquet venenatis, lacus urna dapibus enim, et malesuada enim leo ut erat. Nullam nec nulla vel massa fringilla ullamcorper. Integer fermentum metus sed commodo pellentesque. Proin et pulvinar orci, vitae commodo ex. Aliquam sed nulla id dolor rhoncus euismod eget a velit. Etiam tristique consectetur ligula. Cras id magna vitae ligula vestibulum malesuada non sed metus.

Donec rutrum nisi quis lacus tempus aliquet. Pellentesque condimentum aliquam elit, et dapibus turpis eleifend id. Donec varius tortor ut consectetur tincidunt. Vestibulum facilisis, orci a lacinia pretium, sem ante commodo tortor, non bibendum urna ipsum eget lacus. Sed id feugiat dolor. Suspendisse potenti. Mauris ac condimentum turpis, in lobortis ligula. Nulla tincidunt diam eget dolor ultrices ullamcorper. Integer ac leo eget risus gravida tristique. Nulla sit amet bibendum sem. Aliquam ac ultrices sem.</p>  
      </div>
    </div>
  );
};

export default Home;
