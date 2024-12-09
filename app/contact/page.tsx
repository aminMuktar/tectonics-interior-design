

export default function Contact(){
    return (
        <>
        <section className="pt-10">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"> Want to send feedback about our service? Need details about our Business? Let us know.</p>
                <form action="#" className="space-y-8">
                        <div
                            className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-indigo-600 md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600">
                            <input type="text" name="email" placeholder="Enter your email"
                            className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full" />
                        </div>
                        <div
                            className="relative p-1.5 my-10  flex  items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] border border-indigo-600 md:bg-white transition-all duration-500 hover:border-indigo-600 focus-within:border-indigo-600">
                            <input type="text" name="subject" placeholder="Subject"
                            className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px 15px 30px -4px rgba(16, 24, 40, 0.03)] md:shadow-none bg-white md:bg-transparent shadow-none placeholder:text-gray-400 focus:outline-none md:w-fit w-full" />
                        </div>
                    <div className="sm:col-span-2">
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-indigo-600 focus:outline-none" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-gray-700">Send message</button>
                </form>
            </div>
            </section>
        </>
    );
}