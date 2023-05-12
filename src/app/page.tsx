"use client";
import { useEffect, useState } from "react";
import { AvatarList } from "@/components/avatar-list";
import { Quote } from "@/components/quote";
import { getQuotesService } from "../services/getQuotesService";

import styles from "./page.module.css";

export default function Home() {
  const [setQuotes, setSetQuotes] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonData = await getQuotesService();
        setSetQuotes(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  console.log("setQuotes", setQuotes);

  return (
    <main className={styles.main}>
      Welcome to The Simpsons Quotes Trivia
      <Quote />
      <AvatarList />
    </main>
  );
}
