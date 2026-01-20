"use client"

import { useRouter } from "next/navigation"
import App from "../../App"
import { pageToPath, pathToPage } from "../routerAdapter"

type Props = {
  params: {
    slug?: string[]
  }
}

export default function CatchAllPage({ params }: Props) {
  const router = useRouter()
  const page = pathToPage(params?.slug)

  return (
    <App
      initialPage={page}
      syncRoute={(nextPage) => {
        router.push(pageToPath(nextPage))
      }}
    />
  )
}
