import Header from '../sections/Header'
import HeroBanner from '../sections/HeroBanner'
import About from '../sections/About'
import OurServices from '../sections/OurServices'
import WorkProcess from '../sections/WorkProcess'
import Pricing from '../sections/Pricing'
import Testimonials from '../sections/Testimonials'
import OurBlogs from '../sections/OurBlogs'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroBanner/>
      <About/>
      <OurServices/>
      <WorkProcess/> 
      <Pricing/>
      <Testimonials/>
      <OurBlogs/>
      <Footer/>
    </div>
  )
}
