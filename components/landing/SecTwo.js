import styles from "@/styles/landing/SecTwo.module.css"
import Image from 'next/image'


export default function SecTwo(){
    return (
        <section className={styles.s2}>
            <div className={styles.box2}>
                <h3 className={styles.elev}>ELEV</h3>
                <div className={`${styles.b2elements} ${styles.mascot}`}>
                    <Image alt="" src={"/images/mascot.png"}
                    fill
                    style={{objectFit:"contain"}}   
                    />
                </div>
                <h3 className={styles.ate}>ATE</h3>
                {/* <div className={styles.tothemoon}>
                    <Image alt="" src={"/images/btothemoon.png"}
                    fill
                    style={{objectFit:"contain"}}   
                    />
                </div> */}
                <p className={styles.tothemoon}>Your business to the moon</p>
            </div>
      </section>
    )
}