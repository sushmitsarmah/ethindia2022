import { Button } from '@mantine/core';
import { useEffect } from 'react';
import { chain } from "wagmi";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import Hero from '../assets/hero.png';
import HowItWorks from '../assets/howitworks.png';
import SideDeco from '../assets/side_decoration.svg';

const Home = () => {

    const init = async () => {
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className='flex flex-col items-center bg-gradient-to-b from-darkblue to-darkerblue min-h-screen pt-5'>
            <Navbar />

            <div className='flex flex-row justify-between items-center p-[30px] z-10'>
                <div className='w-1/2 flex flex-col gap-10'>
                    <h1 className='text-7xl font-bold text-white font-inter'>Test Your Knowledge & Earn!</h1>
                    <p className='text-white text-xl opacity-60 font-basier'>
                        PlayAstra is a decentralised media platform that provides equal opportunities for everyone to be a part of the game and win!
                        The Decentralised Quizes are for the Community, By the Community!
                    </p>
                    <div>
                        <Link to="/dashboard" className='btn bg-yellow hover:bg-red rounded-3xl font-basier'>Play Now</Link>
                        <a href="#howitworks" className='btn btn-ghost text-white font-basier'>Learn More</a>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={Hero}/>
                </div>
            </div>

            <img src={SideDeco} className="h-[500px] absolute left-0 top-1/2 mt-40 z-0" />

            <div className='flex flex-col p-10' id="howitworks">
                <img src={HowItWorks}/>
            </div>
        </div>
    );
};

export default Home;