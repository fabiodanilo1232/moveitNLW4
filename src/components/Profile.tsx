import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/fabiodanilo1232.png" alt="Fabio Nascimento"/>
            <div>
                <strong>Fabio Nascimento</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>


        </div>
    );
}