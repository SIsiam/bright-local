// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "sponsor",
    title: "sponsors Brands",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Brands Name",
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