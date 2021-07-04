// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "review",
    title: "Review",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Review Name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "notes",
            title: "Notes",
            type: "text"
        },
        {
            name: "bio",
            title: "Bio",
            type: "array",
            of: [
           
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: []
                },
            ],
        },
        
    ],

};