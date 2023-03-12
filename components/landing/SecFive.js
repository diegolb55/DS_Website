import styles from "@/styles/landing/SecFive.module.css"
import Image from "next/image"

export default function SecFive(){
    return (
        <section className={styles.s5}>
            <div className={styles.readyto}>
                <Image src="/images/readyto.png"
                    fill
                    style={{objectFit:"contain"}}
                />
            </div>
            <div className={styles.planet6}>
                <Image src="/images/planet6.png"
                    fill
                    style={{objectFit:"contain"}}
                />
            </div>

        </section>
    )
}