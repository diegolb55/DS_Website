import styles from "@/styles/landing/SecFour.module.css"
import Image from "next/image"

export default function SecFour(){
    return (
        <section className={styles.s4}>
            <div className={styles.planet4}>
                <Image fill
                    style={{objectFit:"contain"}}
                    src="/images/planet4.png"
                />
            </div>
            <div className={styles.planet5}>
                <Image fill
                    style={{objectFit:"contain"}}
                    src="/images/planet5.png"
                />
            </div>
            <div className={styles.b4}>
                <div className={styles.our}>
                    <Image fill
                        style={{objectFit:"contain"}}
                        src="/images/our.png"
                    />
                </div>
                <div className={styles.projects}>
                    <Image fill
                        style={{objectFit:"contain"}}
                        src="/images/services.png"
                    />
                </div>
            </div>
            

        </section>
    )
}