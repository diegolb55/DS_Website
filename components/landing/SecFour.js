import styles from "@/styles/landing/SecFour.module.css"
import Image from "next/image"

export default function SecFour(){
    return (
        <section className={styles.s4}>
            <div className={styles.planet4}>
                <Image alt="" fill
                    style={{objectFit:"contain"}}
                    src="/images/planet4.png"
                />
            </div>
            <div className={styles.planet5}>
                <Image alt="" fill
                    style={{objectFit:"contain"}}
                    src="/images/planet5.png"
                />
            </div>
            <div className={styles.b4}>
                <h3 className={styles.our}>OUR</h3>
                <h3 className={styles.projects}>PROJECTS</h3>
            </div>
            

        </section>
    )
}