import React from 'react'
import ProjectCardDetails from '../../components/ProjectCardDetails';
import Containerimg1 from '../../assets/FALL ARREST SYSTEM/FALL ARREST SYSTEM 1.jpg'
import NavBar from '../../components/navBar';
import Footer from '../../components/Footer';
function WalkwayAndFall() {
  const boxData = [
    {
        src: Containerimg1,
        title: 'WHAT IS FALL ARREST SYSTEM ',
         why:"WHY FALL ARREST SYSTEM AND HANDRAIL ",
         whyans:"Roof safety systems are designed to protect workers from slips, trips and falls while working on a roof. These systems can prevent, restrain, arrest, or even eliminate the need for workers to be at heights in the first place.",
        about:"A roof top fall arrest system designed to eliminate or substantially reduce the risk of injury and death to operatives working at height whilst ensuring the integrity of the structure to which it is attached.",
        Guardrails:"Guardrails",
        Guardrailsans:"Guardrail systems come in fixed and freestanding options and provide workers with a barrier between them and potential slips or falls"
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