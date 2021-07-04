// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "status",
    title: "status Name",
    type: "document",

    fields: [
        {
            name: "name",
            title: "status Name",
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
    ],

};