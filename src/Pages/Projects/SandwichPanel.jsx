import React from 'react'
import ProjectCardDetails from '../../components/ProjectCardDetails';
import Containerimg1 from '../../assets/container1img.jpg'
import NavBar from '../../components/navBar';
import Footer from '../../components/Footer';
function SandwichPanel() {
  const boxData = [
    {
        src: Containerimg1,
        title: 'Sandwich Panel',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.',
        year:"2024",
        Location:"Dubai",
        Size:'1300ft',
        about:"Sandwich panels are a modular building material designed to cover buildings and structures. These panels consist of two layers that form the outer structure and ensure form, weather resistance and rigidity."
    }

    // Add more objects as needed for additional boxes
];
  return (
    <>
     <NavBar/>
     <ProjectCardDetails boxData={boxData}/>
      <Footer/>
    </>
  )
}

export default SandwichPanel;