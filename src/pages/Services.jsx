export const Services = () => {
    return (
        <div className="">
            <div className="flex gap-10 mb-16 2xl:mb-20">
                <h2 className="bg-[#B9FF66] text-3xl inline-block p-2 rounded-md font-medium">Services</h2>

                <p className="w-[580px] h-[46px] text-lg">At our digital marketing agency, we
                    offer a range of services to help businesses grow and succeed online. These
                    services include:</p>
            </div>

            {/* Services Cards */}

            <div className="grid grid-cols-2 gap-20">
                {/* Services Cards One */}

                <div
                    className="bg-[#F3F3F3] h-[280px] w-[500px] border rounded-[45px] flex justify-between p-12">
                    <div className="w-1/2">
                        <div>
                            <h2 className="bg-[#B9FF66] inline-block text-lg font-md rounded-md p-1">Search engine</h2>
                            <h2 className="bg-[#B9FF66] inline-block text-lg font-md rounded-md p-1">Optimization</h2>
                        </div>

                        <div className="flex items-end gap-3 mt-20">
                            <div
                                className="w-8 h-8 rounded-full bg-[#191A23] flex items-center justify-center">
                                <img src="/Arrow Icon.png" alt="Arrow Icon" className="w-4 h-4"/>
                            </div>
                            <h4>Learn More</h4>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <img src="/search engine.png" alt="Search Engine" className="object-contain"/>
                    </div>
                </div>

                {/* Services Cards Two */}
                <div
                    className="bg-[#F3F3F3] h-[280px] w-[500px] border rounded-[45px] flex justify-between p-12">
                    <div className="w-1/2">
                        <div>
                            <h2 className="bg-[#B9FF66] inline-block text-lg font-md rounded-md p-1">Search engine</h2>
                            <h2 className="bg-[#B9FF66] inline-block text-lg font-md rounded-md p-1">Optimization</h2>
                        </div>

                        <div className="flex items-end gap-3 mt-20">
                            <div
                                className="w-8 h-8 rounded-full bg-[#191A23] flex items-center justify-center">
                                <img src="/Arrow Icon.png" alt="Arrow Icon" className="w-4 h-4"/>
                            </div>
                            <h4>Learn More</h4>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <img src="/search engine.png" alt="Search Engine" className="object-contain"/>
                    </div>
                </div>

                {/* Services Cards Three */}
                <div
                    className="bg-[#F3F3F3] h-[280px] w-[500px] border rounded-[45px] flex justify-between p-12">
                    <div className="w-1/2">
                        <div>
                            <h2 className="bg-[#B9FF66] inline-block text-lg font-md rounded-md p-1">Search engine</h2>
                            <h2 className="bg-[#B9FF66] inline-block text-lg font-md rounded-md p-1">Optimization</h2>
                        </div>

                        <div className="flex items-end gap-3 mt-20">
                            <div
                                className="w-8 h-8 rounded-full bg-[#191A23] flex items-center justify-center">
                                <img src="/Arrow Icon.png" alt="Arrow Icon" className="w-4 h-4"/>
                            </div>
                            <h4>Learn More</h4>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <img src="/search engine.png" alt="Search Engine" className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    )
}