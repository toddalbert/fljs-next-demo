import Link from 'next/link'
import Title from './Title'

export const metadata = {
  title: "About this cool demo"
}

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-2xl text-blue-200 font-bold">About</h1>
      <Title />
      <Link href="/" className='text-blue-500'>Home</Link>
    </main>
  )
}