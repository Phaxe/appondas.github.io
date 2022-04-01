import React ,{Suspense} from 'react';
import { BrowserRouter , Route,  Switch } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/Error/ErrorBoundry.jsx';
const Header = React.lazy(() => import("./components/header/Header"));
const Home   = React.lazy(() => import("./components/home/Home.jsx"))
const Footer = React.lazy(() => import("./components/footer/Footer.jsx"));
const Contact = React.lazy(() => import("./components/contact/Contact.jsx"));
const Services = React.lazy(() => import ("./components/allservices/AllServices.jsx"));
const Pricing = React.lazy(() => import("./components/allservices/pricing/Pricing.jsx"));

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <Suspense fallback={
      <div style={{
        backgroundColor:"#1f1f38", 
        width:"100vw", height:"100vh" , 
        fontSize:"35px" , 
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        margin:"0 auto"
      }}> 
      <h1 style={{
      textAlign:"center",
      fontWeight:"bold",
      color:"white" , 
    }}>Appondas ....</h1>
      </div>}>
        <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} /> 
            <Route path="/services" component={Services} /> 
            <Route path="/pricing" component={Pricing} />
        </Switch>
        <Footer/>
      </Suspense>
      </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
