import Image from 'next/image';
import Header from '../components/Header';
import Converter from '../components/Converter';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Converter />
    </main>
  );
}