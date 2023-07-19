import styles from './Buttong.module.css'

function Buttong ({link, namebtn}) {
    return (
        <div className={styles.buttong}>
            <a href={link}>
               <button>{namebtn}</button>
            </a>
        </div>
    )
}

export default Buttong