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
                    <div className={styles.our}>
                        <Image alt="" src={"/images/our.png"}
                        fill
                            style={{objectFit:"contain"}}   
                        />
                    </div>
                    <div className={styles.services}>
                        <Image alt="" src={"/images/services.png"}
                        fill
                            style={{objectFit:"contain"}}   
                        />
                    </div>
                </div>
           </div>


        </section>
    )
}