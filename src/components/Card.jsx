import LocationImg from "./location_icon.png";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({country_name, country_name_official,country_population, country_flag, country_name_edited}){
    return(
        <Link href={country_name_edited} className={"link"}>
        <div className={styles.card}>
            <p className={styles.txt} id={styles.nadpis}>
                <Image src={LocationImg} alt="LocationImg" id={styles.locationIcon}/>
                {country_name}
            </p>
            <Image src={country_flag} width={1000} height={1000} className={styles.flagIcon} alt="LocationImg"/>
            <div className={styles.textVlevo}>
                <p className={styles.txt}>Official name: {country_name_official}</p>
                <p className={styles.txt}>Population: {country_population}</p>
            </div>
        </div>
        </Link>
    )
}