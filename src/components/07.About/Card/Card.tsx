import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.card1}>
                <div className={styles.text}>Свежайшие продукты</div>
            </div>
            <div className={styles.card2}>
                <div className={styles.text}>Быстрая доставка</div>
            </div>
            <div className={styles.card3}>
                <div className={styles.text}>Лучшие повара</div>
            </div>
            <div className={styles.card4}>
                <div className={styles.text}>Свежайшие продукты</div>
            </div>
        </div>
    )
}

export default Card