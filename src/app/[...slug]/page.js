"use client"

import { useRouter, useParams } from "next/navigation"
import App from "../../App"
import { pageToPath, pathToPage } from "../routerAdapter"

function CatchAllPage() {
  const router = useRouter()
  const params = useParams()
  const slug = Array.isArray(params?.slug)
    ? params.slug
    : params?.slug
      ? [params.slug]
      : undefined

  const page = pathToPage(slug)

  return (
    <App
      initialPage={page}
      syncRoute={(nextPage) => {
        router.push(pageToPath(nextPage))
      }}
    />
  )
}

export default CatchAllPage
