export declare class imgproc {
    pyrdown(src: {
        cols: any;
        rows: any;
        channel: any;
        data: any;
    }, dst: {
        resize: (arg0: number, arg1: number, arg2: any) => void;
        data: any;
    }, sx: number, sy: number): void;
    scharr_derivatives(src: {
        cols: any;
        rows: any;
        data: any;
        type: number;
    }, dst: {
        resize: (arg0: any, arg1: any, arg2: number) => void;
        data: any;
    }): void;
}
