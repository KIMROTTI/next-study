import Link from 'next/link';

export default function Links() {
  return (
    <>
      <h1>Links</h1>
      <div className="mt-20 w-100"></div>
      <Link href={'/section1/getStaticProps'}>/getStaticProps Page</Link>
    </>
  );
}
