import { Text } from "@nextui-org/react";
interface QuoteProps {
  text: string;
}
export function Quote({ text }: QuoteProps) {
  return <Text h1>{text}</Text>;
}
