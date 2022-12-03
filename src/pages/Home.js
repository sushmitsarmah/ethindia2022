import { Button } from '@mantine/core';
import { useEffect } from 'react';
import { chain } from "wagmi";

const Home = () => {

    const init = async () => {
    };

    useEffect(() => {
      init();
    }, []);

    return (
        <div className='flex flex-col items-center'>
            Home
        </div>
    );
};

export default Home;