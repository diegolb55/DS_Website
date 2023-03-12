import styles from "@/styles/landing/SecOne.module.css"
import Image from "next/image"

export default function SecOne(){
    return(
        <section className={styles.s1}>
          <div className={styles.planet1}>
            <Image alt="" src={"/images/planet1.png"}
                fill
                style={{objectFit:"contain"}}   
              />
          </div>
          <h1 className={styles.ds}>Digital <br/>Spaces</h1>

          <div className={styles.planet2}>
            <Image alt="" src={"/images/planet2.png"}
              fill
              style={{objectFit:"contain"}}   
            />
          </div>
        </section>
    )
}