import { Project } from "@/types/project"
import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { Page } from "@/types/page"
import { Skill } from "@/types/skills"


// Function to get all the projects
export async function getProjects(): Promise<Project[]>{
    // Fetching the data from the projects dataset and returning it
    return createClient(clientConfig).fetch(
        groq`*[_type=='project']{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt,
            tech: image.asset->url,
           tech_name
           date_started,
           date_completed
        }` 
        // * gets everything in dataset[] filters the query {} the projection
    )
}
// Function to get a single project
export async function getProject(slug: string): Promise<Project>{
    // Fetching the data from the project and returning it
    return createClient(clientConfig).fetch(
        groq`*[_type=='project' && slug.current == $slug][0]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt,
            tech: image.asset->url,
           tech_name
           date_started,
           date_completed
        }` ,
        {slug}
        // * gets everything in dataset[] filters the query {} the projection
    )
}
// Function to get all the pages
export async function getPages(): Promise<Page[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type=='page']{
            _id, 
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt
        }`
    )    
}
// Function to get a single page
export async function getPage(slug: string): Promise<Page>{
    return createClient(clientConfig).fetch(
        groq`*[_type=='page' && slug.current == $slug][0]{
           _id, 
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt
        }`,
        {slug}
    )
}
// Function to get all skills
export async function getSkills(): Promise<Skill[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type=='skill']{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
            "alt" : image.alt,
            last_used
        }`
    )    
};