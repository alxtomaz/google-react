import lupa from '../img/lupa.svg'
import keyboard from '../img/keyboard.svg'
import voice from '../img/voice.svg'
import security from '../img/security.svg'
import styles from './IptSearch.module.css'
import Buttong from '../elements/Buttong'


function  IptSearch() {
    return (
        <section className={styles.IptSearch}>
            <nav>
                <> <img src= {lupa}/> </>
                <> <input></input> </>
                <> <img src= {keyboard}/></> 
                <> <img src={voice}/> </>                                     
            </nav>
            <div>
                <Buttong 
                namebtn='Pesquisa Google'
                link=''
                />
                <Buttong 
                namebtn='Estou com sorte'
                link=''
                />
            </div>
            <div>
                <> <img src= {security}/> </>
                <a href='https://www.google.com/'>
                    <p>Faça o Check-up de privacidade</p>
                </a>
            </div>                     
        </section>
    )
}

export default IptSearch