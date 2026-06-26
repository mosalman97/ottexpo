import { BannerItem, ChannelSection } from "@/types";


export const USER_NAME = "Mike John";
export const APP_VERSION = "Version 1.0.1 (1)";
export const MORE_ITEMS = [1, 2, 3, 4, 5];

export const SKELETON_SECTIONS = [
	{ title: "Popular", data: [] },
	{ title: "Trending", data: [] },
	{ title: "For You", data: [] },
];

export const banners: BannerItem[] = [
	{
		id: "1",
		image: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
	},
	{
		id: "2",
		image: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
	},
	{
		id: "3",
		image: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
	},
];

export const sections: ChannelSection[] = [
	{
		title: "Top Rated Movies",
		data: [
			{
				id: "tt0111161",
				title: "The Shawshank Redemption",
				subtitle: "Drama",
				image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				isPremium: false,
			},
			{
				id: "tt0068646",
				title: "The Godfather",
				subtitle: "Crime",
				image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				isPremium: true,
			},
			{
				id: "tt0468569",
				title: "The Dark Knight",
				subtitle: "Action",
				image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				isPremium: true,
			},
			{
				id: "tt0071562",
				title: "The Godfather: Part II",
				subtitle: "Crime",
				image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				isPremium: true,
			},
			{
				id: "tt0050083",
				title: "12 Angry Men",
				subtitle: "Crime",
				image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				ageRating: "16+",
				isPremium: true,
			},
		],
	},

	{
		title: "Oscar Winners",
		data: [
			{
				id: "tt0108052",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				title: "Schindler's List",
				subtitle: "Biography",
				image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0167260",
				title: "The Return of the King",
				subtitle: "Adventure",
				image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0120737",
				title: "The Fellowship of the Ring",
				subtitle: "Adventure",
				image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				isPremium: true,
			},
			{
				id: "tt0060196",
				title: "The Good, the Bad and the Ugly",
				subtitle: "Western",
				image: "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				ageRating: "16+",
				isPremium: true,
			},
		],
	},

	{
		title: "Trending Now",
		data: [
			{
				id: "tt0109830",
				title: "Forrest Gump",
				subtitle: "Drama",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0137523",
				title: "Fight Club",
				subtitle: "Drama",
				image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				isPremium: true,
			},
			{
				id: "tt1375666",
				title: "Inception",
				subtitle: "Action",
				image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0167261",
				title: "The Two Towers",
				subtitle: "Adventure",
				image: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0080684",
				title: "The Empire Strikes Back",
				subtitle: "Adventure",
				image: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0133093",
				title: "The Matrix",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				subtitle: "Action",
				image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0099685",
				title: "Goodfellas",
				subtitle: "Crime",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				image: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0073486",
				title: "One Flew Over the Cuckoo's Nest",
				subtitle: "Drama",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				image: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
			{
				id: "tt0114369",
				title: "Se7en",
				subtitle: "Crime",
				description:
					"Wrongly convicted of murdering his wife and her lover, banker Andy Dufresne is sentenced to life imprisonment at Shawshank State Penitentiary. Over the years he forms an unlikely friendship with fellow inmate Ellis 'Red' Redding and quietly transforms the lives of those around him through hope, patience, and resilience.",

				image: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
				year: 1994,
				duration: "2h 22m",
				rating: 9.3,
				genre: ["Drama"],
				quality: "4K",
				language: "English",
				ageRating: "16+",
				isPremium: true,
			},
		],
	},
];
