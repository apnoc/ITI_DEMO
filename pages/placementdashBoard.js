import React,  {Component} from 'react' ;
import content from '../data.content';
import styles from '../styles/Styles.module.css';

class PlacementsDashBoard extends Component {
    render() {
        return (
            <div className= "container">
                                {
                                 content.Dashboard.map((information) => 
                                            <section >
                                                <h3 className="text-center m-4">{information.heading}</h3>
                                                <ul>
                                                        <li>{information.header1}</li>                                  
                                                        <li>{information.header2}</li>  
                                                   </ul>
                                                   <div className="row">
                                                <section className="col-lg-3 m-2  ">
                                                 
                                                    <div>
                                                    {
                                                    information.content1.map((details) => 
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) =>
                                                                                                    <tr>
                                                                                                       
                                                                                                        <th scope="col">{tables.h2}</th>                                                                                  
                                                                                                        <th scope="col">{tables.h3}</th>                                                                               

                                                                                                    </tr>
                                                                                                
                                                                                            )}                                                                      
                                                                                        
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        {
                                                                                            details.Paragraph.map((description) => 
                                                                                                    <tr>
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
                                                                                                    </tr>
                                                                                                    
                                                                                                )}                                                                   
                                                                                
                                                                                    </tbody>
                                                                                    </table>
                                                                                )
                                                    }
                                                    </div>
                                                </section>
                                                <section className="col-lg-3 m-0 ">
                                                   
                                                    <div>
                                                    {
                                                    information.content2.map((details) => 
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) => 
                                                                                                    <tr>
                                                                                                        
                                                                                                        <th scope="col">{tables.h2}</th> 
                                                                                                        <th scope="col">{tables.h3}</th>                                                                                 
                                                                                                    </tr>
                                                                                                
                                                                                            )}                                                                      
                                                                                        
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        {
                                                                                            details.Paragraph.map((description) =>
                                                                                                    <tr>
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
                                                                                                    </tr>
                                                                                                    
                                                                                                )}                                                                   
                                                                                
                                                                                    </tbody>
                                                                                    </table>
                                                                                )
                                                    }
                                                    </div>
                                                </section>
                                                <section className="col-lg-3 m-0 ">
                                                 
                                                    <div>
                                                    {
                                                    information.content3.map((details) => 
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) => 
                                                                                                    <tr>
                                                                                                        
                                                                                                        <th scope="col">{tables.h2}</th>                                                                                  
                                                                                                        <th scope="col">{tables.h3}</th>                                                                               

                                                                                                    </tr>
                                                                                               
                                                                                            )}
                                                                                           
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        {
                                                                                            details.Paragraph.map((description) => 
                                                                                                    <tr>
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
                                                                                                    </tr>
                                                                                                    
                                                                                                )}                                                                   
                                                                                
                                                                                    </tbody>
                                                                                    </table>
                                                                               )
                                                    }
                                                    </div>
                                                </section>
                                                <section className="col-lg-2 m-0 ">
                                                   
                                                    <div>
                                                    {
                                                    information.content4.map((details) => 
                                                                                    <table className="table table-bordered">
                                                                                        <thead>
                                                                                            {
                                                                                            details.heading.map((tables) =>
                                                                                                    <tr>
                                                                                                       
                                                                                                        <th scope="col">{tables.h2}</th> 
                                                                                                        <th scope="col">{tables.h3}</th>                                                                                 
                                                                                                    </tr>
                                                                                                
                                                                                            )}                                                                      
                                                                                        
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        {
                                                                                            details.Paragraph.map((description) =>
                                                                                                    <tr>
                                                                                                        
                                                                                                        <td>{description.p2}</td>
                                                                                                        <td>{description.p3}</td>
                                                                                                    </tr>
                                                                                                    
                                                                                                )}                                                                   
                                                                                
                                                                                    </tbody>
                                                                                    </table>
                                                                                
                                                    )}
                                                    </div>
                                                </section>
                                               
                                                </div>

                                            </section>
                                        
                                    
                                  ) }

                
            </div>
        )
    }
}

export default PlacementsDashBoard;