export default function HomeLayout ({children, className}) {
  return (
    <main className={`${className} p-1 sm:p-2  rounded  max-w-[90%] border-gray-900 dark:border-gray-200 sm:border flex flex-col`}>
      {children}
    </main>
  )
}