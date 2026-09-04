export type SidebarItem = {
    slug: string;
    label?: string;
};

export type SidebarGroup = {
    label: string;
    items?: SidebarItem[];
    autogenerate?: { directory: string };
};

export type SidebarConfig = SidebarGroup[];

const sidebar: SidebarConfig = [
    {
        label: "Overview",
        autogenerate: { directory: "overview" },
    },
    {
        label: "Program",
        autogenerate: { directory: "program" },
    },
    {
        label: "Advice",
        autogenerate: { directory: "advice" },
    },
    {
        label: "Misc",
        autogenerate: { directory: "misc" },
    },

    {
        label: "Development",
        autogenerate: { directory: "development" },
    },
];

export default sidebar;
