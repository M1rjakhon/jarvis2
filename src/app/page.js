import LinkButton from '../components/LinkButton';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <h1>Home</h1>
      <LinkButton name="Register" route="/register"  />      
    </>
  );
}
