/**
 * Text file containing message templates for a given channel
 */
export interface TextFile {
    /**
     * Channel ID where the messages are located
     */
    channelID: string
    /**
     * Messages that should be loaded into the channel
     */
    messages: TextFileMessage[]

}

/**
 * Single message in a {@link TextFile}
 */
export interface TextFileMessage {
    /**
     * ID of the message
     */
    id: string
    /**
     * Content of the message
     */
    content: string[]
    /**
     * Object of key-value pairs where each key is a role name and value is an emoji
     */
    reactions: object,
    /**
     * Components of the message
     */
    components?: {
        /**
         * Dropdowns of the message
         */
        dropdowns?: {
            /**
             * ID of the dropdown
             */
            id: string
            /**
             * Flag of the dropdown
             */
            flag: string
            /**
             * Placeholder used in the dropdown
             */
            placeholder: string
            /**
             * Minimum number of items that must be selected in the dropdown
             */
            min: number
            /**
             * Maximum number of items that must be selected in the dropdown
             */
            max: number
            /**
             * List of options for this dropdown
             */
            options: string[]
        }[]
        /**
         * Buttons of this message
         */
        buttons?: {
            /**
             * ID of the button
             */
            id: string
            /**
             * Label of the button
             */
            label: string
            /**
             * Style of the button
             */
            style: string
        }[]
    }
}