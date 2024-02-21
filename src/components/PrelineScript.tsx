"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

let isImported = false;

export default function PrelineScript() {
    const pathname = usePathname();

    useEffect(() => {
        import("preline/preline").then(() => {
            isImported = true;
            window.HSStaticMethods.autoInit();
        });
    }, []);

    useEffect(() => {
        if (isImported) window.HSStaticMethods.autoInit();
    }, [pathname]);

    return null;
}