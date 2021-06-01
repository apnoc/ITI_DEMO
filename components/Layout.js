import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';


const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div >
           {children}   
      </div>
      <Footer />
    </>
  )
}

export default Layout;