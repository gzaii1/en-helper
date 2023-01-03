import Head from 'next/head'
import * as React from 'react'
import Link from 'next/link'

const { useEffect } = React

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/preactjs/preact')
    // : Repository
    const json = await res.json()
    return {
      props: {
        stars: json.stargazers_count,
      },
    }
  }

export default function Home () {
    return <>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <div>hello world</div>
        <Link href="/overview">overview</Link>
    </>
}