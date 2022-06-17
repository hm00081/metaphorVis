export type Cloud = WordData & {
    Type: string;
};

export type WordData = {
    TAR: Content[];
    INT: Content[];
    REP: Content[];
    VAR: Content[];
    TEC: Content[];
};

export type Content = {
    text: string;
    value: number;
};
