import React from "react";
import { UserLink } from "@/components/UserLink";

export function renderNick(nick: string, className?: string) {
    return <UserLink nick={nick} className={className} />;
}
