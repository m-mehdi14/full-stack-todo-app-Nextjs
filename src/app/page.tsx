import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Todo from './Todo'
import Wrapper from './components/Wrapper'



export default function Home() {
  return (
    <>

    <Wrapper>


    <div className=' mx-auto min-h-screen'>
      <Todo/>
      </div>


      </Wrapper>
    </>
      )
}
