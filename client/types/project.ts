import { PortableTextBlock } from "next-sanity"


export type Project = {
    _id: string;
    _createdAt: Date; 
    title: string;
    slug: string; 
    image: string;
    url: string;
    content: PortableTextBlock[];
    alt: string;
    tech: string;
    tech_name: string;
    date_started: Date;
    date_completed: Date;
}