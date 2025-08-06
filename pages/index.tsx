import Head from 'next/head';
import Link from 'next/link';
import { Counter } from '../components/Counter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js 샘플</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Next.js + TypeScript 시작하기</h1>
        <p>아래 버튼을 눌러보세요!</p>
        <Counter />
        <p><Link href="/about">About 페이지로 이동</Link></p>
      </main>
    </>
  );
}