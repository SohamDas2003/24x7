"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

type Region = {
	name: string;
	cities: string[];
};

const locationsData: Region[] = [
	{
		name: "North India",
		cities: [
			"Delhi NCR",
			"Gurugram",
			"Noida",
			"Ghaziabad",
			"Jaipur",
			"Chandigarh",
			"Lucknow",
		],
	},
	{
		name: "West India",
		cities: [
			"Mumbai",
			"Thane",
			"Navi Mumbai",
			"Pune",
			"Ahmedabad",
			"Surat",
			"Nagpur",
		],
	},
	{
		name: "South India",
		cities: [
			"Bengaluru",
			"Chennai",
			"Hyderabad",
			"Kochi",
			"Coimbatore",
		],
	},
	{
		name: "East & Central",
		cities: [
			"Kolkata",
			"Patna",
			"Bhubaneswar",
			"Indore",
			"Bhopal",
			"Raipur",
		],
	},
];

export default function Locations() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="locations"
			className="w-full py-16 md:py-20 bg-slate-50 border-t border-gray-200"
			ref={sectionRef}>
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-12">
					<span className="text-sm font-bold text-[#ca2929] uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-none inline-block mb-3">
						Our Network
					</span>
					<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
						Locations We Serve <span className="text-[#ca2929]">Pan India</span>
					</h2>
					<p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
						Providing professional doorstep home appliance repair services across major cities in India.
					</p>
				</div>

				{/* Regions and Pills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{locationsData.map((region, regionIndex) => (
						<div
							key={region.name}
							className={`bg-white border border-slate-100 p-6 rounded-none shadow-sm transition-all duration-700 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
							style={{
								transitionDelay: `${regionIndex * 150}ms`,
								transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
							}}>
							<h3 className="text-xs uppercase tracking-widest text-[#ca2929] font-extrabold mb-4 pb-2 border-b border-red-100">
								{region.name}
							</h3>
							<div className="flex flex-wrap gap-2.5">
								{region.cities.map((city) => (
									<div
										key={city}
										className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 text-slate-700 border border-slate-200/60 rounded-none text-xs font-bold transition-all duration-300 hover:bg-white hover:border-[#ca2929] hover:text-[#ca2929] hover:shadow-sm">
										<MapPin size={12} className="text-[#ca2929]" />
										<span>{city}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
