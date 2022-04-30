declare module "\*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.jpg" {
    export default "" as string;
}
declare module "*.png" {
    export default "" as string;
}