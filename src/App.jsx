import './App.css'
import IntroSection from './Components/ItroSection'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import { homeProfileData } from './Components/Profile/data'
import SkillsSection from './Components/SkillsSection'
import { skillsHomeData } from './Components/SkillsSection/data'
import MyProjects from './Components/MyProjects'

function App() {

  return (
    <>
      <Navbar />
      <IntroSection />
      <Profile {...homeProfileData} />
      <SkillsSection {...skillsHomeData} />
      <MyProjects />
    </>
  )
}

export default App
