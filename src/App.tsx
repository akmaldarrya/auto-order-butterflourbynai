function App() {
    const handleWhatsAppMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // masukan tujuan nomor target
        const targetNumber = '6288298647044';

        const encodedMessage = encodeURIComponent(`AKU BUTTERLOVE MAU ORDER DONGGGGGGG... \nAKU MAU PESEN KAKKKK..\nPLISS AKU BM PRODUK KAKA BANGETTTTTT..`);

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl);
    }

    return (
        <div className="h-screen flex p-2">
            <div className="p-1 flex justify-around items-center w-full font-poppins ">
                <div className="w-full ml-1 h-full flex flex-col items-center">
                    <div className="p-5 w-[85%] flex flex-col gap-5 h-full">
                        <div className="flex flex-col">
                            <div className="text-[2rem] text-[#072852] font-bold">
                                <p>Butterflourbynai</p>
                            </div>
                            <div className="text-sm font-semibold opacity-30">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa repellat voluptates animi quas voluptatem eaque esse nesciunt, atque incidunt!
                            </div>
                        </div>
                        <form onSubmit={handleWhatsAppMessage} className="relative flex flex-col">
                            <div className="arrow-down w-[8rem] justify-center flex -top-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-[#072852]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <button type="submit" className="p-2 bg-[#072852] text-white rounded-md w-[8rem] hover:w-[15rem] transition-all duration-300 ease-in-out">
                                Order Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;