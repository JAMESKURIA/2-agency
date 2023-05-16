export const Testimonials = () => {
    return (
        <section className="py-12 text-blue-900 sm:py-16 lg:py-20">
            <div className="relative mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-slate-400">
                            What clients say about their experience with us
                        </p>
                        <h2 className="mt-4 text-3xl font-bold text-orange-600 sm:text-4xl xl:text-5xl">
                            Client Testimonials
                        </h2>
                    </div>

                    <div className="order-3 mt-8 text-center md:mt-12">
                        <button className="mb-20 rounded-lg border-2 border-orange-600 bg-orange-600 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                            More reviews on TrustPilot
                        </button>
                    </div>

                    <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 sm:mt-10 md:max-w-none md:grid-cols-1 lg:gap-10">
                        <div className="order-2 flex justify-center space-x-2">
                            <span className="cursor-pointer rounded-full border p-3 hover:bg-orange-600 group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-600 group-hover:text-slate-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                            </span>
                            <span className="cursor-pointer rounded-full border p-3 hover:bg-orange-600 group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-orange-600 group-hover:text-slate-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <div className="flex flex-1 flex-col justify-between p-6 lg:py-8 lg:px-7">
                                <div className="flex flex-col items-center text-center">
                                    <span className="rounded-full bg-orange-500 p-3 text-5xl text-orange-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            role="img"
                                            width="1em"
                                            height="1em"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                                d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>

                                    <blockquote className="mt-8 flex-1">
                                        <p className="max-w-xl text-lg font-medium leading-relaxed text-slate-400">
                                            Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Explicabo libero reiciendis quas
                                            nemo aliquid voluptatum unde natus!
                                            Reprehenderit, quis doloribus.
                                        </p>
                                    </blockquote>
                                </div>

                                <div className="mx-auto mt-8 flex items-center">
                                    <img
                                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                        src="https://picsum.photos/200/300"
                                        alt=""
                                    />
                                    <div className="ml-4">
                                        <p className="text-base font-bold text-slate-400">
                                            Jenny Wilson
                                        </p>
                                        <p className="text-slate-300 mt-0.5 text-sm">
                                            Esports Commentator
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
