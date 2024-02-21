import { Container } from "../Elements";

export function TitleSection({ title, children }) {
    return (
        <div className="mb-4 text-center md:mb-6 lg:mb-8 xl:mb-10">
            <Container>
                <h2 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
                    {title}
                </h2>
                <p>{children}</p>
            </Container>
        </div>
    );
}