import Banner from './Components/Banner/Banner'
import Cradit from './Components/Cradit/Cradit'
import Footer from './Components/Footer/Footer'
import GetToKnowus from './Components/GetTOKnowUs/GetToKnowus'
import Navbar from './Components/Navbar/Navbar'
import PopularCatagori from './Components/PopularCatagoti/PopularCatagori'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <PopularCatagori/>
      <GetToKnowus/>
      <Footer/>
      <Cradit/>
    </div>
  )
}

export default App
