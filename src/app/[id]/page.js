import Link from "next/link";
import styles from "./details.module.css";

async function getData() {
    const res = await fetch("https://restcountries.com/v3.1/all")
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Country({ params }) {
    const Data = await getData()
    let data = Data.find(country => String(country.name.common.toLowerCase().replace(/ /g, '_')) === params.id);

    if (!data || !params.id) {
        return (
            <div className={"errorDiv"}>
                <h2 className={"errorFourOFour"}>
                    Error 404
                </h2>
                <p>
                    Click the highlighted text to go back to the <Link href={"/"} className={"link"}><span className={"errorMainPart"}>main page</span></Link>
                </p>
            </div>
        )
    }
    function checkIndependent(){
        if(data.independent){
            return "Yes";
        }else{
            return "No";
        }
    }
    function checkUN(){
        if(data.unMember){
            return "Yes";
        }else{
            return "No";
        }
    }

    return(
        <main className={styles.main}>
            <div>
            <h1>{data.name.common}</h1>
                    <div className={styles.containerB}>
                        <p id={styles.firstP}>
                            <span className={styles.podnadpis}>Official Name</span>
                            {data.name.official}
                        </p>
                        <p>
                            <span className={styles.podnadpis}>Top Level Domain</span>
                            {data.tld}
                        </p>
                        <p>
                            <span className={styles.podnadpis}>Region</span>
                            {data.region}
                        </p>
                        <p>
                            <span className={styles.podnadpis}>Status</span>
                            {data.status}
                        </p>
                        <p>
                            <span className={styles.podnadpis}>Independent</span>
                            {checkIndependent()}
                        </p>
                        <p>
                            <span className={styles.podnadpis}>Capital</span>
                            {data.capital}
                        </p>
                        <p>
                            <span className={styles.podnadpis}>UN Member</span>
                            {checkUN()}
                        </p>
                    </div>
                </div>
        </main>
    );
}