import styles from "@/styles/landing/SecTwo.module.css"
import Image from 'next/image'


export default function SecTwo(){
    return (
        <section className={styles.s2}>
            <div className={styles.box2}>
                <div className={`${styles.b2elements} ${styles.elev}`}>
                    <Image alt="" src={"/images/elev.png"}
                    fill
                    style={{objectFit:"contain"}}   
                    />
                </div>
                <div className={`${styles.b2elements} ${styles.mascot}`}>
                    <Image alt="" src={"/images/mascot.png"}
                    fill
                    style={{objectFit:"contain"}}   
                    />
                </div>
                <div className={`${styles.b2elements} ${styles.ate}`}>
                    <Image alt="" src={"/images/ate.png"}
                    fill
                    style={{objectFit:"contain"}}   
                    />
                </div>
                <div className={styles.tothemoon}>
                    <Image alt="" src={"/images/btothemoon.png"}
                    fill
                    style={{objectFit:"contain"}}   
                    />
                </div>
            </div>
      </section>
    )
}