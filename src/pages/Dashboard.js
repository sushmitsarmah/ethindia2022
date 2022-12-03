import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { GAMES } from '../constants';

const Dashboard = () => {
    const [heading, setHeading] = useState('Choose Game');
    const [selectedGame, setSelectedGame] = useState({});

    const onClick = (k) => {
        if (!k.disabled) { setSelectedGame(k) }
    };

    const setGameButtons = () => {
        return GAMES.map((k, i) => {
            if(!k.disabled) {
                return <Link
                        key={i}
                        onClick={() => onClick(k)}
                        className={'btn bg-gradient-to-b border-none ' + (selectedGame.value === k.value ? 'from-red to-darkestblue' : 'from-darkerblue to-darkestblue')}
                        to={k.value}>
                        {k.title}
                    </Link>
            } else {
                return <button key={i}
                    className='btn bg-gradient-to-b border-none from-darkerblue to-darkestblue opacity-40'>
                    {k.title}
                </button>
            }
        });
    };

    return (
        <div className='flex flex-col items-center bg-gradient-to-b from-darkblue to-darkerblue min-h-screen pt-5'>
            <Navbar />

            <h1 className='text-4xl text-white font-bold my-10'>{heading}</h1>

            <div className='w-full bg-gradient-to-b from-purple to-darkblue grid grid-cols-3 p-20 gap-10'>
                {setGameButtons()}
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;