// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "header",
    title: "Header Component",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Header Name",
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
            title: "Greeting",
            name: "greeting",
            type: "string"
          }
    ],

};