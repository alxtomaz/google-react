import google from '../img/google.svg'
import styles from './Search.module.css'

function Search () {
    return (
        <div className={styles.Search}>
            <img src={google}/>            
        </div>        
    )
}

export default Search