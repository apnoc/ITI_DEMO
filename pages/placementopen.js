import styles from '../styles/Styles.module.css'




export default function placementopen() {
   
    return (
        <div className="container">
           <h1 className={styles.heading}>
               Placement Form
           </h1>
           <form className={styles.details}>
                <div>               
                <label>Admission Number :</label>
                <span className={styles.spaan}>
                <input
                type="text"
                id="name"
                className="name" 
                /> 
               </span>
                </div>
                 <label>DOB(As per your ITI Certificate) :</label>
                 <span className={styles.spaan}>
                <input
                type="text"
                id="name"
                className="name"
                />
                </span>
                 <center>
                    <input className={styles.submit} type="submit" value="Submit" />
                 </center>
            </form>
        </div>
    );
}