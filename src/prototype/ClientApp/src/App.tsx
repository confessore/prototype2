import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Echo from './components/Echo';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Services from './components/Services';
import Service from './components/Service';
import GlobeAmericasIcon from '@heroicons/react/24/outline/GlobeAmericasIcon';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';
import CakeIcon from '@heroicons/react/24/outline/CakeIcon';
import CloudIcon from '@heroicons/react/24/outline/CloudIcon';
import about from './about.gif';

function App() {
  return (
    <div className="text-center text-black dark:text-white bg-zinc-900 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div className="flex flex-wrap justify-center items-center">
          <Service icon={<GlobeAmericasIcon />} title="our reach is global" highlight="we serve most areas of the planet" description="when customer service and reliability mean everything, borders mean nothing" />
          <Service icon={<CodeBracketIcon />} title="we'll handle the nerd stuff" highlight="your dreams become reality" description="everyone gets to send their kids to college or drive lambos if they're in to that kind of thing; we're not here to judge" />
          <Service icon={<CloudIcon />} title="your partner in the clouds" highlight="we keep your data available" description="international stability ensured with multi-regional replication" />
          <Service icon={<CakeIcon />} title="the cake is not a lie" highlight="scout's honor" description="we throw mad cake parties" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;