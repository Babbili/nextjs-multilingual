// add Types below
export interface tType {
    readonly [key: string]: string;
}

export interface headerPropsType {
    t: tType;
    styles: {
        readonly [key: string]: string;
    }
}