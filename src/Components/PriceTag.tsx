import React from "react";

const PricingTable: React.FC = () => {
    const plans = [
        {
            title: "FREE!",
            price: "$0/mo",
            description: "30 Days Trial",
            features: [
                { feature: "1 User", available: true },
                { feature: "Admin Dashboard", available: true },
                { feature: "Live Chat Service", available: false },
                { feature: "Special Offers", available: false },
                { feature: "Free Support", available: true },
            ],
            button: "GET STARTED NOW",
            highlight: false,
        },
        {
            title: "FREELANCER",
            price: "$3.99/mo",
            description: "Best for Freelance Team",
            features: [
                { feature: "1 User", available: true },
                { feature: "Admin Dashboard", available: true },
                { feature: "Live Chat Service", available: true },
                { feature: "Special Offers", available: false },
                { feature: "Free Support", available: true },
            ],
            button: "GET STARTED NOW",
            highlight: false,
        },
        {
            title: "STARTUP",
            price: "$10/mo",
            description: "Best for small startups",
            features: [
                { feature: "20 Users", available: true },
                { feature: "Admin Dashboard", available: true },
                { feature: "Live Chat Service", available: true },
                { feature: "Special Offers", available: true },
                { feature: "Free Support", available: true },
            ],
            button: "GET STARTED NOW",
            highlight: true,
        },
        {
            title: "COMPANY",
            price: "$15.99/mo",
            description: "Best for Big Team",
            features: [
                { feature: "1 User", available: true },
                { feature: "Admin Dashboard", available: true },
                { feature: "Live Chat Service", available: false },
                { feature: "Special Offers", available: false },
                { feature: "Free Support", available: true },
            ],
            button: "GET STARTED NOW",
            highlight: false,
        },
    ];

    return (
        <div className="py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`shadow-none ${plan.highlight
                            ? "bg-blue-100 border-blue-600"
                            : "bg-white border-gray-300"
                            } border`}
                    >
                        <div className="p-6 text-center">
                            <h3
                                className={`text-xl font-semibold ${plan.highlight ? "text-blue-600" : ""
                                    }`}
                            >
                                {plan.title}
                            </h3>
                            <p
                                className={`text-4xl font-bold ${plan.highlight ? "text-blue-600" : "text-gray-800"
                                    }`}
                            >
                                {plan.price}
                            </p>
                            <p
                                className={`text-sm ${plan.highlight ? "text-blue-600 font-medium" : "text-gray-500"
                                    }`}
                            >
                                {plan.description}
                            </p>
                        </div>
                        <ul className="px-6 py-4 space-y-3 text-sm">
                            {plan.features.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={item.available ? "text-gray-600" : "text-gray-400"}
                                >
                                    {item.available ? "✔" : "✖"} {item.feature}
                                </li>
                            ))}
                        </ul>
                        <div className="text-center p-6">
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                {plan.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
