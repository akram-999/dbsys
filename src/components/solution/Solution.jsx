import React , { useEffect } from 'react'
import './solution.css'
import WOW from 'wowjs';
import 'animate.css'; 


export default function Features() {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

  return (
    <div className="container-xxl feature py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-4 wow animate__fadeInUp" data-wow-delay="0.1s" data-aos="zoom-out-right">
                    <p className="d-inline-block border rounded text-yellow-400 fw-semi-bold py-1 px-3">Pourquoi Nous Choisir!</p>
                    <h1 className="display-5 mb-4">Nos Solutions</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    
                </div>
                <div className="col-lg-8" data-aos="zoom-out-left">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-4">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="feature-box border rounded p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>

                                        <h4 className="mb-3">TPV POS</h4>
                                        <p className="mb-3">Une large gamme de caisses enregistreuses adaptée à chaque type de commerce.</p>
                                        
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="feature-box border rounded p-4">
                                        <i className="fa fa-check fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">BORNES</h4>
                                        <p className="mb-3"> Bornes de commande ou interactive , personnalisable selon le besoin.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="feature-box border rounded p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                                <h4 className="mb-3">DRIVE THRU</h4>
                                <p className="mb-3">Nos solutions permettent aux clients de prendre les commandes avec precision et rapidité , le client est en contact directe avec le caissier.</p>
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="feature-box border rounded p-4">
                                        <i className="fa fa-check fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">DIGITAL SIGNAGE</h4>
                                        <p className="mb-3"> Diffusez vos messages au clients en un seul clic , notre solution vous fait gagner du temps.</p>
                                        
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="feature-box border rounded p-4">
                                        <i className="fa fa-check fa-3x text-primary mb-3"></i>
                                        <h4 className="mb-3">PAGERS & SERVICE A TABLE</h4>
                                        <p className="mb-3">Expérience client: les clients ne se rassemblent plus au comptoir. Cela crée une expérience plus calme et plus agréable.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
