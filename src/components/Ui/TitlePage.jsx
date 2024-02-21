import { useNavigate } from "react-router-dom";
import { Button, Container } from "../Elements";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function TitlePage({ title, children }) {
    const navigate = useNavigate();
    return (
        <div className="p-4 bg-slate-50 md:py-8 lg:py-12">
            <Container>
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl text-slate-900">
                            {title}
                        </h1>
                        <p className="max-w-[75ch] text-balance text-slate-700">
                            {children}
                        </p>
                    </div>

                    <Button className="px-3" onClick={() => navigate(-1)}>
                        <ChevronLeftIcon
                            className="w-6 h-6"
                            strokeWidth="2.5"
                        />
                    </Button>
                </div>
            </Container>
        </div>
    );
}
