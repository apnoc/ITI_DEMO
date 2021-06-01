import React from 'react'
import content from '../data.content';
import {Carousel} from 'react-bootstrap';
import Card from '../components/Card';
import Marquee from "react-fast-marquee";
import styles from '../styles/Styles.module.css'


function home() {
  return (
    <div>
         <>
              {
                  content.home_pages.map((details) => 
                            <>

              <div className="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
              <section>                                                                                                                                                                                                   
                  <div className={styles.details}>
                        <marquee  behaviour="alternate" scrolldelay="140"><h5>{details.notification}</h5></marquee>
                  </div>
              </section>
              <section className={styles.Content__Section}>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-sm-2 col-lg-3">            
                            <div className={styles.quick_links}>
                                <ul>  
                                    {
                                        details.content.map((information) => 
                                                <>
                                                    <li><a href={information.link} target="_blank"><span > <i className={information.icon} aria-hidden="true"></i> {information.header} </span></a></li>
                                                </>
                                           )
                                    }     
                                </ul>
                            </div>
                        </div>
                        <section className=" col-sm-2 col-lg-6">
                            <h3 className=" text-center  my-2 ">{details.title}</h3>                 
                         <section className="testimonials py-1  "> 
                             <div className={styles.fixed__bnr}>
                        <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/images/image1.jpg"
                              alt="First slide"
                            />

                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            <img
                              className="d-block w-100"
                              src="/images/image2.jpg"
                              alt="Second slide"
                            />

                          </Carousel.Item>

                        </Carousel>
                        </div> 
                        </section> 
                        </section>
                        
                        <div className="col-sm-2 col-lg-3">              
                        <div className={styles.green_btn}>
                         	{
                                details.student_forms.map((description) =>
                                        <>                                         
                                            <a href={description.link} target="_blank"><img src={description.src} alt={description.alt} title={description.title} />
                                            <span style={{color:'white'}}>{description.title}</span></a>
                                        </>
                                   )
                            } 
                            </div>    
                         <div className={styles.emp_login}>
                            {
                                details.employe_forms.map((description) =>
                                        <>                                         
                                            <a href={description.link} target="_blank"><img src={description.src} alt={description.alt} title={description.title} />
                                            <span style={{color:'white'}}>{description.title}</span></a>
                                        </>
                                    )
                            } 

           
        </div>
        <div className={styles.news_block}>
                            {
                                details.News_Updates.map((description) => 
                                        <>                                         
                                             <div className={styles.news_title}><img src={description.src} alt={description.alt} title={description.title} /> {description.title}</div>
                                             <Carousel className="container" >
                          <Carousel.Item interval={1000}>
                                  <ul id={styles.ticker_02} className={styles.ticker}> 
                                
                                {
                                        description.notifications.map((details) => 
                                                <>  
                                                <li>                                      
                                                    <a href={details.link}  target="_blank"><b>{details.title}</b></a> <br/> --
                                                    <small>{details.subtitle}</small> 
                                                </li> 
                                                </>
                                          )
                                }  
                                                      
                            </ul>
                          </Carousel.Item>

                        </Carousel>
     {/*              <Marquee direction = {styles.up}>
                    <ul id={styles.ticker_02} className={styles.ticker}> 
                        
                        {
                                description.notifications.map((details) => 
                                        <>  
                                         <li>                                      
                                            <a href={details.link}  target="_blank"><b>{details.title}</b></a> <br/> --
                                            <small>{details.subtitle}</small> 
                                         </li> 
                                        </>
                                   )
                        }  
                                               
                    </ul>
                      </Marquee> */}
               
                </>
                                              )
                                    } 


            <span className={styles.button}><a  style={{color:'white'}} href={details.button_link}>{details.button}</a></span>
                <div className={styles.clearfix}></div>  
        </div>
        </div>           
       
        </div>
         
        
                    
                </div>
                </section>
                
              </div>
              <section className={styles.card_info}>
                    <Card />
                </section>
              
              </>
                        )
              }
	
             </>                         
            
       
    </div>
  )
}

export default home

