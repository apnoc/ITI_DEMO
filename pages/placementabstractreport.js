import content from '../data.content';




export default function placementabstractreport() {
  return (
  
      <div className= "container">
                          {
                              content.Abstract.map((information) => 
                                      <section >
                                          <h3 className="text-center m-4">{information.heading}</h3>
                                         
                                         <section className="container" >
                                           
                                           <div>
                                           {
                                           information.content.map((details) => 
                                                                           <table className="table">
                                                                               <thead>
                                                                                   {
                                                                                   details.heading.map((tables) => 
                                                                                           <tr>
                                                                                              <th scope="col">{tables.h1}</th> 
                                                                                               <th scope="col">{tables.h2}</th>                                                                                  
                                                                                               <th scope="col">{tables.h3}</th>                                                                               
                                                                                               <th scope="col">{tables.h4}</th> 
                                                                                               <th scope="col">{tables.h5}</th>
                                                                                           </tr>                                                                                      
                                                                                   )}                                                                      
                                                                               
                                                                               </thead>
                                                                               <tbody>
                                                                               {
                                                                                   details.Paragraph.map((description) =>
                                                                                           <tr>
                                                                                               <td>{description.p1}</td>
                                                                                               <td>{description.p2}</td>
                                                                                               <td>{description.p3}</td>
                                                                                               <td>{description.p4}</td>
                                                                                               <td>{description.p5}</td>
                                                                                           </tr>                                                                                          
                                                                                       )}                                                                   
                                                                       
                                                                           </tbody>
                                                                           </table>
                                                                       )
                                           }
                                           </div>
                                       </section>

                                      </section>
                                  )
                          }

          
      </div>
 
  ); 
}