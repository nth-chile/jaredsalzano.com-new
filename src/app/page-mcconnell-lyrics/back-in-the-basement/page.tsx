import type { Metadata } from "next"
import Cpt from "@/components/PageMcConnellLyrics"

export const metadata: Metadata = {
  title: "Back in the Basement - Page McConnell lyrics"
}

export default function BackInTheBasement() {
  return <Cpt trackTitle="Back in the Basement">
    [Instrumental]
  </Cpt>
}
