"use client"

import type * as React from "react";
import {Button} from '@mozaic-ds/react'

import { cn } from "@/lib/utils";

function McButton({
                   className,
                   ...props
               }: React.ComponentProps<typeof Button>) {
    return (
        <Button className={className} {...props} />
    );
}

export { McButton };
