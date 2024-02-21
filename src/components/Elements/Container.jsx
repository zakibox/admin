export function Container({ className, children, maxWidth }) {
    let containerClasses = "";
    switch (maxWidth) {
        case "xs":
            containerClasses = "max-w-md";
            break;
        case "sm":
            containerClasses = "max-w-xl";
            break;
        case "md":
            containerClasses = "max-w-2xl";
            break;
        case "lg":
            containerClasses = "max-w-4xl";
            break;
        case "xl":
            containerClasses = "max-w-7xl";
            break;
        default:
            containerClasses = "max-w-6xl";
    }

    return (
        <div className={`${className} container mx-auto ${containerClasses}`}>
            {children}
        </div>
    );
}