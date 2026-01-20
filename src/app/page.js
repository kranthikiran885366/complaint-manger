"use client"

import { useRouter } from "next/navigation"
import App from "../App"
import { pageToPath } from "./routerAdapter"

function HomePage() {
  const router = useRouter()

  return (
    <App
      initialPage="landing"
      syncRoute={(page) => {
        router.push(pageToPath(page))
      }}
    />
  )
}

export default HomePage
