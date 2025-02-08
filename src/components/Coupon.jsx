import { useEffect, useState } from "react";
import anime from "animejs";

export const Coupon = () => {
    const coupons = [
        { image: "/coupon/Seafood.png", alt: "Seafood" },
        { image: "/coupon/Bioskop.png", alt: "Bioskop" },
        { image: "/coupon/Batu.png", alt: "Batu" },
        { image: "/coupon/mitufaya.png", alt: "mitufaya" },
    ];

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const coupon = localStorage.getItem("coupon-selected");
        if (coupon) {
            setIsHidden(true);
        }
    }, []);

    const saveCoupon = (e) => {
        const confirmed = window.confirm("Beneran milih kupon itu ?");
        if (!confirmed) return;

        localStorage.setItem("coupon-selected", e.target.alt);

        anime({
            targets: "#coupon",
            opacity: 0,
            duration: 1500,
            easing: "easeInOutQuad",
            complete: () => {
                setIsHidden(true);
                window.scrollTo(0, document.body.scrollHeight);
            }
        });
    };

    const resetCoupon = () => {
        localStorage.removeItem("coupon-selected");
        setIsHidden(false);
    };

    if (isHidden) return (
        <div id="coupon" className="mt-72">
            <h1 className="text-7xl font-extrabold text-old_dark flex flex-col items-center">
                <img width={120} height={120} src={'/gift.png'} alt="gift_icon" />
                KUPON TERSIMPAN
            </h1>

            <div className="mt-24 flex justify-center space-x-12 items-center">
                <img src={`/coupon/${localStorage.getItem("coupon-selected")}.png`} alt={localStorage.getItem("coupon-selected")} />
            </div>

            <button onClick={resetCoupon} className="mt-12 px-4 py-2 bg-blue-500 text-white rounded">
                Pilih Ulang Kupon
            </button>
        </div>
    );

    return (
        <div id="coupon" className="mt-72">
            <h1 className="text-7xl font-extrabold text-old_dark">
                YUK DIPILIH <br />
                <div className="flex items-center justify-center">
                    PILIH <img width={120} height={120} src={'/gift.png'} alt="gift_icon" /> CUPON
                </div>
            </h1>

            <div className="mt-24 flex justify-between space-x-12 items-center">
                {coupons.map((coupon, index) => (
                    <button className="hover:scale-105 transition-transform duration-300" onClick={saveCoupon} key={index}>
                        <img src={coupon.image} alt={coupon.alt} />
                    </button>
                ))}
            </div>
        </div>
    );
};
