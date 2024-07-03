"use client"
import { useState } from 'react';
import Error from '@/components/Error/Error';
import Loading from '@/components/Loading/Loading';
import About from '@/components/About/About';
import ContactForm from '@/components/ContactForm/ContactForm';
import Header from '@/components/Header/Header';
import useWikipedia from '@/hooks/useWikipedia';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('Bill Gates');
  const { data: person, isLoading, isError } = useWikipedia(searchTerm);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error searchTerm={searchTerm} onSearch={handleSearch} />;
  }

  return (
    <div>
      <Header name={person.title} profileImage={person.thumbnail?.source} />
      <About person={person} onSearch={handleSearch} />
      <ContactForm />
      <Footer />
    </div>
  );
}
