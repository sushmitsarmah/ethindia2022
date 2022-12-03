import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GAMES } from '../constants';

const Sport = () => {
    const location = useLocation();
    const [sport, setSport] = useState({});

    useEffect(() => {
        const loc = location.pathname.replace('/dashboard/', '');
        const game = GAMES.find(k => k.value === loc);
        if (game) {
            setSport(game);
        } else {
            setSport({});
        }
    }, [location]);

    const setSportGames = () => {
        return (sport?.children || []).map((k, i) => (
            <div key={i} className="card h-96 glass">
                <figure className='h-1/2 bg-black'>
                    <img className='w-full self-center' src={'/img/' + k.img} alt={k.title} />
                </figure>
                <div className="card-body flex flex-col items-center gap-10">
                    <h2 className="card-title text-lg text-white font-bold">{k.title}</h2>
                    <div className="card-actions justify-end w-full">
                        <button className="btn bg-yellow hover:bg-red w-full">Join Now!</button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className='grid grid-cols-3 gap-20 mt-10 p-20'>
            {setSportGames()}
        </div>
    )
};

export default Sport;