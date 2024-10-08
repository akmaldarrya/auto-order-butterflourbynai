function App() {
    return (
        <div className="h-screen flex p-2">
            <div className="p-1 flex justify-around items-center w-full font-poppins ">
                <div className="bg-[#625aff] h-full w-[20rem] rounded-md flex justify-center items-start">
                    <div className="p-2 my-10 w-[12rem] flex flex-col gap-7">
                        <div className="flex justify-start items-center gap-5">
                            <div className="font-semibold bg-[#bce0fb] justify-center items-center w-8 rounded-full p-1 flex">
                                <p>1</p>
                            </div>
                            <div className="text-white">
                                <p className="text-xs">STEP 1</p>
                                <p className="font-semibold">YOUR INFO</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <div className="font-semibold border text-white justify-center items-center w-8 rounded-full p-1 flex">
                                <p>2</p>
                            </div>
                            <div className="text-white">
                                <p className="text-xs">STEP 2</p>
                                <p className="font-semibold">SELECT PLAN</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <div className="font-semibold border text-white justify-center items-center w-8 rounded-full p-1 flex">
                                <p>3</p>
                            </div>
                            <div className="text-white">
                                <p className="text-xs">STEP 3</p>
                                <p className="font-semibold">ADD-ONS</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <div className="font-semibold border text-white justify-center items-center w-8 rounded-full p-1 flex">
                                <p>4</p>
                            </div>
                            <div className="text-white">
                                <p className="text-xs">STEP 4</p>
                                <p className="font-semibold">SUMMARY</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full ml-1 h-full flex flex-col items-center">
                    <div className="p-5 w-[85%] flex flex-col gap-5 h-full">
                        <div className="flex flex-col">
                            <div className="text-[3rem] text-[#072852] font-bold">
                                <p>Personal Info</p>
                            </div>
                            <div className="text-sm font-semibold opacity-30">
                                Please provide your name, email address, and phone number.
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold text-[#072852]">
                                    <p>Name</p>
                                </div>
                                <input type="text" className="p-2 border-2 rounded-md focus:outline-none" placeholder="e.g. Stephen King" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold text-[#072852]">
                                    <p>Email Address</p>
                                </div>
                                <input type="text" className="p-2 border-2 rounded-md focus:outline-none" placeholder="e.g. Stephen King" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="text-sm font-semibold text-[#072852]">
                                    <p>Phone Number</p>
                                </div>
                                <input type="text" className="p-2 border-2 rounded-md focus:outline-none" placeholder="e.g. Stephen King" />
                            </div>
                        </div>
                        <div className="flex justify-end h-full w-full mt-5">
                            <div className="items-end flex">
                                <button className="bg-[#072852] p-2 rounded-lg w-[7rem] text-white font-semibold hover:scale-110 transition duration-300 ease-in-out">
                                    Next Step
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;