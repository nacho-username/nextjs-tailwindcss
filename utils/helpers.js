export function formatDate(dateString) {
  // Create a date object
  let date = new Date(dateString)

  // Create a formatter object with desired options
  let dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  // Format the date using the formatter
  return dateFormatter.format(date) // "Mar 30, 2023"
}

export const sortArticlesByDatePosted = (articles) => {
  return articles.sort((a, b) => b.datePosted - a.datePosted)
}

export const limitByNumber = (array, n) => {
  return array.slice(0, n)
}
