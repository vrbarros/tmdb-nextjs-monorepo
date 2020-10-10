import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <div>
        <img width={200} src="/movies/static/nextjs.png" />
      </div>
      <h1>Welcome to Movies Next.js!</h1> <a href="/">Go Home</a>
    </div>
  );
}

export default HomePage;
