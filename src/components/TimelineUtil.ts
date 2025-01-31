export type TimelineFrontmatter = {
    ["tl-title"]: string,
    ["tl-summary"]: string,
    ["tl-pos"]: number
}

export type TimelineObject = {
    pos: "left" | "right",
    url: string
} & TimelineFrontmatter

export type RawTimelineObjectImport = {
    frontmatter: Partial<TimelineFrontmatter>,
    url: string
}