import styles from "@/styles/landing/SecOne.module.css"
import Image from "next/image"

export default function SecOne(){
    return(
        <section className={styles.s1}>
          <div className={styles.planet1}>
            <Image src={"/images/planet1.png"}
                fill
                style={{objectFit:"contain"}}   
              />
          </div>
          <div className={styles.spaces}>
            <Image src={"/images/digital.png"}
              fill
              style={{objectFit:"contain"}}   
            />
          </div>
          <div className={styles.spaces}>
            <Image src={"/images/spaces.png"}
              fill
              style={{objectFit:"contain"}}   
            />
          </div>
          <div className={styles.planet2}>
            <Image src={"/images/planet2.png"}
              fill
              style={{objectFit:"contain"}}   
            />
          </div>
        </section>
    )
}