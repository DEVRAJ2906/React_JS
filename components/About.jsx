import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="flex flex-wrap justify-center items-center md:5/12 lg:w-5/12">
                        <img
                            className='h-100'
                            src="https://m.media-amazon.com/images/M/MV5BY2RmYjc0M2YtZTJjOS00ZTYyLWE5ZTAtMjRmY2FhNzJhOWZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Gangsta                        </h2>
                        <p className="mt-6 text-gray-600">
                        Two handymen take on jobs for both the mob and the police that no one else can handle. Worick and Nicolas work in a town which is full of mafia, hoodlums and prostitutes. They face a challenge after taking on a job of crushing a gang.
                        </p>
                        <p className="mt-4 text-gray-600">
                        In the city of Ergastulum, a shady ville filled with made men and petty thieves, whores on the make and cops on the take, there are some deeds too dirty for even its jaded inhabitants to touch. Enter the "Handymen," Nic and Worick, who take care of the jobs no one else will handle. Until the day when a cop they know on the force requests their help in taking down a new gang muscling in on the territory of a top Mafia family. It seems like business (and mayhem) as usual, but the Handymen are about to find that this job is a lot more than they bargained for.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}