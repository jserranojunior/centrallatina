// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isInternalLink = (link: string) => /^\/(?!\/)/.test(link)
