export interface Tour {
    id: number;
    title: string;
    category: 'Mountain' | 'Water' | 'Jungle' | 'Air';
    price: string;
    duration: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme';
    image: string;
    description: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}