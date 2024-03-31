import { Link, Head } from '@inertiajs/react';
// import logo from '../../Photo/logo.png';
// import background1 from '../../Photo/background1.jpg';
import '../../css/Welcome.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="body">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src=""
                />
                <div className=" ">

                    <div className="">

                        <header className="header container-fluid">

                            <div className="">
                                
                                {/* logo */}
                                {/* <img src={logo} className='logo'/> */}
                                   
                            </div>
                            {/* <h1 className='headername'>M1 School</h1> */}
                            <nav className="">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-3 py-2 dark:text-white dark:hover:text-white/80 dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-3 py-2 dark:text-white dark:hover:text-white/80 login "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-3 py-2 dark:text-white dark:hover:text-white/80 signup"
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <div className='background'></div>


                        <footer className="footer">
                           www.yasiruviyara.com
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
