import HeroesList from "@/components";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./page.module.scss";

async function getHeresData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }
  return res.json();
}

export default async function Home() {
  const heroes = await getHeresData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
