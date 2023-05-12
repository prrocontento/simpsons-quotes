"use client";
import { useEffect, useState } from "react";
import { AvatarList } from "@/components/avatar-list";
import { Quote } from "@/components/quote";
import { getQuotesService } from "../services/getQuotesService";

import styles from "./page.module.css";

export default function Home() {
  const [setQuotes, setSetQuotes] = useState([]);
  const [text, setText] = useState();

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

  useEffect(() => {
    if (setQuotes.length > 0) {
      const RANDOM_NUMBER = Math.floor(Math.random() * setQuotes.length);
      const getRandomQuote = (setQuotes: any) => setQuotes[RANDOM_NUMBER].quote;
      const quote = getRandomQuote(setQuotes);
      setText(quote);
    }
  }, [setQuotes]);

  return (
    <main className={styles.main}>
      {text && <Quote text={text} />}
      <AvatarList />
    </main>
  );
}
