/* eslint-disable */
type PtMessages = typeof import("./src/messages/pt.json");
type EnMessages = typeof import("./src/messages/en.json");

declare interface IntlMessages extends PtMessages, EnMessages {}
