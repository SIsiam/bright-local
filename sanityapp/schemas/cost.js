// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "cost",
    title: "Cost Services",
    type: "document",

    fields: [
        {
            name: "name",
            title: "Service Name",
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
            name: "crossImg",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

        {
            title: "List",
            name: "list1",
            type: "string"
        },
        {
            title: "List",
            name: "list2",
            type: "string"
        },
        {
            title: "List",
            name: "list3",
            type: "string"
        },
    ],
}