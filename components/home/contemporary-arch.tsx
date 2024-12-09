import type { FC } from "react";



export const ContemporaryArch: FC = ()=>{
    return (
        <section className="bg-black">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="">
                    <h1 className="text-white text-4xl lg:text-6xl font-bold">
                        <span className="">Contemporary</span> and Wabisabi Architecture
                    </h1>
                    <p className="mb-4 text-gray-200">Embrace the beauty of imperfection with designs rooted in natural materials, organic forms, and a connection to the environment.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="/contemporary-arch.jpg" alt="office content 1" />
                    <img className="mt-4 w-full rounded-lg lg:mt-10" src="/wabisabi.jpg" alt="office content 2" />
                </div>
            </div>
    </section>
    );
}