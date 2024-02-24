import React from 'react'
import ProjectCardDetails from '../../components/ProjectCardDetails';
import Containerimg1 from '../../assets/container1img.jpg'
import NavBar from '../../components/navBar';
import Footer from '../../components/Footer';
function WalkwayAndFall() {
  const boxData = [
    {
        src: Containerimg1,
        title: 'Walk way And Fall',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.',
        year:"2024",
        Location:"Dubai",
        Size:'1300ft',
        about:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima praesentium est debitis incidunt facere optio nobis facilis nesciunt, officiis, consequuntur fugiat natus sit officia eum repellat sapiente sunt vitae        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minima praesentium est debitis incidunt facere optio nobis facilis nesciunt, officiis, consequuntur fugiat natus sit officia eum repellat sapiente sunt vitae."
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

export default WalkwayAndFall