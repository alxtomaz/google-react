import apps from '../img/apps.svg'
import usuario from '../img/usuario.svg'
import styles from './Navbar.module.css'

function Navbar () {
    return (
        <div className = {styles.Navbar}>
            <div>
                <a href='https://www.google.com/intl/pt-BR/gmail/about/'>Gmail</a>
                <a href='https://www.google.com/imghp?hl=pt-BR&ogbl'>Imagens</a>
            </div>                
                <img src = {apps}/>
                <img src = {usuario}/>          
        </div>
    )
}

export default Navbar