const project = {
    // name of the schema
    name: 'project',
    // title of the schema
    title: 'Projects',
    // schema type
    type: 'document',
    // fields of the schema
    fields: [
        // name of the project
        {
            name: 'name', 
            title: 'Name',
            type: 'string'
        },
        // slug of the project taken from the name
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        // image of the project with hotspot and alt
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        // url of the project
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        // tech used in the project (image) in grid layout
        {
                name: 'Tech',
                title: 'Tech',
                type: 'array',
                of: [
                  { 
                    type: 'image',
                  },
                ],
                options: {
                  layout: 'grid'
                },
        },
        // name of tech used in project grid layout
        {
            name: 'tech_name',
            title: 'Tech_Name',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'grid'
              },
        },
        // date when project started
        {
            name: 'date_started',
            title: 'Date_Started',
            type: 'date'
        },
        // date the project was completed
        {
            name: 'date_completed',
            title: 'Date_Completed',
            type: 'date'
        },
        // other content for project
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}

export default project;