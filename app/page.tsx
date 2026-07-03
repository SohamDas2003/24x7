import {
	HeroSection,
	Features,
	Brands,
	Services,
	About,
	Statistics,
	Contact,
	Footer,
	Locations,
} from "@/components";

export default function Home() {
	return (
		<div className="w-full bg-white">
			<HeroSection />
			<Features />
			<About />
			<Services />
			<Brands />
			<Statistics />
			<Locations />
			<Contact />
			<Footer />
		</div>
	);
}
