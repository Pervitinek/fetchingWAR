import styles from "./page.module.css";
import Card from "@/components/Card";

async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const data = await getData()



  return (
      <>
          <header>
              <h1 className={styles.h1}>Country Statistics (commit deploy#3)</h1>
              <h2 className={styles.h2}>Here are the statistics for some countries.</h2>
          </header>
        <main className={styles.main}>
          {data.map((country, index) => {
              let country_name_edited = country.name.common.toLowerCase().replace(/ /g, '_');
              console.log(country_name_edited);
              return(
              <Card
                  key={index}
                  country_name={country.name.common}
                  country_population={country.population}
                  country_flag={country.flags.svg}
                  country_name_edited={country_name_edited}
                  country_name_official={country.name.official}
              />
              )
              })}
        </main>
      </>
  );
}
