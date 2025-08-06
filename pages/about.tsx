import Link from 'next/link';

export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>About 페이지</h1>
      <p>이건 정적인 About 페이지입니다.</p>
      <Link href="/">홈으로 돌아가기</Link>
    </main>
  );
}