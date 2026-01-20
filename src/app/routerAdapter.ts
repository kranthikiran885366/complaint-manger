export type PageKey = string

export function pageToPath(page: PageKey): string {
  if (page === 'landing') return '/'

  if (page.startsWith('complaint-detail-')) {
    return `/complaint-detail/${page.replace('complaint-detail-', '')}`
  }
  if (page.startsWith('complaint-feedback-')) {
    return `/complaint-feedback/${page.replace('complaint-feedback-', '')}`
  }
  if (page.startsWith('department-')) {
    return `/department/${page.replace('department-', '')}`
  }

  return `/${page}`
}

export function pathToPage(slug: string[] | undefined): PageKey {
  if (!slug || slug.length === 0) return 'landing'

  // e.g. /complaint-detail/123
  if (slug[0] === 'complaint-detail' && slug[1]) {
    return `complaint-detail-${slug[1]}`
  }
  if (slug[0] === 'complaint-feedback' && slug[1]) {
    return `complaint-feedback-${slug[1]}`
  }
  if (slug[0] === 'department' && slug[1]) {
    return `department-${slug[1]}`
  }

  // simple single-segment routes
  return slug.join('/') || 'landing'
}
