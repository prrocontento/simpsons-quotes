import { AvatarList } from "@/components/avatar-list";
import { Quote } from "@/components/quote";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Welcome to The Simpsons Quotes Trivia
      <Quote />
      <AvatarList />
    </main>
  );
}
