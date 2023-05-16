import bannerSvg from "@/assets/undraw_finance_re_gnv2.svg";

export const Banner = () => {
    return (
        <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
            <div className="max-w-md pr-20 lg:pt-28">
                <img src={bannerSvg} alt="banner svg" />
            </div>
            <div className="">
                {/* <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
                    A <span className="text-orange-600">revolutionary</span> way
                    to build websites
                </h2> */}
                <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
                    <div>
                        <p className="mb-6 border-l-4 border-orange-600 pl-4 text-2xl text-slate-200 leading-10">
                            Launch Websites in minutes
                        </p>
                        <p className="text-lg text-slate-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nam nihil reprehenderit laboriosam,
                            exercitationem consectetur deserunt aliquam ab
                            maiores!
                        </p>
                    </div>
                    <div>
                        <p className="mb-6 border-l-4 border-orange-600 pl-4 text-2xl text-slate-200 leading-10">
                            Never miss deadlines
                        </p>
                        <p className="text-lg text-slate-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nam nihil reprehenderit laboriosam,
                            exercitationem consectetur deserunt aliquam ab
                            maiores!
                        </p>
                    </div>
                    <div>
                        <p className="mb-6 border-l-4 border-orange-600 pl-4 text-2xl text-slate-200 leading-10">
                            Super Intuitive
                        </p>
                        <p className="text-lg text-slate-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nam nihil reprehenderit laboriosam,
                            exercitationem consectetur deserunt aliquam ab
                            maiores!
                        </p>
                    </div>
                    <div>
                        <p className="mb-6 border-l-4 border-orange-600 pl-4 text-2xl text-slate-200 leading-10">
                            Speedy Websites
                        </p>
                        <p className="text-lg text-slate-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Nam nihil reprehenderit laboriosam,
                            exercitationem consectetur deserunt aliquam ab
                            maiores!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
