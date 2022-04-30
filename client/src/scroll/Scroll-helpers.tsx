type Scroll = {
    element: any,
    delay: any,
    behavior: string
}

type WindowScrollTo = {
    offset: any,
    left: number,
    behavior: string,
}

export default class ScrollHelpers {
    static scrollTo({element, delay = null, behavior = "smooth"}: Scroll) {
        if (typeof window === "undefined") {
            // console.log("no window");
            return;
        }

        window.requestAnimationFrame(() => {
            let offset = element.offsetTop;
            try {
                let bodyRect = document.body.getBoundingClientRect();
                let bodyStyle = window.getComputedStyle(document.body, null);

                // need to handle the padding for the top of the body
                let paddingTop = parseFloat(bodyStyle.getPropertyValue("padding-top"));

                let elementRect = element.getBoundingClientRect();
                offset = elementRect.top - paddingTop - bodyRect.top;
            } catch (err) {
                console.log("oh noes!");
            }



            if (delay) {
                setTimeout(() => {
                    window.scrollTo({ top: offset, left: 0, behavior: "smooth" });
                }, delay);
            } else {
                window.scrollTo({ top: offset, left: 0, behavior: "smooth" });
            }
        });
    }

    // static scrollIntoView({element, delay = null, behavior = "smooth"}: Scroll) {
    //     if (delay) {
    //         setTimeout(() => {
    //             element.scrollIntoView({ behavior });
    //         }, delay);
    //     } else element.scrollIntoView({ behavior });
    // }
    //
    // static setScrollPosition(
    //     { top = 0, left = 0 } = {},
    //     delay = null,
    //     behavior = "smooth"
    // ) {
    //     if (delay) {
    //         setTimeout(() => {
    //             window.scroll({ top, left, behavior });
    //         }, delay);
    //     } else {
    //         window.scroll({ top, left }, behavior);
    //     }
    // }
    //
    // static scrollTop({delay = null, behavior = "smooth"}: Scroll) {
    //     if (typeof window === "undefined") return;
    //
    //     window.requestAnimationFrame(() => {
    //         if (delay) {
    //             setTimeout(() => {
    //                 window.scroll({ top: 0, left: 0, behavior });
    //             }, delay);
    //         } else window.scroll({ top: 0, left: 0, behavior });
    //     });
    // }
}
