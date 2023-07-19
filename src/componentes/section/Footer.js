import styles from './Footer.module.css'

function Footer () {
    return (
        <section className={styles.footer}>
            <div>
                <nav>
                    <p>Brasil</p>
                </nav>                
            </div>
            <div>
                <nav>
                    <a href='https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1'><p>Sobre</p></a>
                    <a href='https://ads.google.com/intl/pt-BR_br/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'><p>Publicidade</p></a>
                    <a href='https://smallbusiness.withgoogle.com/intl/pt-BR_br/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ww-ww-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u&c=BR#!/'><p>Negócios</p></a>
                    <a href='https://www.google.com/search/howsearchworks/?fg=1'><p>Como funciona a Pesquisa</p></a>
                </nav>
                <nav>
                    <a href='https://policies.google.com/privacy?hl=pt-BR&fg=1'><p>Privacidade</p></a>
                    <a href='https://policies.google.com/terms?hl=pt-BR&fg=1'><p>Termos</p></a>
                    <a href=''><p>Configurações</p></a>
                </nav>                    
            </div>
        </section>
    )
}

export default Footer