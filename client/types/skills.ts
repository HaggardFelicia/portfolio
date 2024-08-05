import { PortableTextBlock } from "next-sanity"


export type Skill = {
    _id: string;
    _createdAt: Date; 
    title: string;
    slug: string; 
    image: string;
    url: string;
    content: PortableTextBlock[];
    alt: string;
    last_used: Date;
}