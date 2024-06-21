import React, { useEffect, useState } from "react";


export default function useActive(ref: React.RefObject<HTMLElement>) {
    const [active, setActive] = useState<string>("");
    function handleClick(ev: React.MouseEvent<HTMLElement, MouseEvent>) {
        const target: HTMLElement = (ev.currentTarget as HTMLElement);
        setActive(target.id);
    }
    function outsideClick(ev: MouseEvent) {
        if (ref.current && !(ref.current.contains((ev.target as HTMLElement)))) {
            setActive("");
        }
    }

    useEffect(() => {
        document.addEventListener("click", outsideClick);
        return () => { document.removeEventListener("click", outsideClick); }
    }, [ref]);
    return { active,handleClick };
};