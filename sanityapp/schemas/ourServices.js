// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "services",
    title: "Our Services",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Service Name",
            type: "string"
        },
        {
            name: "heading",
            title: "Service Heading",
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
            name: "list1",
            type: "string"
        },
        {
            title: "Greeting",
            name: "list2",
            type: "string"
        },
        {
            title: "Greeting",
            name: "list3",
            type: "string"
        },
        {
            title: "Greeting",
            name: "list4",
            type: "string"
        },
    ],
}