// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "trial",
    title: "Trial Services",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Service Name",
            type: "string"
        },
        {
            name: "rating",
            title: "Ratings",
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
            name: "starImg",
            title: "StarImg",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
}