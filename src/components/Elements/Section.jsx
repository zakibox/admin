export function Section({ className, children, id }) {
    return (
        <section
            className={`${className} px-4 py-8 md:py-12 lg:py-16 xl:py-20`}
            id={id}
        >
            {children}
        </section>
    );
}