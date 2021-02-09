type CommandOptions = {
    name: string,
    alias?: string[],
    nsfw?: boolean,
    category?: string | string[]
    hidden?: boolean,
    devonly?: boolean,
    dmonly?: boolean,
    guildonly?: boolean

}

export default class Command {
    // private opts:CommandOptions | undefined
    public opts
    // opts : CommandOptions
    constructor(options: CommandOptions) {
        this.opts = {}
        this.opts.name = options.name
        this.opts.alias = options.alias || []
        this.opts.nsfw = options.nsfw || false
        this.opts.category = options.category || ["General"]
        this.opts.hidden = options.hidden || false
        this.opts.devonly = options.devonly || false
        this.opts.dmonly = options.dmonly || false
        this.opts.guildonly = options.guildonly || false

    }

    async run() {

        console.log("This is the Base Command, overwrite this function.")

    }

}