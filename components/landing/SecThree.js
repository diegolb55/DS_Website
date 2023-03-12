import styles from "@/styles/landing/SecThree.module.css"
import Image from "next/image"

export default function SecThree(){
    return (
        <section className={styles.s3}>
            <div className={styles.planet3}>
                <Image alt="" src={"/images/planet3.png"}
                fill
                    style={{objectFit:"contain"}}   
                />
            </div>
           <div className={styles.sbox}>
                <div className={styles.tbox}>
                    <h3 className={styles.our}>OUR</h3>
                    <h3 className={styles.services}>SERVICES</h3>

                </div>
           </div>


        </section>
    )
}